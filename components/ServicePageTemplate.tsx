import Link from 'next/link';

interface Option {
  title: string;
  desc: string;
}

interface ServicePageTemplateProps {
  heroTitle: string;
  heroSubtitle: string;
  outcomes: string[];
  options: Option[];
  pricing: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function ServicePageTemplate({
  heroTitle,
  heroSubtitle,
  outcomes,
  options,
  pricing,
  ctaLabel,
  ctaHref,
}: ServicePageTemplateProps) {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-6 py-28 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/25 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-6">
            LucianoAI Systems
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{heroSubtitle}</p>
        </div>
      </section>

      {/* 3 Key Outcomes */}
      <section className="px-6 py-20 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">3 Key Outcomes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <div key={i} className="relative flex flex-col gap-4 bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                {i + 1}
              </div>
              <p className="text-gray-200 leading-relaxed font-medium">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Options */}
      <section className="px-6 py-20 bg-gray-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Service Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((option, i) => (
              <div
                key={i}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-bold text-indigo-300 mb-3 group-hover:text-indigo-200 transition-colors">{option.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="px-6 py-20 max-w-3xl mx-auto w-full text-center">
        <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-10">
          <div className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Private pricing available
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Pricing</h2>
          <p className="text-gray-400 mb-10 leading-relaxed text-lg">{pricing}</p>
          <Link
            href={ctaHref}
            target={ctaHref.startsWith('http') ? '_blank' : undefined}
            rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 text-lg"
          >
            {ctaLabel}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
