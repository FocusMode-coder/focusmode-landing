import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

const serviceSlugToKey: Record<string, string> = {
  'web-development': 'web',
  'automation': 'automation',
  'bots-ai-agents': 'bots',
  'low-voltage': 'lowVoltage',
  'real-estate': 'realEstate',
  'youtube-focusmode': 'youtube',
};

const serviceStripeEnvVar: Record<string, string> = {
  'web-development': process.env.NEXT_PUBLIC_STRIPE_WEB || '#',
  'automation': process.env.NEXT_PUBLIC_STRIPE_AUTOMATION || '#',
  'bots-ai-agents': process.env.NEXT_PUBLIC_STRIPE_BOTS || '#',
  'low-voltage': process.env.NEXT_PUBLIC_STRIPE_LOWVOLTAGE || '#',
  'real-estate': process.env.NEXT_PUBLIC_STRIPE_REALESTATE || '#',
  'youtube-focusmode': process.env.NEXT_PUBLIC_STRIPE_YOUTUBE || '#',
};

export async function generateStaticParams() {
  const locales = ['en', 'es', 'pt'];
  const services = Object.keys(serviceSlugToKey);
  return locales.flatMap((locale) =>
    services.map((service) => ({ locale, service }))
  );
}

export async function generateMetadata({
  params: { locale, service },
}: {
  params: { locale: string; service: string };
}): Promise<Metadata> {
  const key = serviceSlugToKey[service];
  if (!key) return { title: 'LucianoAI Systems' };
  const t = await getTranslations({ locale, namespace: `services.${key}` as any });
  return {
    title: `${t('heroTitle')} — LucianoAI Systems`,
    description: t('heroSubtitle'),
  };
}

export default async function ServicePage({
  params: { locale, service },
}: {
  params: { locale: string; service: string };
}) {
  const key = serviceSlugToKey[service];
  if (!key) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: `services.${key}` as any });
  const tCta = await getTranslations({ locale, namespace: 'cta' });

  const outcomes = [t('outcomes.0'), t('outcomes.1'), t('outcomes.2')];
  const options = [
    { title: t('options.0.title'), desc: t('options.0.desc') },
    { title: t('options.1.title'), desc: t('options.1.desc') },
    { title: t('options.2.title'), desc: t('options.2.desc') },
  ];

  return (
    <ServicePageTemplate
      heroTitle={t('heroTitle')}
      heroSubtitle={t('heroSubtitle')}
      outcomes={outcomes}
      options={options}
      pricing={t('pricing')}
      ctaLabel={tCta('startProject')}
      ctaHref={serviceStripeEnvVar[service]}
    />
  );
}
