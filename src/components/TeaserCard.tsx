import Link from "next/link";

interface TeaserCardProps {
  title: string;
  description: string;
  href: string;
  cta: string;
  accent?: "amber" | "green";
}

export default function TeaserCard({
  title,
  description,
  href,
  cta,
  accent = "amber",
}: TeaserCardProps) {
  const borderAccent =
    accent === "amber"
      ? "border-l-amber hover:bg-amber/5"
      : "border-l-green hover:bg-green/5";

  return (
    <Link
      href={href}
      className={`group flex flex-col gap-3 rounded-xl border-l-4 bg-white p-6 shadow-sm transition-all ${borderAccent} sm:p-8`}
    >
      <h3 className="font-display text-xl leading-tight text-charcoal sm:text-2xl">
        {title}
      </h3>
      <p className="max-w-md text-base leading-relaxed text-charcoal-muted">
        {description}
      </p>
      <span
        className={`mt-1 inline-flex items-center gap-1.5 text-sm font-semibold ${
          accent === "amber" ? "text-amber-dark" : "text-green"
        }`}
      >
        {cta}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="transition-transform group-hover:translate-x-1"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </Link>
  );
}
