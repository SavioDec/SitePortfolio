"use client";

import { useEffect, useRef } from "react";
import "./MouseFollower.css";

export default function MouseFollower() {
    const pointerRef = useRef<HTMLDivElement>(null);
    const prevX = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!pointerRef.current) return;

            const currentX = e.clientX;
            const currentY = e.clientY;

            // Lógica de espelhamento (Banguela olhando para a direção do movimento)
            const isMovingLeft = currentX < prevX.current;
            const scaleX = isMovingLeft ? -1 : 1;
            
            prevX.current = currentX;

            // Acesso DIRETO e seguro à referência do DOM. Não crie variáveis intermediárias aqui.
            pointerRef.current.style.setProperty('--mouseX', `${currentX}px`);
            pointerRef.current.style.setProperty('--mouseY', `${currentY}px`);
            pointerRef.current.style.setProperty('--scaleX', `${scaleX}`);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={pointerRef} className="pointer" aria-hidden={true}></div>
    );
}