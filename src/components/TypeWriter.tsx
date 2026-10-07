"use client";

import { useEffect, useState } from "react";

/** Alterna entre palavras digitando e apagando. Estático com reduced-motion. */
export default function TypeWriter({ words }: { words: string[] }) {
    const [text, setText] = useState(words[0] ?? "");

    useEffect(() => {
        if (words.length < 2) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let w = 0;
        let i = words[0].length;
        let deleting = true;
        let timer = 0;

        const tick = () => {
            if (deleting) {
                i--;
                setText(words[w].slice(0, i));
                if (i === 0) {
                    deleting = false;
                    w = (w + 1) % words.length;
                    timer = window.setTimeout(tick, 300);
                    return;
                }
                timer = window.setTimeout(tick, 60);
            } else {
                i++;
                setText(words[w].slice(0, i));
                if (i === words[w].length) {
                    deleting = true;
                    timer = window.setTimeout(tick, 2200);
                    return;
                }
                timer = window.setTimeout(tick, 110);
            }
        };

        timer = window.setTimeout(tick, 2200);
        return () => window.clearTimeout(timer);
    }, [words]);

    return (
        <span className="text-gradient" aria-label={words.join(" / ")}>
            <span aria-hidden="true">{text}</span>
            <span className="caret text-red-500" aria-hidden="true" />
        </span>
    );
}
