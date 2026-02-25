interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  badge?: string;
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, description, badge, children }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            {badge}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6">
          {subtitle}
        </p>
        {description && (
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
