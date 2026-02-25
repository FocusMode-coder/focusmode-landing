import { getMessages, isValidLocale } from '@/lib/i18n';
import { servicesList } from '@/lib/services';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { notFound } from 'next/navigation';

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  if (!isValidLocale(locale)) {
    notFound();
  }
  const messages = getMessages(locale);

  return (
    <>
      <Hero
        title={messages.home.hero_title}
        subtitle={messages.home.hero_subtitle}
        description={messages.home.hero_description}
        badge="LucianoAI Systems"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-200 active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </Hero>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {messages.home.services_title}
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              {messages.home.services_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => {
              const serviceMsg = messages.services[service.key as keyof typeof messages.services];
              return (
                <ServiceCard
                  key={service.slug}
                  icon={serviceMsg.icon}
                  name={serviceMsg.name}
                  description={serviceMsg.description}
                  href={`/${locale}/service/${service.slug}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Not sure which service is right for you? Let&apos;s talk. We&apos;ll help you find the best solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@lucianoai.systems"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-200 active:scale-95"
            >
              📧 Send Email
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white transition-all duration-200 active:scale-95"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
