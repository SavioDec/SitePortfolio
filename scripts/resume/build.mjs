// Gera os currículos em PDF (A4, texto real, 1 coluna) a partir de HTML via Chromium.
// Uso: npm run resume            -> escreve em scripts/resume/out/
//      npm run resume -- --publish -> também copia para public/
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { resumes } from "./content.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(dir, "out");
const publicDir = path.join(dir, "..", "..", "public");
const publish = process.argv.includes("--publish");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const list = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
const section = (title, inner) => `<section><h2>${esc(title)}</h2>${inner}</section>`;

function body(r) {
  const contact = [r.city, r.phone, r.email, r.linkedin, r.github, r.site].map(esc).join(" | ");
  const jobs = r.jobs
    .map((j) => `<div class="entry"><p class="entry-head">${esc(j.title)} | ${esc(j.org)}</p><p class="entry-sub">${esc([j.place, j.period].filter(Boolean).join(" | "))}</p>${list(j.bullets)}</div>`)
    .join("");
  const edu = r.education
    .map((e) => `<div class="entry"><p class="entry-head">${esc(e.title)}</p><p>${esc(e.org)} | ${esc(e.detail)}</p></div>`)
    .join("");
  const skills = r.skills.map(([k, v]) => `<p><strong>${esc(k)}:</strong> ${esc(v)}</p>`).join("");
  const projects = `<ul>${r.projects.map((p) => `<li><strong>${esc(p.title)}:</strong> ${esc(p.text)}</li>`).join("")}</ul>`;
  return [
    `<header><h1><span class="first">${esc(r.name.split(" ")[0])}</span> <span class="last">${esc(r.name.split(" ").slice(1).join(" "))}</span></h1><p class="role">${esc(r.role)}</p><p class="contact">${contact}</p></header>`,
    section(r.h.summary, `<p>${esc(r.summary)}</p>`),
    section(r.h.experience, jobs),
    section(r.h.education, edu),
    section(r.h.skills, skills),
    section(r.h.projects, projects),
    section(r.h.courses, list(r.courses)),
    section(r.h.languages, list(r.languages)),
  ].join("\n");
}

await mkdir(outDir, { recursive: true });
const [template, css] = await Promise.all([readFile(path.join(dir, "template.html"), "utf8"), readFile(path.join(dir, "style.css"), "utf8")]);
const browser = await chromium.launch();
for (const r of Object.values(resumes)) {
  const html = template
    .replace("{{lang}}", r.lang)
    .replace("{{title}}", esc(r.docTitle))
    .replace("{{css}}", () => css)
    .replace("{{body}}", () => body(r));
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "load" });
  const raw = await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true });
  await page.close();

  const doc = await PDFDocument.load(raw);
  doc.setTitle(r.docTitle);
  doc.setAuthor(r.name);
  doc.setSubject(r.subject);
  doc.setKeywords(r.keywords.split(", "));
  doc.setCreator("scripts/resume/build.mjs");
  doc.setProducer("Chromium (Playwright) + pdf-lib");
  doc.setLanguage(r.lang);
  const file = path.join(outDir, r.file);
  await writeFile(file, await doc.save());
  console.log(`${r.file}: ${doc.getPageCount()} página(s)`);
  if (publish) await copyFile(file, path.join(publicDir, r.file));
}
await browser.close();
