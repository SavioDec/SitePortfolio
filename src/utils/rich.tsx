import React from "react";

/** Renderiza **trechos** em negrito sem usar dangerouslySetInnerHTML. */
export function rich(text: string): React.ReactNode[] {
    return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
    );
}

/** Negrito no trecho antes do primeiro ":" (ex.: "Full Stack & Cloud:"). */
export function boldLead(text: string): React.ReactNode {
    const idx = text.indexOf(":");
    if (idx === -1) return text;
    return (
        <>
            <strong>{text.slice(0, idx + 1)}</strong>
            {text.slice(idx + 1)}
        </>
    );
}
