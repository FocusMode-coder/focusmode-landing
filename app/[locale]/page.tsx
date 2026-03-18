import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ServiceCard from '@/components/ServiceCard';
import type { Metadata } from 'next';

const HeroScene3D = dynamic(() => import('@/components/HeroScene3D'), {
  ssr: false,
  loading: () => null,
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home' });
  return {
    title: `FocusMode`,
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
  { key: 'nexa', slug: 'nexa-systems' },
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
      {/* HERO with 3D */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 min-h-[90vh] overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <HeroScene3D />
        </div>

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-gray-950/40 via-transparent to-gray-950/80 pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            LucianoAI Systems
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight animate-slide-up">
            {t('heroTitle')}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up-delay">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
            <Link
              href={`/${locale}#services`}
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 text-lg"
            >
              {t('heroCta')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:contact@lucianoai.systems"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 text-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center animate-bounce-slow">
            <a href={`/${locale}#services`} className="text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
            {t('servicesTitle')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium digital systems built for results — from web platforms to AI automation.
          </p>
        </div>

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

      {/* TRUST SECTION */}
      <section className="py-20 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-10 font-medium">Built with modern technology</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['Next.js', 'React', 'TypeScript', 'AI / LLMs', 'n8n', 'Stripe'].map((tech) => (
              <span key={tech} className="text-gray-400 font-semibold text-lg hover:text-indigo-400 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-gray-900 to-gray-950 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to scale your business?
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Let&apos;s build something powerful together. Get a free consultation and discover how AI can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@lucianoai.systems"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 text-lg"
            >
              📧 Email Us
            </a>
            {/* TODO: Replace with actual business WhatsApp number */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 font-semibold px-8 py-4 rounded-full border border-green-500/30 transition-all duration-200 hover:scale-105 active:scale-95 text-lg"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

