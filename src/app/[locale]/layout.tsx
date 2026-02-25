import type { Metadata } from 'next';
import { getMessages, isValidLocale } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  if (!isValidLocale(locale)) return {};
  const messages = getMessages(locale);
  return {
    title: `LucianoAI Systems - ${messages.home.hero_subtitle}`,
    description: messages.home.hero_description,
    openGraph: {
      title: 'LucianoAI Systems',
      description: messages.home.hero_description,
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
      <Navbar locale={locale} messages={messages} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} messages={messages} />
    </div>
  );
}
