import Link from "next/link";
import { projects } from "./data";

export default function ProjectsGallery() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-24 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        Meus <span className="text-red-600 dark:text-red-500">Projetos</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Uma seleção de aplicações desenvolvidas com foco em performance, escalabilidade e experiência do usuário.
                        Clique em um card para testar a aplicação ao vivo.
                    </p>
                </div>

                {/* Grid de Projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projetos/${project.id}`}
                            className="group block h-full"
                        >
                            <article className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between group-hover:-translate-y-1">

                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-red-50 dark:group-hover:bg-red-900/20 transition-colors">
                                            <svg className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver Demo &rarr;
                    </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                                    ))}
                                </div>

                            </article>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}