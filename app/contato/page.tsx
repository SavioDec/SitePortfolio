"use client";

import Link from "next/link";

export default function Contato() {
    return (
        <section className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen flex flex-col justify-center">
            <div className="max-w-5xl mx-auto px-6 py-20 lg:py-32 w-full">

                {/* Header de Impacto */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Vamos construir o <span className="text-red-600 dark:text-red-500">futuro?</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Estou disponível para discutir projetos de automação, oportunidades Full Stack ou criações de Websites.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Card 1: Canais Diretos (Prioridade Alta) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-center space-y-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Canais Diretos
                        </h3>

                        {/* Email */}
                        <a
                            href="mailto:contato@saviodecaro.dev"
                            className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                        >
                            <div className="bg-red-100 dark:bg-red-900/30 p-3.5 rounded-xl text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</p>
                                <p className="text-lg font-bold text-slate-900 dark:text-white break-all">contato@saviodecaro.dev</p>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/5516993508184"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all border border-transparent hover:border-green-200 dark:hover:border-green-900/30"
                        >
                            <div className="bg-green-100 dark:bg-green-900/30 p-3.5 rounded-xl text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"></p>
                                <p className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp</p>
                            </div>
                        </a>

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="font-medium">Ribeirão Preto, SP</span>
                            </div>
                        </div>

                    </div>

                    {/* Card 2: Redes Profissionais (Portfólio & Network) */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl flex flex-col justify-center space-y-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Conecte-se
                        </h3>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/savio-mariguela-decaro-1a06b1279/"
                            target="_blank"
                            className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-[#0077B5] p-3 rounded-lg text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white text-lg">LinkedIn</span>
                            </div>
                            <svg className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/SavioDec"
                            target="_blank"
                            className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-slate-900 dark:bg-white p-3 rounded-lg text-white dark:text-slate-900">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white text-lg">GitHub</span>
                            </div>
                            <svg className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}