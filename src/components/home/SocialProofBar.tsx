import { Users, Languages, HandHeart, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Users, Languages, HandHeart, BadgeCheck];

export function SocialProofBar({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="border-y border-tardis/10 bg-white px-4 py-10 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = icons[index] ?? BadgeCheck;
          return (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-7 w-7 text-gold-dark" aria-hidden="true" />
              <span className="font-heading text-3xl font-bold text-tardis md:text-4xl">{stat.value}</span>
              <span className="text-base text-foreground/70">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
