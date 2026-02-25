import en from '../../messages/en.json';
import es from '../../messages/es.json';
import pt from '../../messages/pt.json';

export type Locale = 'en' | 'es' | 'pt';

const messages = { en, es, pt };

export function getMessages(locale: Locale) {
  return messages[locale] || messages.en;
}

export const locales: Locale[] = ['en', 'es', 'pt'];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
