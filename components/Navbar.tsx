'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const serviceLinks = [
  { key: 'web', slug: 'web-development' },
  { key: 'automation', slug: 'automation' },
  { key: 'bots', slug: 'bots-ai-agents' },
  { key: 'lowVoltage', slug: 'low-voltage' },
  { key: 'realEstate', slug: 'real-estate' },
  { key: 'youtube', slug: 'youtube-focusmode' },
  { key: 'nexa', slug: 'nexa-systems' },
];

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 text-xl font-extrabold text-white tracking-tight hover:opacity-80 transition-opacity">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-xs font-black">F</span>
          <span>Luciano<span className="text-indigo-400">AI</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            {t('home')}
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5"
            >
              {t('services')}
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl shadow-black/40 py-1.5 z-50">
                {serviceLinks.map(({ key, slug }) => (
                  <Link
                    key={key}
                    href={`/${locale}/services/${slug}`}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {t(key as any)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-gray-800/60 rounded-full px-1 py-1 border border-gray-700/50">
            {['en', 'es', 'pt'].map((lang) => (
              <Link
                key={lang}
                href={switchLocale(lang)}
                className={`uppercase text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-150 ${
                  locale === lang
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {lang}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 px-4 py-5 flex flex-col gap-2">
          <Link href={`/${locale}`} className="text-gray-300 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors" onClick={() => setMenuOpen(false)}>
            {t('home')}
          </Link>
          <p className="text-xs text-gray-600 uppercase tracking-widest mt-3 mb-1 px-3">{t('services')}</p>
          {serviceLinks.map(({ key, slug }) => (
            <Link
              key={key}
              href={`/${locale}/services/${slug}`}
              className="text-gray-300 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              {t(key as any)}
            </Link>
          ))}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-800">
            <span className="text-xs text-gray-500 mr-1">Lang:</span>
            {['en', 'es', 'pt'].map((lang) => (
              <Link
                key={lang}
                href={switchLocale(lang)}
                className={`uppercase text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
                  locale === lang
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-400 border border-gray-700 hover:border-indigo-500 hover:text-white'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {lang}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
