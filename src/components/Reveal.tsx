"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    /** atraso em ms (stagger) */
    delay?: number;
    className?: string;
    as?: "div" | "section" | "li" | "article" | "p" | "h1" | "h2" | "header";
    variant?: "rise" | "scale";
};

/** Aparece suavemente (fade + slide + blur) quando entra na viewport. */
export default function Reveal({
    children,
    delay = 0,
    className = "",
    as = "div",
    variant = "rise",
}: RevealProps) {
    const ref = useRef<HTMLElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const Tag = as as React.ElementType;
    return (
        <Tag
            ref={ref}
            className={`reveal ${className}`}
            data-in={shown}
            data-variant={variant}
            style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
        >
            {children}
        </Tag>
    );
}
