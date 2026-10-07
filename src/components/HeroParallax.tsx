"use client";

import React, { useEffect, useRef } from "react";

/** Parallax suave: o conteúdo sobe mais devagar e reduz de escala ao rolar. */
export default function HeroParallax({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let raf = 0;
        const update = () => {
            raf = 0;
            const y = Math.min(window.scrollY, window.innerHeight);
            const t = y / window.innerHeight; // 0 -> 1
            el.style.transform = `translate3d(0, ${y * 0.14}px, 0) scale(${1 - t * 0.08})`;
            el.style.opacity = `${1 - t * 0.5}`;
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div ref={ref} className={className} style={{ willChange: "transform, opacity" }}>
            {children}
        </div>
    );
}
