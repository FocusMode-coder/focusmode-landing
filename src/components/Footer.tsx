import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
  messages: {
    footer: {
      tagline: string;
      rights: string;
      privacy: string;
    };
  };
}

export default function Footer({ locale, messages }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { slug: 'web-development', label: 'Web Development' },
    { slug: 'automation', label: 'Automation' },
    { slug: 'bots-ai-agents', label: 'Bots & AI Agents' },
    { slug: 'low-voltage', label: 'Low Voltage' },
    { slug: 'real-estate', label: 'Real Estate' },
    { slug: 'youtube-focusmode', label: 'YouTube' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <span className="text-blue-400">⬡</span>
              <span>LucianoAI Systems</span>
            </div>
            <p className="text-slate-400 text-sm">{messages.footer.tagline}</p>
            <p className="text-slate-500 text-xs mt-3">{messages.footer.privacy}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`/${locale}/service/${link.slug}`}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-white font-semibold mb-4">Language</h4>
            <div className="flex flex-col gap-2">
              {[
                { code: 'en', label: 'English', flag: '🇺🇸' },
                { code: 'es', label: 'Español', flag: '🇪🇸' },
                { code: 'pt', label: 'Português', flag: '🇧🇷' },
              ].map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    lang.code === locale ? 'text-blue-400 font-medium' : 'text-slate-400 hover:text-blue-400'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          © {currentYear} LucianoAI Systems. {messages.footer.rights}
        </div>
      </div>
    </footer>
  );
}
