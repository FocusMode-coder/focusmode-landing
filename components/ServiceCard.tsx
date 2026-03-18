import Link from 'next/link';

interface ServiceCardProps {
  name: string;
  description: string;
  href: string;
}

export default function ServiceCard({ name, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col bg-gray-900/80 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-indigo-500 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden"
    >
      {/* Gradient accent top bar */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-600/30 transition-colors duration-300">
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed flex-1">{description}</p>
        <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mt-2 group-hover:gap-3 transition-all duration-200">
          <span>Learn more</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
