import Link from 'next/link';

type Option = {
  title: string;
  desc: string;
};

type Props = {
  heroTitle: string;
  heroSubtitle: string;
  outcomes: string[];
  options: Option[];
  pricing: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function ServicePageTemplate({
  heroTitle,
  heroSubtitle,
  outcomes,
  options,
  pricing,
  ctaLabel,
  ctaHref,
}: Props) {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-6 py-28 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white mb-4">{heroTitle}</h1>
        <p className="relative text-lg text-gray-300 max-w-2xl mx-auto">{heroSubtitle}</p>
      </section>

      {/* 3 Key Outcomes */}
      <section className="px-6 py-16 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">3 Key Outcomes</h2>
        <ul className="flex flex-col gap-4">
          {outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <p className="text-gray-200 leading-relaxed">{outcome}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Options */}
      <section className="px-6 py-16 bg-gray-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((option, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition-colors"
              >
                <h3 className="text-lg font-semibold text-indigo-300 mb-2">{option.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 max-w-3xl mx-auto w-full text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Pricing</h2>
        <p className="text-gray-400 mb-8 leading-relaxed">{pricing}</p>
        <Link
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-10 py-4 rounded-full transition-colors duration-200 text-lg"
        >
          {ctaLabel}
        </Link>
      </section>
    </div>
  );
}
