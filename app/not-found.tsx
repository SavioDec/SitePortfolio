import Link from "next/link";
import { getDictionary } from "@/src/utils/lang";

export default async function NotFound() {
    const dict = await getDictionary();

    return (
        <main className="flex min-h-[100svh] flex-col items-center justify-center bg-slate-50 px-6 text-center text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <div
                className="h-40 w-40 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/BANGUELA_SENTADO.webp')" }}
                role="img"
                aria-label="Toothless"
            />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-red-600 dark:text-red-500">
                {dict.easter.notFoundCode}
            </p>
            <h1 className="mt-2 text-[clamp(2rem,7vw,3.5rem)] font-black tracking-tight">
                {dict.easter.notFoundTitle}
            </h1>
            <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">
                {dict.easter.notFoundText}
            </p>
            <Link
                href="/"
                className="mt-8 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
                {dict.easter.notFoundCta}
            </Link>
        </main>
    );
}
