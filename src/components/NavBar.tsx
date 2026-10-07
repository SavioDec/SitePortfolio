"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Dictionary } from "@/src/i18n/pt";

const GITHUB_URL = "https://github.com/SavioDec";
const LINKEDIN_URL = "https://www.linkedin.com/in/savio-mariguela-decaro-1a06b1279/";

function Logo() {
    return (
        <svg width="112" height="32" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
                <linearGradient id="red-core" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="10%" stopColor="#EF4444" />
                    <stop offset="90%" stopColor="#9F1239" />
                </linearGradient>
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
            >
                <tspan fill="#9333ea">&lt;/</tspan>
                <tspan fill="url(#red-core)" dx="6">S M D</tspan>
                <tspan fill="#9333ea" dx="6">&gt;</tspan>
            </text>
        </svg>
    );
}

export default function NavBar({ lang, dict }: { lang: "pt" | "en"; dict: Dictionary }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const navLinks = [
        { name: dict.nav.sobre, href: "/sobre" },
        { name: dict.nav.projetos, href: "/projetos" },
        { name: dict.nav.curriculo, href: "/curriculo" },
        { name: dict.nav.contato, href: "/contato" },
    ];

    const closeMenu = () => setIsOpen(false);

    const toggleLang = () => {
        const newLang = lang === "pt" ? "en" : "pt";
        document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; samesite=lax`;
        router.refresh();
    };

    // Só ganha mais opacidade/borda ao rolar (a barra nunca some)
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Trava o scroll do body e fecha com ESC enquanto o menu está aberto
    useEffect(() => {
        if (!isOpen) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener("keydown", onKey);
        };
    }, [isOpen]);

    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]" data-menu-open={isOpen}>
            <nav
                aria-label="Principal"
                className={`relative z-10 transition-[background-color,border-color,backdrop-filter] duration-500 border-b backdrop-blur-xl backdrop-saturate-150 ${
                    isScrolled || isOpen
                        ? "bg-white/80 dark:bg-black/70 border-slate-200/70 dark:border-white/10"
                        : "bg-white/40 dark:bg-black/30 border-transparent"
                }`}
            >
                <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={closeMenu}
                        aria-label={dict.nav.home}
                        className="flex items-center transition-opacity hover:opacity-70 active:scale-95 min-h-11"
                    >
                        <Logo />
                    </Link>

                    {/* Links (desktop) */}
                    <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        aria-current={active ? "page" : undefined}
                                        className={`group relative block px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                                            active
                                                ? "text-slate-900 dark:text-white"
                                                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                        <span
                                            className={`pointer-events-none absolute inset-x-3.5 -bottom-px h-px origin-center bg-red-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                                active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Ações */}
                    <div className="flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-2">
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                {dict.nav.github}
                            </a>
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-red-600 px-3.5 py-1.5 text-[13px] font-medium text-white transition-all hover:bg-red-500 active:scale-95"
                            >
                                {dict.nav.linkedin}
                            </a>
                        </div>

                        <button
                            onClick={toggleLang}
                            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
                            className="flex h-9 min-w-9 items-center justify-center rounded-full border border-slate-300/80 dark:border-white/20 px-2 text-xs font-bold text-slate-700 dark:text-white transition-all hover:bg-slate-100 dark:hover:bg-white/10 active:scale-90"
                        >
                            {lang === "pt" ? "EN" : "PT"}
                        </button>

                        {/* Hambúrguer animado (mobile) */}
                        <button
                            onClick={() => setIsOpen((v) => !v)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? dict.nav.close : dict.nav.menu}
                            className="md:hidden relative flex h-11 w-11 items-center justify-center -mr-2 active:scale-90 transition-transform"
                        >
                            <span
                                className={`absolute h-[1.5px] w-5 rounded bg-slate-900 dark:bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                    isOpen ? "rotate-45" : "-translate-y-[4px]"
                                }`}
                            />
                            <span
                                className={`absolute h-[1.5px] w-5 rounded bg-slate-900 dark:bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                    isOpen ? "-rotate-45" : "translate-y-[4px]"
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menu mobile em tela cheia */}
            <div
                id="mobile-menu"
                inert={!isOpen}
                aria-hidden={!isOpen}
                className={`md:hidden fixed inset-0 z-0 flex flex-col bg-white/90 dark:bg-black/90 backdrop-blur-2xl px-6 pt-[calc(3.5rem+env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] transition-[opacity,visibility] duration-500 ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
            >
                <ul className="flex-1 flex flex-col justify-center gap-1">
                    {[{ name: dict.nav.home, href: "/" }, ...navLinks].map((link, i) => (
                        <li key={link.href} className="menu-link" style={{ "--i": i } as React.CSSProperties}>
                            <Link
                                href={link.href}
                                onClick={closeMenu}
                                aria-current={pathname === link.href ? "page" : undefined}
                                className={`block py-3 text-4xl sm:text-5xl font-bold tracking-tight transition-colors active:opacity-60 ${
                                    isActive(link.href) && link.href !== "/" || pathname === link.href
                                        ? "text-red-600 dark:text-red-500"
                                        : "text-slate-900 dark:text-white"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="menu-link flex gap-3" style={{ "--i": 6 } as React.CSSProperties}>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-h-12 flex items-center justify-center rounded-2xl border border-slate-300 dark:border-white/20 font-semibold text-slate-800 dark:text-white active:scale-[0.97] transition-transform"
                    >
                        {dict.nav.github}
                    </a>
                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-h-12 flex items-center justify-center rounded-2xl bg-red-600 font-semibold text-white active:scale-[0.97] transition-transform"
                    >
                        {dict.nav.linkedin}
                    </a>
                </div>
            </div>
        </header>
    );
}
