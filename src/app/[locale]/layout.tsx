import type { Metadata } from 'next';
import type { AbstractIntlMessages } from 'next-intl';
import { getMessages, isValidLocale } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  if (!isValidLocale(locale)) return {};
  const messages = getMessages(locale);
  return {
    title: `LucianoAI Systems - ${messages.home.heroSubtitle}`,
    description: messages.home.heroSubtitle,
    openGraph: {
      title: 'LucianoAI Systems',
      description: messages.home.heroSubtitle,
      siteName: 'LucianoAI Systems',
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;
  if (!isValidLocale(locale)) {
    notFound();
  }
  const messages = getMessages(locale);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <NextIntlClientProvider messages={messages as unknown as AbstractIntlMessages}>
        <Navbar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
