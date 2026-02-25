'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

interface NavbarProps {
  locale: Locale;
  messages: {
    nav: {
      home: string;
      services: string;
      contact: string;
    };
  };
}

export default function Navbar({ locale, messages }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            <span className="text-blue-600">⬡</span>
            <span>LucianoAI</span>
            <span className="text-blue-600">Systems</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href={`/${locale}`}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {messages.nav.home}
            </Link>
            <Link
              href={`/${locale}#services`}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {messages.nav.services}
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {messages.nav.contact}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-500 transition-colors text-sm font-medium"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
                <svg className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                        lang.code === locale ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4 space-y-2">
            <Link href={`/${locale}`} className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium" onClick={() => setMobileOpen(false)}>
              {messages.nav.home}
            </Link>
            <Link href={`/${locale}#services`} className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium" onClick={() => setMobileOpen(false)}>
              {messages.nav.services}
            </Link>
            <Link href={`/${locale}#contact`} className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium" onClick={() => setMobileOpen(false)}>
              {messages.nav.contact}
            </Link>
            <div className="px-4 pt-2 flex gap-2">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm border transition-colors ${
                    lang.code === locale
                      ? 'border-blue-500 text-blue-600 bg-blue-50'
                      : 'border-slate-200 text-slate-600 hover:border-blue-500'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.code.toUpperCase()}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
