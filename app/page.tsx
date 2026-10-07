import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/src/utils/lang";
import { rich } from "@/src/utils/rich";
import { mobileTech, baseTech } from "@/src/data/tech";
import Reveal from "@/src/components/Reveal";
import TypeWriter from "@/src/components/TypeWriter";
import HeroParallax from "@/src/components/HeroParallax";
import PhoneMockup from "@/src/components/PhoneMockup";
import Showcase from "@/src/components/Showcase";

export default async function Home() {
    const dict = await getDictionary();

    return (
        <main className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            {/* ------------------------------ HERO ------------------------------ */}
            <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 lg:pt-12">
                {/* Fundo: blobs desfocados */}
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                    <div className="blob h-72 w-72 bg-red-500 -top-10 -left-10 sm:h-96 sm:w-96" />
                    <div className="blob blob-2 h-64 w-64 bg-purple-500 top-1/3 right-0 sm:h-96 sm:w-96" />
                    <div className="blob blob-3 h-56 w-56 bg-orange-400 bottom-0 left-1/3 sm:h-80 sm:w-80" />
                </div>

                <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
                    {/* Texto */}
                    <HeroParallax className="text-center lg:text-left">
                        <Reveal>
                            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 backdrop-blur">
                                <span className="relative flex h-2 w-2" aria-hidden="true">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                                </span>
                                {dict.home.eyebrow}
                            </p>
                        </Reveal>

                        <Reveal delay={100}>
                            <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-black leading-[1.02] tracking-tight">
                                Sávio Decaro
                            </h1>
                        </Reveal>

                        <Reveal delay={200}>
                            <p className="mt-3 text-[clamp(1.5rem,5.5vw,3rem)] font-bold leading-tight tracking-tight">
                                {dict.home.role}
                                <span className="text-slate-400 dark:text-slate-500"> · </span>
                                <TypeWriter words={dict.home.words} />
                            </p>
                        </Reveal>

                        <Reveal delay={320}>
                            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0">
                                {rich(dict.home.description)}
                            </p>
                        </Reveal>

                        <Reveal delay={440}>
                            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                                <Link
                                    href="/projetos"
                                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-8 font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:bg-red-500 hover:shadow-red-500/40 active:scale-95"
                                >
                                    {dict.home.viewProjects}
                                </Link>
                                <a
                                    href={`/${dict.curriculo.resumePdfName}`}
                                    download={dict.curriculo.resumePdfName}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-white/20 bg-white/60 dark:bg-white/5 px-7 font-semibold backdrop-blur transition-all hover:bg-white dark:hover:bg-white/10 active:scale-95"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {dict.home.downloadResume}
                                </a>
                            </div>
                        </Reveal>
                    </HeroParallax>

                    {/* Celular com a foto */}
                    <Reveal variant="scale" delay={250} className="flex justify-center">
                        <div className="float-y">
                            <PhoneMockup platform="ios" className="[--phone-w:min(15rem,58vw)] lg:[--phone-w:17rem]">
                                <Image
                                    src="/profile.jpg"
                                    alt=""
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 60vw, 280px"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-[8%] text-white">
                                    <p className="text-lg font-bold leading-tight">Sávio Decaro</p>
                                    <p className="mt-0.5 text-xs text-white/70">{dict.home.role}</p>
                                    <div className="mt-3 flex gap-2">
                                        {dict.home.words.map((w) => (
                                            <span key={w} className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
                                                {w}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </PhoneMockup>
                        </div>
                    </Reveal>
                </div>

                {/* Dica de scroll */}
                <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-slate-400 sm:flex" aria-hidden="true">
                    {dict.home.scrollHint}
                    <span className="h-8 w-px animate-pulse bg-gradient-to-b from-slate-400 to-transparent" />
                </div>
            </section>

            {/* --------------------- SHOWCASE (sticky) --------------------- */}
            <Showcase copy={dict.showcase} />

            {/* ----------------------- TECNOLOGIAS ----------------------- */}
            <section className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
                <Reveal>
                    <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        {dict.home.coreTech}
                    </h2>
                </Reveal>

                <div className="mt-12 grid gap-10 md:grid-cols-2">
                    {[
                        { label: dict.home.mobileTech, items: mobileTech, accent: true },
                        { label: dict.home.baseTech, items: baseTech, accent: false },
                    ].map((group, g) => (
                        <Reveal key={group.label} delay={g * 120}>
                            <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:text-left">
                                {group.label}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                                {group.items.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`cursor-default rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-all duration-500 hover:-translate-y-1 sm:text-base ${
                                            group.accent
                                                ? "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20"
                                                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-red-500/50 hover:text-red-500"
                                        }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </main>
    );
}
