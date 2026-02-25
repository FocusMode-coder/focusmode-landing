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
      className="group block bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 hover:bg-gray-800/60 transition-all duration-200"
    >
      <div className="flex flex-col gap-3">
        <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-indigo-500" />
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        <span className="text-indigo-400 text-sm font-medium mt-1 group-hover:underline">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
