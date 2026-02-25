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
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-300 mb-8">{subtitle}</p>

        <div className="flex gap-3 mb-10">
          <a href={primaryCtaHref} target="_blank" className="bg-indigo-600 px-6 py-3 rounded-full">
            {primaryCtaLabel}
          </a>

          <a href={secondaryCtaHref} target="_blank" className="bg-white/10 px-6 py-3 rounded-full">
            {secondaryCtaLabel}
          </a>
        </div>

        <ul className="mb-10">
          {outcomes.map((o) => (
            <li key={o}>• {o}</li>
          ))}
        </ul>

        <div className="mb-10">
          {options.map((o) => (
            <div key={o.title} className="mb-4">
              <h3 className="font-bold">{o.title}</h3>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>

        <p className="mb-10">{pricing}</p>

        <div id="contact">
          <a href={`mailto:${contactEmail}`} className="mr-4">
            Email
          </a>
          <a href={contactWhatsapp} target="_blank">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
