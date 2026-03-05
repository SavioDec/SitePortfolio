import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col gap-16">

                {/* Hero Section */}
                <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                            Sávio Mariguela Decaro <br />
                            <span className="text-red-600 dark:text-red-400 text-3xl lg:text-5xl">
                Full Stack & .NET Engineer
              </span>
                        </h1>


                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
                            Engenharia de software focada em <strong>Aplicações Web Escaláveis</strong> e ecossistema <strong>.NET</strong>.
                            Especialista em construir soluções completas, unindo a performance do C# no backend com a interatividade do <strong>Next.js</strong> no frontend.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <a
                                href="#projects"
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-red-600/20"
                            >
                                Ver Projetos
                            </a>

                        </div>
                    </div>

                    <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                        <Image
                            src="/profile.jpg"
                            alt="Sávio Mariguela Decaro"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </section>


                <section className="border-y border-slate-200 dark:border-slate-800 py-10">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6 text-center lg:text-left">
                        Core Technologies
                    </h2>

                    <div className="flex flex-wrap gap-x-8 gap-y-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all justify-center lg:justify-start">
                        <span className="font-bold text-xl flex items-center gap-2">.NET Core</span>
                        <span className="font-bold text-xl flex items-center gap-2">Next.js</span>
                        <span className="font-bold text-xl flex items-center gap-2">React</span>
                        <span className="font-bold text-xl flex items-center gap-2">TypeScript</span>
                        <span className="font-bold text-xl flex items-center gap-2">AWS</span>
                        <span className="font-bold text-xl flex items-center gap-2">PostgreSQL</span>
                    </div>
                </section>

            </div>
        </main>
    );
}