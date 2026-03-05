"use client";

import { useState } from "react";
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
    const toggleMenu = () => setIsOpen(!isOpen);

    const linkStyle = "transition-transform duration-200 hover:scale-110 active:scale-95 block";

    return (
        /* ALTERAÇÕES TÉCNICAS:
           - relative -> fixed: Fixa o elemento na tela.
           - top-4: Mantém o espaçamento do topo (efeito flutuante).
           - left-0 right-0 + mx-4: Garante que a largura seja 100% menos as margens (mantém o tamanho original).
           - z-50: Garante que fique acima de outros elementos.
           - bg-slate-950/90: Leve transparência para ativar o backdrop-blur visualmente.
        */
        <nav className="fixed top-4 left-0 right-0 z-50 mx-4 flex items-center justify-between border border-slate-700 px-6 py-4 rounded-full text-white text-sm bg-slate-950/90 backdrop-blur-md">

            {/* Logo */}
            <Link href="/" className="flex items-center hover:scale-105 transition-transform shrink-0 group">
                <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {/* Gradiente do Texto Central: Mantido o Vermelho Predominante */}
                        <linearGradient id="red-core" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="10%" stopColor="#EF4444" /> {/* Red-500 */}
                            <stop offset="90%" stopColor="#9F1239" /> {/* Rose-800 */}
                        </linearGradient>

                        {/* Glow Híbrido: Mistura o brilho roxo das pontas com o vermelho do centro */}
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
                        {/* Tags de Abertura: Roxo Ametista Vibrante */}
                        <tspan fill="#9333ea" className="group-hover:fill-purple-400 transition-colors">&lt;/</tspan>

                        {/* S M D: Vermelho Vinho */}
                        <tspan fill="url(#red-core)" dx="6" className="group-hover:brightness-110 transition-all">S M D</tspan>

                        {/* Tags de Fechamento: Roxo Ametista Vibrante */}
                        <tspan fill="#9333ea" dx="6" className="group-hover:fill-purple-400 transition-colors">&gt;</tspan>
                    </text>
                </svg>
            </Link>

            {/* 2. DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={linkStyle}>
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
                <a href="https://github.com/saviodec" target="_blank" rel="noopener noreferrer">
                    <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition hover:scale-105 active:scale-95">
                        GitHub
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/savio-mariguela-decaro-1a06b1279/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-red-600 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-red-500 transition duration-300 hover:scale-105 active:scale-95 shadow-[0px_0px_20px_2px_rgba(255,255,255,0.3)]">
                        LinkedIn
                    </button>
                </a>
            </div>

            {/* Mobile Toggle Button */}
            <button onClick={toggleMenu} className="md:hidden text-gray-400 hover:text-white p-2 ml-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* 3. MOBILE MENU */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center gap-6 md:hidden shadow-2xl animate-in fade-in zoom-in duration-200">
                    {navLinks.map((link) => (
                        <Link
                            key={`${link.href}-mobile`}
                            href={link.href}
                            onClick={toggleMenu}
                            className="text-lg hover:text-red-400 transition hover:scale-110"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <hr className="w-full border-slate-800" />
                    <a href="https://github.com/saviodec" target="_blank" rel="noopener noreferrer" className="w-full">
                        <button className="w-full border border-slate-600 py-3 rounded-full hover:bg-slate-800 transition">GitHub</button>
                    </a>
                    <a href="https://www.linkedin.com/in/savio-mariguela-decaro-1a06b1279/" target="_blank" rel="noopener noreferrer" className="w-full">
                        <button className="w-full bg-white text-black py-3 rounded-full font-bold">LinkedIn</button>
                    </a>
                </div>
            )}
        </nav>
    );
}