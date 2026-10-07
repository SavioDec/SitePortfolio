import Link from "next/link";
import { getDictionary } from "@/src/utils/lang";
import { rich } from "@/src/utils/rich";
import Reveal from "@/src/components/Reveal";

export default async function Sobre() {
    const dict = await getDictionary();

    return (
        <section className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
            <div className="max-w-5xl mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-32">

                {/* Header: Quem sou eu (Resumo de impacto) */}
                <Reveal className="mb-16">
                    <h1 className="text-[clamp(2.25rem,8vw,4.5rem)] font-black leading-[1.05] text-slate-900 dark:text-white mb-6 tracking-tight">
                        {dict.sobre.title1} <br />
                        <span className="text-red-600 dark:text-red-500">{dict.sobre.title2}</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                        {dict.sobre.subtitle}
                    </p>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Coluna 1: A Jornada (Storytelling) */}
                    <div className="space-y-10">

                        <Reveal className="space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300 [&_strong]:text-slate-900 dark:[&_strong]:text-white">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                {dict.sobre.journeyTitle}
                            </h3>
                            <p>{rich(dict.sobre.journeyP1)}</p>
                            <p>{rich(dict.sobre.journeyP2)}</p>
                        </Reveal>

                        <Reveal className="space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300 [&_strong]:text-slate-900 dark:[&_strong]:text-white">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                {dict.sobre.movesTitle}
                            </h3>
                            <p>{rich(dict.sobre.movesP1)}</p>
                            <p>{rich(dict.sobre.movesP2)}</p>
                        </Reveal>

                    </div>

                    {/* Coluna 2: Interesses Pessoais (Hobbies que mostram mindset de engenharia) */}
                    <div className="space-y-8">

                        {/* Card: Interesses */}
                        <Reveal delay={150} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                {/* Ícone decorativo abstrato */}
                                <svg className="w-32 h-32 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l-12 12 12 12 12-12-12-12zm0 18l-6-6 6-6 6 6-6 6z"/></svg>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <span>⚡</span> {dict.sobre.hobbiesTitle}
                            </h3>

                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    </div>
                                    <div>
                                        <strong className="block text-slate-900 dark:text-slate-100">{dict.sobre.eletronica}</strong>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            {dict.sobre.eletronicaDesc}
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4 items-start">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                                            <circle cx="7" cy="17" r="2" strokeWidth="2" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6" />
                                            <circle cx="17" cy="17" r="2" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong className="block text-slate-900 dark:text-slate-100">{dict.sobre.carros}</strong>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            {dict.sobre.carrosDesc}
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4 items-start">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 3-2 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 3-2 3 2zM9 10l12-3" /></svg>
                                    </div>
                                    <div>
                                        <strong className="block text-slate-900 dark:text-slate-100">{dict.sobre.musica}</strong>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            {dict.sobre.musicaDesc}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Reveal>

                        {/* Call to Action para o Currículo */}
                        <Reveal delay={250} className="bg-slate-100 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                                {dict.sobre.ctaDesc}
                            </p>
                            <Link
                                href="/curriculo"
                                className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 min-h-12 rounded-xl active:scale-95 font-bold hover:opacity-90 transition-all w-full"
                            >
                                {dict.sobre.ctaButton}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </Reveal>

                    </div>
                </div>
            </div>
        </section>
    );
}