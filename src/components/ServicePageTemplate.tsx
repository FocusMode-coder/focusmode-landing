import Link from 'next/link';

type Option = {
  title: string;
  desc: string;
};

type Props = {
  title: string;
  subtitle: string;
  outcomes: string[];
  options: Option[];
  pricing: string;

  primaryCtaLabel: string;
  primaryCtaHref: string;

  secondaryCtaLabel: string;
  secondaryCtaHref: string;

  contactEmail: string;
  contactWhatsapp: string;
};

export default function ServicePageTemplate({
  title,
  subtitle,
  outcomes,
  options,
  pricing,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  contactEmail,
  contactWhatsapp,
}: Props) {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-40 left-[-120px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute bottom-[-180px] right-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(0,0,0,0.55))]" />
      </div>

      <div className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Header card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.75)]" />
                FocusMode • Service
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-base md:text-lg text-gray-300">
                {subtitle}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={primaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 font-semibold shadow-[0_12px_40px_rgba(79,70,229,0.35)] transition hover:bg-indigo-500"
                >
                  <span className="mr-2">{primaryCtaLabel}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </a>

                <a
                  href={secondaryCtaHref}
                  target={secondaryCtaHref === '#contact' ? undefined : '_blank'}
                  rel={secondaryCtaHref === '#contact' ? undefined : 'noopener noreferrer'}
                  className="group inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 font-semibold text-gray-100 backdrop-blur-xl transition hover:bg-white/10"
                >
                  <span className="mr-2">{secondaryCtaLabel}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                No raw URLs shown • Opens in a new tab where applicable
              </div>
            </div>
          </div>

          {/* Content grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Outcomes */}
            <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 md:p-8">
              <h2 className="text-xl font-bold">Outcomes</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {outcomes.map((o) => (
                  <div
                    key={o}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex gap-3">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400 shadow-[0_0_18px_rgba(99,102,241,0.75)]" />
                      <p className="text-gray-200">{o}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Options */}
              <h2 className="mt-10 text-xl font-bold">Options</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((o) => (
                  <div
                    key={o.title}
                    className="rounded-3xl border border-white/10 bg-black/20 p-6 transition hover:bg-black/25"
                  >
                    <h3 className="text-lg font-semibold">{o.title}</h3>
                    <p className="mt-2 text-gray-300">{o.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 md:p-8">
              <h2 className="text-xl font-bold">Pricing</h2>
              <p className="mt-4 text-gray-300">{pricing}</p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-sm text-gray-300">Primary CTA</div>
                <div className="mt-1 font-semibold">{primaryCtaLabel}</div>
                <div className="mt-4 text-sm text-gray-300">Secondary CTA</div>
                <div className="mt-1 font-semibold">{secondaryCtaLabel}</div>
              </div>

              <div className="mt-6 text-xs text-gray-400">
                Tip: if you want “Buy / Visit Site / Contact” localized later, we hook them to i18n keys.
              </div>
            </div>
          </div>

          {/* Contact */}
          <div
            id="contact"
            className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 md:p-8"
          >
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="mt-2 text-gray-300">
              Prefer a quick message? Email or WhatsApp — fast response.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                Email
              </a>

              <a
                href={contactWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Footer micro */}
          <div className="mt-10 pb-10 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} FocusMode
          </div>
        </div>
      </div>
    </div>
  );
}
