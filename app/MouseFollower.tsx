"use client";

import { useEffect, useRef } from "react";
import "./MouseFollower.css";

export default function MouseFollower() {
    const pointerRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: -100, y: -100 }); 
    const currentPos = useRef({ x: -100, y: -100 });
    
    const lastScaleX = useRef(1); 
    const lastAngle = useRef(0); 
    
    const rafId = useRef<number>(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const updatePosition = () => {
            if (!pointerRef.current) return;

            const targetX = mousePos.current.x;
            const targetY = mousePos.current.y;
            
            const dx = targetX - currentPos.current.x;
            const dy = targetY - currentPos.current.y;
            
            const distance = Math.sqrt(dx * dx + dy * dy);
            const SPEED = 3; 
            
            const STOP_DISTANCE = 50; 

            if (distance > STOP_DISTANCE) {
                const moveDist = Math.min(SPEED, distance - STOP_DISTANCE);
                currentPos.current.x += (dx / distance) * moveDist;
                currentPos.current.y += (dy / distance) * moveDist;
            }

            
            if (distance > 0.1) {
                lastScaleX.current = dx < 0 ? 1 : -1;

                const pitch = -Math.atan2(dy, Math.abs(dx)) * (180 / Math.PI);
                lastAngle.current = Math.max(-35, Math.min(35, pitch));
            }

            
            const style = pointerRef.current.style;
            style.setProperty('--mouseX', `${currentPos.current.x}px`);
            style.setProperty('--mouseY', `${currentPos.current.y}px`);
            style.setProperty('--scaleX', `${lastScaleX.current}`);
            style.setProperty('--rotation', `${lastAngle.current}deg`);
            
            rafId.current = requestAnimationFrame(updatePosition);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        rafId.current = requestAnimationFrame(updatePosition);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div ref={pointerRef} className="pointer" aria-hidden={true}></div>
    );
}