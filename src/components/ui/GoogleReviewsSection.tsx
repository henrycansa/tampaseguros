import { Star } from "lucide-react";
import { googleReviews } from "@/lib/content/reviews";
import { ReviewAvatar } from "@/components/ui/ReviewAvatar";

function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.82-.07-1.6-.2-2.36H12v4.47h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.73Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11C3.25 21.3 7.31 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.6H1.27A11.98 11.98 0 0 0 0 12c0 1.94.47 3.77 1.27 5.4l4-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.6l4 3.11C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}

const copy = {
  es: {
    eyebrow: "Reseñas verificadas",
    title: "Lo que dicen nuestros clientes",
    subtitle: "Opiniones reales de familias y negocios que ya confían en Tampa Seguros.",
    badge: "Reseña de Google",
    starsLabel: "5 de 5 estrellas",
  },
  en: {
    eyebrow: "Verified reviews",
    title: "What our clients say",
    subtitle: "Real feedback from families and businesses who already trust Tampa Seguros.",
    badge: "Google review",
    starsLabel: "5 out of 5 stars",
  },
};

export function GoogleReviewsSection({ lang }: { lang: "es" | "en" }) {
  const t = copy[lang];

  return (
    <section className="bg-bg-soft px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-tardis shadow-sm">
            <GoogleIcon />
            {t.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold text-tardis md:text-3xl">{t.title}</h2>
          <p className="mt-2 text-foreground/70">{t.subtitle}</p>
        </div>

        <div
          className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
        >
          {googleReviews.map((review) => (
            <article
              key={review.name}
              className="flex w-[290px] shrink-0 snap-start flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-tardis/5 md:w-auto"
            >
              <div className="flex items-center gap-3">
                <ReviewAvatar src={review.avatar} name={review.name} />
                <div>
                  <p className="font-bold text-tardis">{review.name}</p>
                  <div className="flex gap-0.5" role="img" aria-label={t.starsLabel}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm italic leading-relaxed text-foreground/80">&ldquo;{review.text}&rdquo;</p>

              <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70">
                <GoogleIcon className="h-3.5 w-3.5" />
                {t.badge}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
