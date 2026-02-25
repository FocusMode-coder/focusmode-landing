import CTAButton from './CTAButton';

interface PricingOption {
  title: string;
  description: string;
  price: string;
  stripeLink: string;
  featured?: boolean;
}

interface PricingSectionProps {
  title: string;
  privateNote: string;
  ctaLabel: string;
  options: PricingOption[];
}

export default function PricingSection({
  title,
  privateNote,
  ctaLabel,
  options,
}: PricingSectionProps) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {privateNote}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {options.map((option) => (
            <div
              key={option.title}
              className={`relative flex flex-col rounded-2xl p-6 md:p-8 border transition-all duration-300 ${
                option.featured
                  ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:shadow-lg'
              }`}
            >
              {option.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-slate-900 text-xs font-bold rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h3 className={`text-xl font-bold mb-3 ${option.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                {option.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 flex-1 ${option.featured ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                {option.description}
              </p>

              <div className={`text-3xl font-extrabold mb-6 ${option.featured ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                {option.price}
              </div>

              <CTAButton
                href={option.stripeLink}
                label={ctaLabel}
                variant={option.featured ? 'secondary' : 'primary'}
                className="w-full justify-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
