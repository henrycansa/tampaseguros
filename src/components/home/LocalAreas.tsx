import { MapPin } from "lucide-react";

export function LocalAreas({
  title,
  body,
  cities,
}: {
  title: string;
  body: string;
  cities: string[];
}) {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
        <MapPin className="h-8 w-8 text-tardis" aria-hidden="true" />
        <h2 className="font-heading text-2xl font-bold text-tardis md:text-3xl">{title}</h2>
        <p className="text-foreground/70">{body}</p>
        <ul className="flex flex-wrap justify-center gap-2">
          {cities.map((city) => (
            <li
              key={city}
              className="rounded-full border border-tardis/20 bg-bg-soft px-4 py-1.5 text-sm font-medium text-tardis"
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
