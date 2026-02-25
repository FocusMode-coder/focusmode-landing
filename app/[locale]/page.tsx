import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home' });
  return {
    title: `LucianoAI Systems`,
    description: t('heroSubtitle'),
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }];
}

const serviceKeys = [
  { key: 'web', slug: 'web-development' },
  { key: 'automation', slug: 'automation' },
  { key: 'bots', slug: 'bots-ai-agents' },
  { key: 'lowVoltage', slug: 'low-voltage' },
  { key: 'realEstate', slug: 'real-estate' },
  { key: 'youtube', slug: 'youtube-focusmode' },
];

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'home' });
  const ts = await getTranslations({ locale, namespace: 'services' });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
        <h1 className="relative text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          {t('heroTitle')}
        </h1>
        <p className="relative text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          {t('heroSubtitle')}
        </p>
        <Link
          href={`/${locale}#services`}
          className="relative inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
        >
          {t('heroCta')}
        </Link>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-6 py-20 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          {t('servicesTitle')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map(({ key, slug }) => (
            <ServiceCard
              key={key}
              name={ts(`${key}.name` as any)}
              description={ts(`${key}.description` as any)}
              href={`/${locale}/services/${slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
