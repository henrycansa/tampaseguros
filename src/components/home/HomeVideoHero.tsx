import Link from "next/link";
import { CheckCircle2, type LucideIcon } from "lucide-react";

type Gateway = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

// Halo de sombra detrás del texto blanco: refuerza la legibilidad real sobre el
// video sin necesidad de oscurecerlo tanto con el overlay (el video gana protagonismo).
const textShadow = { textShadow: "0 2px 10px rgba(0,0,0,0.65), 0 1px 3px rgba(0,0,0,0.5)" };

export function HomeVideoHero({
  h1,
  subtitle,
  geo,
  personal,
  business,
  trustPoints,
}: {
  h1: string;
  subtitle: string;
  geo: string;
  personal: Gateway;
  business: Gateway;
  trustPoints: string[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-tardis">
      {/* Video de fondo: decorativo, sin información esencial (todo el mensaje va en el texto superpuesto).
          preload="auto" + poster garantizan que haya algo visible de inmediato en móvil mientras el
          video termina de descargar. object-cover + object-center recortan el video para llenar
          cualquier proporción de pantalla (incluida la vertical de celulares) sin deformarlo. */}
      {/* brightness-[1.15]: el video gana un 15% de luminosidad para reforzar su
          protagonismo sobre el overlay reducido, sin tocar el overlay ni el text-shadow
          que ya garantizan la legibilidad del texto blanco. */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center brightness-[1.15]"
        poster="/images/familia-protegida-tampa-seguros.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/familia-negocio-asegurados-tampa-seguros.mp4" type="video/mp4" />
      </video>

      {/* Overlay reducido a propósito para que el video tenga más protagonismo. El texto
          blanco lleva text-shadow (arriba) para mantenerse legible incluso en los fotogramas
          más claros del video, ya que el contraste plano contra un overlay tan bajo ya no
          garantiza por sí solo el mínimo WCAG AA en el peor caso teórico. */}
      <div className="absolute inset-0 bg-tardis/50" />

      <div className="relative mx-auto flex min-h-[580px] max-w-5xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[620px] sm:py-16 md:px-8">
        <h1
          style={textShadow}
          className="max-w-3xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          {h1}
        </h1>

        {/* Bloque GEO justo bajo el H1 (patrón GEO/AI-answer del resto del sitio), en una
            tarjeta "glass" con borde y fondo semitransparente para que se distinga con
            claridad del H1/subtitle que flotan directamente sobre el video. */}
        <div className="mt-4 w-full max-w-2xl rounded-xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm sm:mt-5">
          <p style={textShadow} className="text-sm font-semibold leading-relaxed text-white sm:text-base">
            {geo}
          </p>
        </div>

        <p style={textShadow} className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-white/95 sm:mt-6 sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-7 grid w-full max-w-xl gap-3 sm:mt-8 sm:grid-cols-2">
          <Link
            href={personal.href}
            className="flex min-h-[120px] flex-col items-center justify-center gap-1.5 rounded-[20px] bg-cold-blue px-4 py-4 text-center text-tardis shadow-lg transition-transform duration-200 hover:-translate-y-[5px] active:scale-[0.98]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30">
              <personal.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-base font-bold">{personal.title}</span>
            <span className="text-sm">{personal.description}</span>
          </Link>

          <Link
            href={business.href}
            className="flex min-h-[120px] flex-col items-center justify-center gap-1.5 rounded-[4px] bg-gold px-4 py-4 text-center text-white shadow-lg transition-transform duration-200 hover:-translate-y-[5px] active:scale-[0.98]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-tardis">
              <business.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-base font-bold">{business.title}</span>
            <span className="text-sm">{business.description}</span>
          </Link>
        </div>

        {/* Prueba social compacta: señales de confianza rápidas dentro del hero,
            complementarias a la barra de estadísticas más grande que aparece más
            abajo en la página (SocialProofBar). */}
        <ul className="mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-7">
          {trustPoints.map((point) => (
            <li
              key={point}
              style={textShadow}
              className="flex items-center gap-1.5 text-xs font-medium text-white/90 sm:text-sm"
            >
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cold-blue" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
