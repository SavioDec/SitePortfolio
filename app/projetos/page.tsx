import Link from "next/link";
import { projects } from "@/src/data/data";
import { getDictionary } from "@/src/utils/lang";

export default async function Projetos() {
    const dict = await getDictionary();

    return (
        <section className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">

                {/* Header da Seção */}
                <div className="mb-16">
                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                        {dict.projetos.title1} <br className="hidden lg:block" />
                        <span className="text-red-600 dark:text-red-500">{dict.projetos.title2}</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                        {dict.projetos.subtitle}
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
                                            {project.demoUrl ? (
                                                <svg className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {project.demoUrl ? dict.projetos.demo : dict.projetos.github} &rarr;
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors text-slate-900 dark:text-white">
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
        </section>
    );
}