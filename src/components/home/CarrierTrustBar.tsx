import Image from "next/image";
import type { Carrier } from "@/lib/carriers";

export function CarrierTrustBar({
  carriers,
  title,
  subtitle,
}: {
  carriers: Carrier[];
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-bg-soft px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{title}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-foreground/70">{subtitle}</p>

        {/* flex-wrap + justify-center (en vez de grid): cuando el número de aseguradoras
            no completa la última fila, esta queda centrada en lugar de dejar un hueco
            vacío alineado a la izquierda, que es el "espacio vacío" que se veía antes. */}
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {carriers.map((carrier) => (
            <li
              key={carrier.src}
              className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2.5 shadow-sm sm:h-[72px] sm:w-36"
            >
              <Image
                src={carrier.src}
                alt={`Logo de ${carrier.name}`}
                width={160}
                height={56}
                className="h-10 w-auto object-contain grayscale transition hover:grayscale-0 sm:h-11"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
