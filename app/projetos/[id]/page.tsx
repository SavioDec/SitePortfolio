import { projects } from "@/src/data/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/src/utils/lang";

// 2. Metadados para SEO (Título da aba)
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // Aguarda o ID
    const project = projects.find((p) => p.id === id);

    const dict = await getDictionary();

    return {
        title: project ? project.title : dict.projetos.notFound,
    };
}

export default async function ProjetoDetalhe({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const dict = await getDictionary();
    const project = projects.find((p) => p.id === id || p.id === decodeURIComponent(id));

    if (!project) {
        notFound();
    }

    return (
        <main className="w-full h-[100dvh] flex flex-col bg-slate-50 dark:bg-slate-950 overflow-hidden">
            
            {/* Header da Barra do Iframe */}
            <header className="h-16 mt-12 flex items-center justify-between px-4 sm:px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0 shadow-sm z-10">
                
                {/* Botão Voltar */}
                <Link
                    href="/projetos"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors p-2 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="hidden sm:inline">{dict.projetos.back}</span>
                    <span className="sm:hidden">{dict.projetos.backMobile}</span>
                </Link>

                {/* Título Centralizado (apenas Desktop) */}
                <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2">
                    <h1 className="text-base font-bold text-slate-900 dark:text-white truncate max-w-xs lg:max-w-md">
                        {project.title}
                    </h1>
                    {project.demoUrl && (
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {dict.projetos.iframeText}
                        </span>
                    )}
                </div>

                {/* Ações Direita */}
                <div className="flex items-center gap-3">
                    <a
                        href={project.demoUrl || project.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-sm"
                    >
                        <span className="hidden sm:inline">{dict.projetos.newTab}</span>
                        <span className="sm:hidden">{dict.projetos.newTabMobile}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </header>

            {/* Iframe ou Fallback Container */}
            <div className="flex-1 w-full bg-slate-200 dark:bg-black relative">
                {project.demoUrl ? (
                    <iframe
                        src={project.demoUrl}
                        className="w-full h-full border-none absolute inset-0"
                        title={`${dict.projetos.iframeTitle} ${project.title}`}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl max-w-md border border-slate-200 dark:border-slate-800 shadow-xl">
                            <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{dict.projetos.unavailable}</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {dict.projetos.unavailableDesc}
                            </p>
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    {dict.projetos.github}
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>

        </main>
    );
}