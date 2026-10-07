import { getDictionary } from "@/src/utils/lang";
import { boldLead } from "@/src/utils/rich";
import Reveal from "@/src/components/Reveal";

export default async function Curriculo() {
    const dict = await getDictionary();

    return (
        <section className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
            <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-32">

                {/* Header do Currículo (Nome + Download) */}
                <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
                            Sávio Mariguela Decaro
                        </h1>
                        <p className="text-lg text-red-600 dark:text-red-400 font-medium">
                            {dict.curriculo.role}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {dict.curriculo.location}
                        </p>
                    </div>

                    <div className="mt-6 md:mt-0 flex gap-3">
                        {/* Botão de Download */}
                        <a
                            href={`/${dict.curriculo.resumePdfName}`}
                            download={dict.curriculo.resumePdfName}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg cursor-pointer"
                            >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                            {dict.curriculo.downloadBtn}
                    </a>
                    </div>
                </Reveal>

                <div className="grid lg:grid-cols-3 gap-12">

                    {/* COLUNA ESQUERDA (Principal): Experiência Profissional */}
                    <div className="lg:col-span-2 space-y-12">

                        <Reveal as="section">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-red-600 rounded-full"></span>
                                {dict.curriculo.experienceTitle}
                            </h2>

                            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 space-y-10 ml-3 pl-8 pb-4">

                                {/* Job 1: RDG */}
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-red-600 rounded-full border-4 border-slate-50 dark:border-slate-950"></div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{dict.curriculo.job1Title}</h3>
                                        <span className="text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{dict.curriculo.job1Status}</span>
                                    </div>
                                    <p className="text-red-600 dark:text-red-400 font-medium mb-4">{dict.curriculo.job1Company}</p>

                                    <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed list-disc marker:text-red-500 pl-4">
                                        <li>{boldLead(dict.curriculo.job1Topic1)}</li>
                                        <li>{boldLead(dict.curriculo.job1Topic2)}</li>
                                        <li>{boldLead(dict.curriculo.job1Topic3)}</li>
                                        <li>{boldLead(dict.curriculo.job1Topic4)}</li>
                                    </ul>
                                </div>

                                {/* Job 2: Câmara Sertãozinho */}
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-300 dark:bg-slate-700 rounded-full border-4 border-slate-50 dark:border-slate-950"></div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{dict.curriculo.job2Title}</h3>
                                        <span className="text-sm font-mono text-slate-500 dark:text-slate-400">{dict.curriculo.job2Status}</span>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">{dict.curriculo.job2Company}</p>

                                    <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed list-disc marker:text-slate-400 pl-4">
                                        <li>{boldLead(dict.curriculo.job2Topic1)}</li>
                                        <li>{boldLead(dict.curriculo.job2Topic2)}</li>
                                        <li>{boldLead(dict.curriculo.job2Topic3)}</li>
                                    </ul>
                                </div>
                            </div>
                        </Reveal>

                    </div>

                    {/* COLUNA DIREITA (Lateral): Educação, Skills e Cursos */}
                    <div className="space-y-10">

                        {/* Educação */}
                        <Reveal as="section" delay={120} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                                {dict.curriculo.educationTitle}
                            </h2>
                            <div>
                                <h3 className="text-base font-bold text-slate-900 dark:text-white">{dict.curriculo.educationDegree}</h3>
                                <p className="text-red-600 dark:text-red-400 text-sm font-medium mt-1">{dict.curriculo.educationInst}</p>
                                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {dict.curriculo.educationStatus}
                  </span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Hard Skills */}
                        <Reveal as="section" delay={200}>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">{dict.curriculo.stackTitle}</h2>
                            <div className="space-y-6">

                                <div>
                                    <p className="text-xs font-semibold text-slate-500 mb-2">{dict.curriculo.stackMobile}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Kotlin", "Swift", "Android", "iOS"].map((skill) => (
                                            <span key={skill} className="px-3 py-1 bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold rounded-md">
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-slate-500 mb-2">{dict.curriculo.stackBackend}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["C# / .NET", "Node.js", "Java", "Python", "C", "SQL", "PostgreSQL", "MQTT"].map((skill) => (
                                            <span key={skill} className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-md">
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-slate-500 mb-2">{dict.curriculo.stackFrontend}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Next.js", "React", "TypeScript", "Git", "Docker", "GitHub Actions", "Scada-LTS", "Scrum"].map((skill) => (
                                            <span key={skill} className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold rounded-md">
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Cursos Complementares */}
                        <Reveal as="section" delay={120} className="pt-6 border-t border-slate-200 dark:border-slate-800">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{dict.curriculo.coursesTitle}</h2>
                            <ul className="space-y-4">
                                {dict.curriculo.courses.map((curso, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="text-sm text-slate-600 dark:text-slate-400 leading-tight">{curso}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        {/* Idiomas */}
                        <Reveal as="section" delay={120} className="pt-2 border-t border-slate-200 dark:border-slate-800">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{dict.curriculo.languagesTitle}</h2>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-sm text-slate-600 dark:text-slate-400">{dict.curriculo.languagePt}</span>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">{dict.curriculo.languagePtLevel}</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-sm text-slate-600 dark:text-slate-400">{dict.curriculo.languageEn}</span>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">{dict.curriculo.languageEnLevel}</span>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </div>
        </section>
    );
}