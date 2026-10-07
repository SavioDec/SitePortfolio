"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project, ProjectCategory } from "@/src/data/data";
import Reveal from "./Reveal";

type Filter = "all" | ProjectCategory;

type Labels = {
    filterAll: string;
    filterMobile: string;
    filterWeb: string;
    filterBackend: string;
    filterLabel: string;
    demo: string;
    github: string;
    items: Record<string, string>;
};

function CardIcon({ project }: { project: Project }) {
    const cls = "w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors";
    if (project.category === "mobile") {
        return (
            <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="7" y="2" width="10" height="20" rx="2.5" strokeWidth="2" />
                <path strokeLinecap="round" strokeWidth="2" d="M11 18h2" />
            </svg>
        );
    }
    if (project.demoUrl) {
        return (
            <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        );
    }
    return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    );
}

export default function ProjectsGrid({ projects, labels }: { projects: Project[]; labels: Labels }) {
    const [filter, setFilter] = useState<Filter>("all");

    const filters: { key: Filter; label: string }[] = [
        { key: "all", label: labels.filterAll },
        { key: "mobile", label: labels.filterMobile },
        { key: "web", label: labels.filterWeb },
        { key: "backend", label: labels.filterBackend },
    ];
    const available = filters.filter((f) => f.key === "all" || projects.some((p) => p.category === f.key));
    const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

    return (
        <>
            {/* Filtros: rolagem horizontal no mobile, alvos de toque grandes */}
            <div
                role="group"
                aria-label={labels.filterLabel}
                className="-mx-6 mb-10 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {available.map((f) => (
                    <button
                        key={f.key}
                        onClick={() => setFilter(f.key)}
                        aria-pressed={filter === f.key}
                        className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                            filter === f.key
                                ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/25"
                                : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-red-500/50"
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <div key={filter} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {visible.map((project, i) => (
                    <Reveal key={project.id} delay={Math.min(i, 5) * 80} className="h-full">
                        <Link href={`/projetos/${project.id}`} className="group block h-full">
                            <article className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:border-red-500/40 group-hover:shadow-2xl group-hover:shadow-red-500/10 group-active:scale-[0.98]">
                                <div>
                                    <div className="mb-4 flex items-start justify-between">
                                        <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3 transition-colors group-hover:bg-red-50 dark:group-hover:bg-red-900/20">
                                            <CardIcon project={project} />
                                        </div>
                                        <span className="font-mono text-xs text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 max-sm:opacity-100">
                                            {project.demoUrl ? labels.demo : labels.github} &rarr;
                                        </span>
                                    </div>

                                    <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-red-600 dark:group-hover:text-red-400">
                                        {project.title}
                                    </h3>
                                    <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                        {labels.items[project.id] ?? project.description}
                                    </p>
                                </div>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </>
    );
}
