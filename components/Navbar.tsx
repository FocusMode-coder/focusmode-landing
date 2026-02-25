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
    <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={`/${locale}`} className="text-xl font-bold text-white tracking-tight">
          LucianoAI <span className="text-indigo-400">Systems</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition-colors text-sm">
            {t('home')}
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              {t('services')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 z-50">
                {serviceLinks.map(({ key, slug }) => (
                  <Link
                    key={key}
                    href={`/${locale}/services/${slug}`}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {t(key as any)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm border border-gray-700 rounded-full px-3 py-1">
            {['en', 'es', 'pt'].map((lang) => (
              <Link
                key={lang}
                href={switchLocale(lang)}
                className={`uppercase font-medium transition-colors ${
                  locale === lang ? 'text-indigo-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {lang}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
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
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 flex flex-col gap-3">
          <Link href={`/${locale}`} className="text-gray-300 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
            {t('home')}
          </Link>
          <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">{t('services')}</p>
          {serviceLinks.map(({ key, slug }) => (
            <Link
              key={key}
              href={`/${locale}/services/${slug}`}
              className="text-gray-300 hover:text-white text-sm pl-2"
              onClick={() => setMenuOpen(false)}
            >
              {t(key as any)}
            </Link>
          ))}
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-800">
            {['en', 'es', 'pt'].map((lang) => (
              <Link
                key={lang}
                href={switchLocale(lang)}
                className={`uppercase text-sm font-medium ${
                  locale === lang ? 'text-indigo-400' : 'text-gray-400 hover:text-white'
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
