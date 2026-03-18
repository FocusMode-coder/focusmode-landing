import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const safeLocale = ['en', 'es', 'pt'].includes(locale ?? '') ? locale! : 'en';
  return {
    locale: safeLocale,
    messages: (await import(`./messages/${safeLocale}.json`)).default,
  };
});
