import Link from "next/link";
import type { CityInfo } from "@/lib/content/cities";

export function OtherCitiesLinks({
  title,
  cities,
  buildHref,
}: {
  title: string;
  cities: CityInfo[];
  buildHref: (citySlug: string) => string;
}) {
  return (
    <section className="bg-bg-soft px-4 py-14 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-xl font-bold text-tardis">{title}</h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={buildHref(city.slug)}
                className="flex min-h-[48px] items-center rounded-full border border-tardis/20 bg-white px-4 text-sm font-medium text-tardis transition hover:bg-tardis hover:text-white active:scale-[0.97]"
              >
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
