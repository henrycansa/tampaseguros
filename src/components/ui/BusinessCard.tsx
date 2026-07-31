import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export function BusinessCard({
  href,
  icon: Icon,
  title,
  description,
  linkLabel,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  linkLabel: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col gap-3 rounded-md border border-gold/40 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:border-gold hover:shadow-xl hover:shadow-gold/15"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-md bg-gold/15 text-gold-dark transition-colors duration-200 group-hover:bg-gold-dark group-hover:text-white">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="font-heading text-lg font-bold text-tardis">{title}</h3>
      <p className="text-base text-foreground/70">{description}</p>
      <span className="mt-auto inline-flex min-h-[48px] items-center gap-1 text-sm font-semibold text-tardis transition-all group-hover:gap-2">
        {linkLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
