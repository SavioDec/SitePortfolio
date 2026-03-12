import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-25 pb-12 lg:py-32 flex flex-col gap-12 lg:gap-16 w-full">

                {/* Hero Section */}
                <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">

                    <div className="flex-1 space-y-6 text-center lg:text-left w-full">
                        {/* Títulos ajustados para não ficarem gigantes no mobile */}
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                            Sávio Mariguela Decaro <br />
                            <span className="text-red-600 dark:text-red-500 text-2xl sm:text-3xl lg:text-5xl block mt-2">
                                Full Stack & .NET Engineer
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Engenharia de software focada em <strong>Aplicações Web Escaláveis</strong> e ecossistema <strong>.NET</strong>.
                            Especialista em construir soluções completas, unindo a performance do C# no backend com a interatividade do <strong>Next.js</strong> no frontend.
                        </p>

                        {/* Botões: w-full no mobile para facilitar o toque, w-auto no desktop */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
                            <a
                                href="#projects"
                                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:scale-95 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-red-600/20 text-center"
                            >
                                Ver Projetos
                            </a>

                            <a
                                href="/Curriculo_Savio_Decaro_PT.pdf"
                                download="Curriculo_Savio_Decaro.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md active:scale-95"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Baixar Currículo
                            </a>
                        </div>
                    </div>

                    {/* Imagem: Tamanho responsivo (menor no mobile, maior no desktop) */}
                    <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 shrink-0 rounded-full lg:rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl ring-2 ring-slate-100 dark:ring-slate-800">
                        <Image
                            src="/profile.jpg"
                            alt="Sávio Mariguela Decaro"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="border-t border-slate-200 dark:border-slate-800 pt-10">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 text-center lg:text-left">
                        Core Technologies
                    </h2>

                    {/* Transformei em Badges para ficar mais organizado no mobile */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {[
                            ".NET Core", "Next.js", "React",
                            "TypeScript", "AWS", "PostgreSQL"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 hover:border-red-500/50 hover:text-red-500 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}