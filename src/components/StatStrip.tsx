interface StatItem {
  label: string;
  value: string;
  description?: string;
}

interface StatStripProps {
  stats: StatItem[];
}

export default function StatStrip({ stats }: StatStripProps) {
  if (!stats.length) return null;

  return (
    <section className="bg-charcoal py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl leading-none text-amber sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                {stat.label}
              </p>
              {stat.description && (
                <p className="mt-0.5 text-xs text-white/50">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
