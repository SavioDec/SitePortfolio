import { cookies } from 'next/headers';
import { pt } from '@/src/i18n/pt';
import { en } from '@/src/i18n/en';

export async function getLang() {
    const cookieStore = await cookies();
    return cookieStore.get('NEXT_LOCALE')?.value === 'en' ? 'en' : 'pt';
}

export async function getDictionary() {
    const lang = await getLang();
    return lang === 'en' ? en : pt;
}
