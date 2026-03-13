import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
    return (
        <section className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
            <div className="max-w-5xl mx-auto px-6 py-20 lg:py-32">

                {/* Header: Quem sou eu (Resumo de impacto) */}
                <div className="mb-16">
                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                        Mais que código, <br />
                        <span className="text-red-600 dark:text-red-500">eu crio soluções.</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                        De estudante de Agronomia a Engenheiro de Software. Apaixonado por entender como as coisas funcionam — seja debaixo do capô de um carro ou nos servidores de uma cloud.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Coluna 1: A Jornada (Storytelling) */}
                    <div className="space-y-10">

                        <div className="prose prose-slate dark:prose-invert prose-lg text-slate-600 dark:text-slate-300">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                O Pivot: Do Campo para a Nuvem
                            </h3>
                            <p>
                                Minha trajetória não foi linear, e isso é minha maior vantagem. Durante <strong>3 anos cursei Agronomia</strong> na Moura Lacerda. Lá, aprendi sobre processos, paciência e sistemas complexos da natureza.
                            </p>
                            <p>
                                Porém, a curiosidade pela tecnologia falou mais alto. Percebi que eu queria construir as ferramentas que otimizam o mundo. Mudei para <strong>Engenharia de Software na UNAERP</strong> e me encontrei. Essa bagagem me deu uma visão pragmática: software não serve apenas para rodar, ele precisa resolver problemas reais.
                            </p>
                        </div>

                        <div className="prose prose-slate dark:prose-invert prose-lg text-slate-600 dark:text-slate-300">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                O que me move hoje
                            </h3>
                            <p>
                                Desenvolvedor Full Stack focado na construção de <strong>Web Applications escaláveis</strong>.Minha prioridade é a entrega de código limpo e sistemas distribuídos que eliminam gargalos técnicos, garantindo consistência entre ambientes de dev e produção.
                            </p>
                        </div>

                    </div>

                    {/* Coluna 2: Interesses Pessoais (Hobbies que mostram mindset de engenharia) */}
                    <div className="space-y-8">

                        {/* Card: Interesses */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                {/* Ícone decorativo abstrato */}
                                <svg className="w-32 h-32 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l-12 12 12 12 12-12-12-12zm0 18l-6-6 6-6 6 6-6 6z"/></svg>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <span>⚡</span> Beyond the Keyboard
                            </h3>

                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    </div>
                                    <div>
                                        <strong className="block text-slate-900 dark:text-slate-100">Eletrônica & IoT</strong>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            Mexer com hardware me ensina sobre limitações de recursos e otimização extrema.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4 items-start">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                    </div>
                                    <div>
                                        <strong className="block text-slate-900 dark:text-slate-100">Carros & Mecânica</strong>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            Entusiasta automotivo. A engenharia mecânica complexa de um motor é uma fonte constante de inspiração.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4 items-start">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 3-2 3 2zm0 0c0 1.105 1.343 2 3 2s3-.895 3-2-3-2-3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 3-2 3 2zM9 10l12-3" /></svg>
                                    </div>
                                    <div>
                                        <strong className="block text-slate-900 dark:text-slate-100">Música</strong>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            Minha válvula de escape e criatividade.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Call to Action para o Currículo */}
                        <div className="bg-slate-100 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                                Quer ver os detalhes técnicos, stacks e experiência profissional?
                            </p>
                            <Link
                                href="/curriculo"
                                className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all w-full"
                            >
                                Ver Currículo Completo
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}