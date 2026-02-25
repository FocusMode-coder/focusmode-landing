import type { AbstractIntlMessages } from 'next-intl';

export async function getMessages(locale: string) {
  return (await import(`./${locale}.json`)).default as AbstractIntlMessages;
}
