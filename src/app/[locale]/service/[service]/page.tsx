import { getMessages, isValidLocale } from '@/lib/i18n';
import { serviceData, servicesList } from '@/lib/services';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import CTAButton from '@/components/CTAButton';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: {
    locale: string;
    service: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, service } = params;
  if (!isValidLocale(locale)) return {};
  const messages = getMessages(locale);
  const svcData = serviceData[service];
  if (!svcData) return {};

  const svcEntry = servicesList.find((s) => s.slug === service);
  const svcName = svcEntry ? messages.services[svcEntry.key as keyof typeof messages.services].name : service;

  return {
    title: `${svcName} - LucianoAI Systems`,
    description: `Professional ${svcName} services. ${messages.service_page.outcomes_title}.`,
  };
}

export function generateStaticParams() {
  const params: { locale: string; service: string }[] = [];
  ['en', 'es', 'pt'].forEach((locale) => {
    Object.keys(serviceData).forEach((service) => {
      params.push({ locale, service });
    });
  });
  return params;
}

export default function ServicePage({ params }: PageProps) {
  const { locale, service } = params;

  if (!isValidLocale(locale)) notFound();

  const svcData = serviceData[service];
  if (!svcData) notFound();

  const messages = getMessages(locale);
  const svcEntry = servicesList.find((s) => s.slug === service);
  const svcMsg = svcEntry ? messages.services[svcEntry.key as keyof typeof messages.services] : null;

  const serviceName = svcMsg?.name || service;
  const serviceDescription = svcMsg?.description || '';
  const serviceIcon = svcMsg?.icon || svcData.icon;

  return (
    <>
      {/* Hero */}
      <Hero
        title={serviceName}
        subtitle={serviceDescription}
        badge={`LucianoAI Systems`}
      />

      {/* Outcomes */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {messages.service_page.outcomes_title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {svcData.outcomes.map((outcome, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {messages.service_page.options_title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {svcData.options.map((option) => (
              <div
                key={option.title}
                className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  option.featured
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400'
                }`}
              >
                {option.featured && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {option.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {option.description}
                </p>
                <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
                  {option.price}
                </div>
                <CTAButton
                  href={option.stripeLink}
                  label={messages.service_page.cta_button}
                  variant={option.featured ? 'primary' : 'outline'}
                  className="w-full justify-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        title={messages.service_page.pricing_title}
        privateNote={messages.service_page.pricing_private}
        ctaLabel={messages.service_page.cta_button}
        options={svcData.options}
      />

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-4xl mb-4">{serviceIcon}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceName}</h2>
          <p className="text-lg text-slate-300 mb-8">{messages.service_page.cta_subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href={svcData.options[0]?.stripeLink || '#'}
              label={messages.service_page.cta_button}
              variant="primary"
              size="lg"
            />
            <CTAButton
              href={`/${locale}#contact`}
              label={messages.service_page.contact_cta}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            />
          </div>
        </div>
      </section>

      {/* Back to services */}
      <div className="py-8 bg-white dark:bg-slate-950 text-center">
        <Link
          href={`/${locale}#services`}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
      </div>
    </>
  );
}
