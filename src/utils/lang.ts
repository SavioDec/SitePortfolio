import { cookies } from 'next/headers';
import { pt } from '@/src/i18n/pt';
import { en } from '@/src/i18n/en';
import type { Dictionary } from '@/src/i18n/pt';

export async function getLang() {
    const cookieStore = await cookies();
    return cookieStore.get('NEXT_LOCALE')?.value === 'en' ? 'en' : 'pt';
}

export async function getDictionary(): Promise<Dictionary> {
    const lang = await getLang();
    return lang === 'en' ? en : pt;
}
