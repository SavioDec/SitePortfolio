import { projects } from "@/src/data/data";
import { getDictionary } from "@/src/utils/lang";
import Reveal from "@/src/components/Reveal";
import ProjectsGrid from "@/src/components/ProjectsGrid";

export default async function Projetos() {
    const dict = await getDictionary();
    const p = dict.projetos;

    return (
        <section className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-32">

                <Reveal className="mb-12 lg:mb-16">
                    <h1 className="text-[clamp(2.25rem,8vw,4.5rem)] font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white mb-6">
                        {p.title1} <br className="hidden lg:block" />
                        <span className="text-red-600 dark:text-red-500">{p.title2}</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                        {p.subtitle}
                    </p>
                </Reveal>

                <ProjectsGrid
                    projects={projects}
                    labels={{
                        filterAll: p.filterAll,
                        filterMobile: p.filterMobile,
                        filterWeb: p.filterWeb,
                        filterBackend: p.filterBackend,
                        filterLabel: p.filterLabel,
                        demo: p.demo,
                        github: p.github,
                        items: p.items,
                    }}
                />

            </div>
        </section>
    );
}
