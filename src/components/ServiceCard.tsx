import Link from 'next/link';

interface ServiceCardProps {
  icon?: string;
  name: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, name, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
        <span>Learn more</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}
