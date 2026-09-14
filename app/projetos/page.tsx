import Image from "next/image";
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
                            href={`/projetos/${project.id}`}
                            key={project.id}
                            className="group block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                        >
                            {/* Thumb do Projeto (Mockup / Imagem) */}
                            <div className="relative w-full h-60 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-slate-400">
                                        <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    </div>
                                )}

                                {/* Overlay gradient ao passar o mouse */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-medium flex items-center gap-2">
                                        {project.demoUrl ? dict.projetos.demo : dict.projetos.github}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </span>
                                </div>
                            </div>

                            {/* Informações do Projeto */}
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 flex-1">
                                    {project.description}
                                </p>

                                {/* Tags das Tecnologias */}
                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}