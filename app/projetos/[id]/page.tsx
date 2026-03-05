import { projects } from "../data";
import Link from "next/link";
import { notFound } from "next/navigation";


interface ProjectPageProps {
    params: Promise<{ id: string }>; // params é uma Promise agora
}

// 2. Metadados para SEO (Título da aba)
export async function generateMetadata({ params }: ProjectPageProps) {
    const { id } = await params; // Aguarda o ID
    const project = projects.find((p) => p.id === id);

    return {
        title: project ? `${project.title} | Sávio Decaro` : "Projeto não encontrado",
    };
}

// 3. Componente da Página
export default async function ProjectViewer({ params }: ProjectPageProps) {

    const { id } = await params;


    const project = projects.find((p) => p.id === id || p.id === decodeURIComponent(id));

    if (!project) {
        notFound();
    }

    return (
        <main className="h-screen flex flex-col bg-slate-50 dark:bg-slate-950 overflow-hidden">

            {/* Top Bar de Controle */}
            <div className="flex-none bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-40 shadow-sm pt-24 pb-4">

                <div className="flex items-center gap-4">
                    <Link
                        href="/projetos"
                        className="group flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                        <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </div>
                        <span className="hidden sm:inline">Voltar para Galeria</span>
                        <span className="sm:hidden">Voltar</span>
                    </Link>

                    <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2 hidden sm:block"></div>

                    <div>
                        <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-none">
                            {project.title}
                        </h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 hidden sm:block">
                            Visualização em tempo real via Iframe
                        </p>
                    </div>
                </div>

                <a
                    href={project.netlifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold hover:opacity-90 transition-all shadow-md active:scale-95"
                >
                    <span className="hidden sm:inline">Abrir Nova Aba</span>
                    <span className="sm:hidden">Nova Aba</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </div>

            {/* Área do Iframe */}
            <div className="flex-1 w-full relative bg-slate-200 dark:bg-slate-950">
                <iframe
                    src={project.netlifyUrl}
                    title={`Visualização do projeto ${project.title}`}
                    className="w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>

        </main>
    );
}