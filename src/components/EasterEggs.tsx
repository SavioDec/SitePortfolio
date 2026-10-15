"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./EasterEggs.module.css";

export type EasterText = {
    tabAway: string;
    nightOn: string;
    consoleTitle: string;
    consoleBody: string;
};

const KONAMI = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a",
];
const WORD = "banguela";

type Star = { id: number; top: number; left: number; size: number; delay: number };

// Estrelas geradas só depois do gatilho, no cliente, para não gerar divergência de hidratação.
function makeStars(): Star[] {
    return Array.from({ length: 70 }, (_, id) => ({
        id,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 2.4,
    }));
}

export default function EasterEggs({ text }: { text: EasterText }) {
    const [night, setNight] = useState<Star[] | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    // 1) Mensagem no console
    useEffect(() => {
        console.log(`%c${text.consoleTitle}`, "color:#ef4444;font-size:16px;font-weight:800;");
        console.log(`%c${text.consoleBody}`, "color:#94a3b8;font-size:12px;");
    }, [text.consoleTitle, text.consoleBody]);

    // 2) Título da aba quando o usuário sai
    useEffect(() => {
        const original = document.title;
        const onVisibility = () => {
            document.title = document.hidden ? text.tabAway : original;
        };
        document.addEventListener("visibilitychange", onVisibility);
        return () => {
            document.removeEventListener("visibilitychange", onVisibility);
            document.title = original;
        };
    }, [text.tabAway]);

    // 3) Konami code ou digitar "banguela" ativa o modo Fúria da Noite
    useEffect(() => {
        let konamiIdx = 0;
        let typed = "";

        const trigger = () => {
            setNight(makeStars());
            clearTimeout(timer.current);
            timer.current = setTimeout(() => setNight(null), 8000);
        };

        const onKey = (e: KeyboardEvent) => {
            const el = e.target as HTMLElement | null;
            if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;

            const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

            konamiIdx = key === KONAMI[konamiIdx] ? konamiIdx + 1 : key === KONAMI[0] ? 1 : 0;
            if (konamiIdx === KONAMI.length) {
                konamiIdx = 0;
                trigger();
                return;
            }

            if (key.length === 1) {
                typed = (typed + key).slice(-WORD.length);
                if (typed === WORD) {
                    typed = "";
                    trigger();
                }
            }
        };

        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            clearTimeout(timer.current);
        };
    }, []);

    if (!night) return null;

    return (
        <>
            <div className={styles.overlay} aria-hidden="true">
                {night.map((s) => (
                    <span
                        key={s.id}
                        className={styles.star}
                        style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
                    />
                ))}
                <span className={styles.flyer} style={{ top: "18%", animationDelay: "0.4s" }} />
                <span className={styles.flyer} style={{ top: "52%", animationDelay: "2.1s", animationDuration: "4.2s" }} />
                <span className={styles.flyer} style={{ top: "34%", animationDelay: "3.8s", animationDuration: "3.2s" }} />
            </div>
            <div className={styles.toast} role="status">{text.nightOn}</div>
        </>
    );
}
