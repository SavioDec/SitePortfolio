"use client";

import { useEffect, useRef } from "react";
import "./MouseFollower.css";

type FollowerState = 'sitting' | 'getting_up' | 'walking' | 'flying' | 'sitting_down';

export default function MouseFollower() {
    const pointerRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: -100, y: -100 }); 
    const currentPos = useRef({ x: -100, y: -100 });
    
    const lastScaleX = useRef(1); 
    const lastAngle = useRef(0); 
    
    const currentState = useRef<FollowerState>('sitting');
    const stateEndTime = useRef<number>(0); 
    const rafId = useRef<number>(0);

    const CONFIG = {
        STOP_DISTANCE: 50,      
        WAKE_DISTANCE: 65,      
        FLY_DISTANCE: 250,      
        WALK_SPEED: 2.5,        
        FLY_SPEED: 7.0,         
        TRANSITION_MS: 300  
    };

    useEffect(() => {
        const assets = [
            '/BANGUELA_ANDANDO.png',
            '/BANGUELA_LEVANTANDO.png',
            '/BANGUELA_SENTADO.png',
            '/BANGUELA_SENTANDO.png',
            '/BANGUELA_VOANDO.png'
        ];
        assets.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const changeState = (newState: FollowerState) => {
            if (currentState.current === newState || !pointerRef.current) return;
            currentState.current = newState;
            pointerRef.current.dataset.state = newState;
        };

        const updatePosition = (timestamp: number) => {
            if (!pointerRef.current) return;

            const targetX = mousePos.current.x;
            const targetY = mousePos.current.y;
            
            const dx = targetX - currentPos.current.x;
            const dy = targetY - currentPos.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const isTransitioning = timestamp < stateEndTime.current;

            if (!isTransitioning) {
                if (currentState.current === 'sitting') {
                    if (distance > CONFIG.WAKE_DISTANCE) {
                        changeState('getting_up');
                        stateEndTime.current = timestamp + CONFIG.TRANSITION_MS;
                        // CORREÇÃO: Zera o ângulo imediatamente ao levantar
                        lastAngle.current = 0;
                    } else {
                        lastAngle.current = 0;
                        if (Math.abs(dx) > 15) lastScaleX.current = dx < 0 ? 1 : -1;
                    }
                } 
                else if (currentState.current === 'getting_up') {
                    changeState(distance > CONFIG.FLY_DISTANCE ? 'flying' : 'walking');
                } 
                else if (currentState.current === 'walking' || currentState.current === 'flying') {
                    if (distance <= CONFIG.STOP_DISTANCE + 0.5) {
                        changeState('sitting_down');
                        stateEndTime.current = timestamp + CONFIG.TRANSITION_MS;
                        
                        lastAngle.current = 0;
                    } else {
                        const shouldFly = distance > CONFIG.FLY_DISTANCE;
                        changeState(shouldFly ? 'flying' : 'walking');
                        
                        const activeSpeed = shouldFly ? CONFIG.FLY_SPEED : CONFIG.WALK_SPEED;
                        const moveDist = Math.min(activeSpeed, distance - CONFIG.STOP_DISTANCE);
                        
                        currentPos.current.x += (dx / distance) * moveDist;
                        currentPos.current.y += (dy / distance) * moveDist;
                        
                        lastScaleX.current = dx < 0 ? 1 : -1;
                        const pitch = -Math.atan2(dy, Math.abs(dx)) * (180 / Math.PI);
                        lastAngle.current = Math.max(-35, Math.min(35, pitch));
                    }
                } 
                else if (currentState.current === 'sitting_down') {
                    changeState('sitting');
                }
            }

            const style = pointerRef.current.style;
            style.setProperty('--mouseX', `${currentPos.current.x}px`);
            style.setProperty('--mouseY', `${currentPos.current.y}px`);
            style.setProperty('--scaleX', `${lastScaleX.current}`);
            style.setProperty('--rotation', `${lastAngle.current}deg`);
            
            rafId.current = requestAnimationFrame(updatePosition);
        };

        if (pointerRef.current) pointerRef.current.dataset.state = 'sitting';

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