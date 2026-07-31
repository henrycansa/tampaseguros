import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { HeroCtas } from "@/components/home/HeroCtas";

export type PasBullet = { icon: LucideIcon; text: string };

export function Hero({
  lang,
  eyebrow,
  headline,
  geo,
  body,
  pasItems,
  whatsappLabel,
  callLabel,
  quoteLabel,
  imageSrc,
  imageAlt,
  imageFlip = false,
  variant = "light",
  compact = false,
  quoteHref,
}: {
  lang: "es" | "en";
  eyebrow: string;
  headline: string;
  geo: string;
  body?: string;
  pasItems?: PasBullet[];
  whatsappLabel: string;
  callLabel: string;
  quoteLabel: string;
  imageSrc: string;
  imageAlt: string;
  imageFlip?: boolean;
  variant?: "light" | "dark";
  compact?: boolean;
  quoteHref?: string;
}) {
  const isDark = variant === "dark";

  return (
    <section className={`relative overflow-hidden ${isDark ? "bg-tardis" : "bg-white"}`}>
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imageFlip ? "object-left scale-x-[-1]" : "object-right"}`}
        />
        <div
          className={
            isDark
              ? "absolute inset-0 bg-gradient-to-r from-tardis via-tardis/90 to-tardis/10"
              : "absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10"
          }
        />
      </div>

      <div
        className={`relative mx-auto flex ${compact ? "min-h-[480px]" : "min-h-[640px]"} max-w-7xl flex-col justify-center gap-6 px-4 py-16 md:px-8`}
      >
        <span
          className={`w-fit rounded-full px-4 py-1.5 text-sm font-semibold ${isDark ? "bg-gold text-white" : "bg-cold-blue text-tardis"}`}
        >
          {eyebrow}
        </span>

        <h1
          className={`max-w-2xl font-heading text-4xl font-bold leading-tight md:text-5xl ${isDark ? "text-white" : "text-tardis"}`}
        >
          {headline}
        </h1>

        <p className={`max-w-xl text-base font-semibold md:text-lg ${isDark ? "text-white" : "text-foreground"}`}>
          {geo}
        </p>

        {pasItems ? (
          <ul className="flex max-w-xl flex-col gap-2">
            {pasItems.map((item) => (
              <li
                key={item.text}
                className={`flex items-start gap-2.5 text-base leading-snug ${isDark ? "text-white/90" : "text-foreground/80"}`}
              >
                <item.icon
                  className={`mt-0.5 h-5 w-5 shrink-0 ${isDark ? "text-cold-blue" : "text-tardis"}`}
                  aria-hidden="true"
                />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        ) : body ? (
          <p className={`max-w-xl text-base ${isDark ? "text-white/75" : "text-foreground/70"}`}>{body}</p>
        ) : null}

        <HeroCtas
          lang={lang}
          whatsappLabel={whatsappLabel}
          callLabel={callLabel}
          quoteLabel={quoteLabel}
          variant={variant}
          {...(quoteHref ? { quoteHref } : {})}
        />
      </div>
    </section>
  );
}
