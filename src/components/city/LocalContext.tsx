import { Landmark, MapPinned, CloudSun } from "lucide-react";
import type { CityInfo } from "@/lib/content/cities";

function capitalizeFirst(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function LocalContext({
  title,
  intro,
  city,
  labels,
}: {
  title: string;
  intro: string;
  city: CityInfo;
  labels: { county: string; region: string; climate: string };
}) {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-heading text-2xl font-bold text-tardis md:text-3xl">{title}</h2>
        <p className="mt-4 text-center text-foreground/70">{intro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-xl bg-bg-soft p-5">
            <Landmark className="h-5 w-5 text-tardis" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-wide text-tardis/70">{labels.county}</p>
            <p className="text-base text-foreground/80">{city.county}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-bg-soft p-5">
            <MapPinned className="h-5 w-5 text-tardis" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-wide text-tardis/70">{labels.region}</p>
            <p className="text-base text-foreground/80">{city.hospitalNote}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-bg-soft p-5">
            <CloudSun className="h-5 w-5 text-tardis" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-wide text-tardis/70">{labels.climate}</p>
            <p className="text-base text-foreground/80">{capitalizeFirst(city.climateNote)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
