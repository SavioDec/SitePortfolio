"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PhoneMockup from "./PhoneMockup";

type ShowcaseCopy = {
    eyebrow: string;
    title: string;
    kotlinLabel: string;
    kotlinTitle: string;
    kotlinDesc: string;
    swiftLabel: string;
    swiftTitle: string;
    swiftDesc: string;
    cta: string;
};

function SkeletonList({ accent }: { accent: string }) {
    return (
        <div className="px-[9%] space-y-[4%]">
            {[0, 1, 2, 3].map((n) => (
                <div
                    key={n}
                    className="flex items-center gap-[5%] rounded-2xl bg-white/[0.06] p-[5%] backdrop-blur"
                >
                    <div className="h-8 w-8 shrink-0 rounded-xl" style={{ background: accent, opacity: 1 - n * 0.18 }} />
                    <div className="flex-1 space-y-1.5">
                        <div className="h-2 w-3/4 rounded-full bg-white/30" />
                        <div className="h-2 w-1/2 rounded-full bg-white/15" />
                    </div>
                </div>
            ))}
        </div>
    );
}

/** Seção "sticky": o celular fica fixo e o conteúdo alterna conforme o scroll. */
export default function Showcase({ copy }: { copy: ShowcaseCopy }) {
    const ref = useRef<HTMLElement>(null);
    const [active, setActive] = useState<0 | 1>(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let raf = 0;
        const update = () => {
            raf = 0;
            const r = el.getBoundingClientRect();
            const total = r.height - window.innerHeight;
            const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
            el.style.setProperty("--p", p.toFixed(3));
            const next = p < 0.5 ? 0 : 1;
            setActive((prev) => (prev === next ? prev : next));
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    const slides = [
        { label: copy.kotlinLabel, title: copy.kotlinTitle, desc: copy.kotlinDesc, color: "from-purple-500 to-orange-400" },
        { label: copy.swiftLabel, title: copy.swiftTitle, desc: copy.swiftDesc, color: "from-orange-400 to-red-500" },
    ];

    return (
        <section ref={ref} className="showcase bg-slate-950 text-white" data-active={active}>
            <div className="showcase-stage">
                <div className="mx-auto w-full max-w-6xl px-6 grid items-center gap-4 lg:gap-16 lg:grid-cols-2">
                    {/* Texto */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">{copy.eyebrow}</p>
                        <h2 className="mt-2 text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                            {copy.title}
                        </h2>

                        <div className="mt-4 grid">
                            {slides.map((s, i) => (
                                <div key={s.title} className="showcase-slide" data-index={i}>
                                    <p className="text-sm font-semibold text-slate-400">{s.label}</p>
                                    <p className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                                        {s.title}
                                    </p>
                                    <p className="mt-2 max-w-md mx-auto lg:mx-0 text-sm sm:text-lg text-slate-300 leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center justify-center lg:justify-start gap-5">
                            <Link
                                href="/projetos"
                                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 min-h-11 text-sm font-semibold transition-transform active:scale-95 hover:scale-105"
                            >
                                {copy.cta} <span aria-hidden="true">&rarr;</span>
                            </Link>
                            <div className="flex gap-2" aria-hidden="true">
                                {[0, 1].map((d) => (
                                    <span
                                        key={d}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${active === d ? "w-8 bg-red-500" : "w-1.5 bg-white/30"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Celular */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="showcase-phone">
                            <PhoneMockup platform={active === 0 ? "android" : "ios"} className="[--phone-w:min(10rem,18svh)] sm:[--phone-w:min(13rem,30svh)] lg:[--phone-w:min(17rem,38svh)]">
                                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
                                {slides.map((s, i) => (
                                    <div key={s.title} className="showcase-slide absolute inset-0 pt-[18%]" data-index={i}>
                                        <p className={`px-[9%] mb-[6%] text-3xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                                            {i === 0 ? "Kt" : "Sw"}
                                        </p>
                                        <SkeletonList accent={i === 0 ? "#a855f7" : "#fb923c"} />
                                    </div>
                                ))}
                            </PhoneMockup>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
