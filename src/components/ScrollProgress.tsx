"use client";

import { useEffect, useRef } from "react";

/** Barra fina de progresso de leitura no topo da página. */
export default function ScrollProgress() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const update = () => {
            const doc = document.documentElement;
            const max = doc.scrollHeight - doc.clientHeight;
            const p = max > 0 ? doc.scrollTop / max : 0;
            el.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none" aria-hidden="true">
            <div
                ref={ref}
                className="h-full origin-left bg-gradient-to-r from-red-500 via-orange-500 to-purple-500"
                style={{ transform: "scaleX(0)" }}
            />
        </div>
    );
}
