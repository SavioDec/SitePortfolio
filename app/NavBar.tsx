"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// 1. CONFIGURAÇÃO DE ROTAS
const navLinks = [
    { name: "Sobre", href: "/sobre" },
    { name: "Projetos", href: "/projetos" },
    { name: "Currículo", href: "/curriculo" },
    { name: "Contato", href: "/contato" },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkStyle = "transition-transform duration-200 hover:scale-110 active:scale-95 block";


    const showFullNav = !isScrolled || isOpen;

    return (
        <nav
            className={`
            fixed top-4 left-0 right-0 z-50 mx-4 max-w-7xl md:mx-auto 
            flex items-center justify-between px-6 py-3 rounded-full text-slate-900 dark:text-white text-sm 
            transition-all duration-300 ease-in-out
            ${showFullNav
                ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-lg shadow-black/5 dark:shadow-black/20"
                : "bg-transparent border-transparent shadow-none pointer-events-none md:bg-white/80 dark:md:bg-slate-950/80 md:backdrop-blur-xl md:border-slate-200/80 dark:md:border-slate-800 md:shadow-lg md:pointer-events-auto"
            }
        `}
        >

            {/* 1. LOGO */}
            <Link
                href="/"
                className={`
                flex items-center hover:opacity-80 transition-all duration-300 shrink-0
                ${showFullNav
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto"
                }
            `}
            >
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="red-core" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="10%" stopColor="#EF4444"/>
                                <stop offset="90%" stopColor="#9F1239"/>
                            </linearGradient>
                            <filter id="tech-glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="1.2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <text
                            x="50%"
                            y="55%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontFamily="monospace"
                            fontWeight="900"
                            fontSize="26"
                            letterSpacing="-0.5"
                            filter="url(#tech-glow)"
                        >
                            <tspan fill="#9333ea" className="group-hover:fill-purple-400 transition-colors">&lt;/</tspan>
                            <tspan fill="url(#red-core)" dx="6" className="group-hover:brightness-110 transition-all">S M D</tspan>
                            <tspan fill="#9333ea" dx="6" className="group-hover:fill-purple-400 transition-colors">&gt;</tspan>
                        </text>
                    </svg>
                </div>
            </Link>

            {/* 2. DESKTOP MENU */}
            <div className={`
            hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 transition-opacity duration-300
            ${showFullNav
                ? "opacity-100"
                : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
            }
        `}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={`${linkStyle} font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white`}>
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* 3. DESKTOP ACTIONS */}
            <div className={`
            hidden md:flex items-center gap-4 transition-opacity duration-300
            ${showFullNav
                ? "opacity-100"
                : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
            }
        `}>
                <a href="https://github.com/saviodec" target="_blank" rel="noopener noreferrer">
                    <button
                        className="border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 text-slate-700 dark:text-white">
                        GitHub
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/savio-mariguela-decaro-1a06b1279/" target="_blank" rel="noopener noreferrer">
                    <button
                        className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-500 transition-all hover:scale-105 active:scale-95 shadow-[0px_0px_15px_rgba(220,38,38,0.4)] hover:shadow-[0px_0px_20px_rgba(220,38,38,0.6)]">
                        LinkedIn
                    </button>
                </a>
            </div>

            {/* 4. MOBILE TOGGLE BUTTON */}
            <button
                onClick={toggleMenu}
                className={`
                md:hidden p-2 ml-auto transition-all duration-300 active:scale-90 pointer-events-auto rounded-full
                ${!showFullNav
                    ? "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-lg"
                    : "text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
                    
                }
            `}
                aria-label="Menu"
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    )}
                </svg>
            </button>

            {/* 5. MOBILE MENU */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 p-1 pointer-events-auto">
                    <div
                        className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center gap-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 origin-top">


                        {/* Links de Navegação */}
                        <div className="flex flex-col gap-6 w-full text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={`${link.href}-mobile`}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 active:scale-95"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <hr className="w-full border-slate-200 dark:border-slate-800"/>

                        {/* Ações Mobile */}
                        <div className="flex flex-col w-full gap-3">
                            <a href="https://github.com/saviodec" target="_blank" rel="noopener noreferrer" className="w-full">
                                <button className="w-full border border-slate-300 dark:border-slate-600 py-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition active:scale-[0.98] font-medium text-slate-700 dark:text-white">
                                    GitHub
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/savio-mariguela-decaro-1a06b1279/" target="_blank" rel="noopener noreferrer" className="w-full">
                                <button className="w-full bg-red-600 text-white py-3.5 rounded-xl font-bold hover:bg-red-500 transition active:scale-[0.98] shadow-lg shadow-red-900/20">
                                    LinkedIn
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}