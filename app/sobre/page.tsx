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

                {/* A Jornada (Storytelling) */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    {[
                        { title: dict.sobre.journeyTitle, p1: dict.sobre.journeyP1, p2: dict.sobre.journeyP2 },
                        { title: dict.sobre.movesTitle, p1: dict.sobre.movesP1, p2: dict.sobre.movesP2 },
                    ].map((block) => (
                        <Reveal key={block.title} className="space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300 [&_strong]:text-slate-900 dark:[&_strong]:text-white">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{block.title}</h3>
                            <p>{rich(block.p1)}</p>
                            <p>{rich(block.p2)}</p>
                        </Reveal>
                    ))}
                </div>

                {/* Além do Teclado: interesses em tiles lado a lado */}
                <Reveal as="section" className="mb-16">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-red-600 rounded-full"></span>
                        {dict.sobre.hobbiesTitle}
                    </h3>
                    <ul className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            {
                                title: dict.sobre.eletronica,
                                desc: dict.sobre.eletronicaDesc,
                                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v2m8-2v2M8 19v2m8-2v2M3 8h2m-2 8h2m14-8h2m-2 8h2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2zm3 5h4v4h-4v-4z" />,
                            },
                            {
                                title: dict.sobre.carros,
                                desc: dict.sobre.carrosDesc,
                                icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6" /><circle cx="17" cy="17" r="2" /></>,
                            },
                            {
                                title: dict.sobre.musica,
                                desc: dict.sobre.musicaDesc,
                                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />,
                            },
                        ].map((item) => (
                            <li key={item.title} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-red-300 dark:hover:border-red-800 hover:shadow-lg hover:shadow-slate-200/60 dark:hover:shadow-none">
                                <div className="w-12 h-12 mb-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center transition-colors group-hover:bg-red-600 group-hover:text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">{item.icon}</svg>
                                </div>
                                <strong className="block text-lg text-slate-900 dark:text-white mb-1">{item.title}</strong>
                                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Call to Action para o Currículo */}
                <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-100 dark:bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <p className="text-slate-600 dark:text-slate-300 text-base sm:max-w-md">{dict.sobre.ctaDesc}</p>
                    <Link
                        href="/curriculo"
                        className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 min-h-12 rounded-xl active:scale-95 font-bold hover:opacity-90 transition-all sm:shrink-0"
                    >
                        {dict.sobre.ctaButton}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}