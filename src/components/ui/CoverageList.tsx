import { CheckCircle2 } from "lucide-react";

export function CoverageList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-heading text-2xl font-bold text-tardis md:text-3xl">{title}</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl bg-bg-soft p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tardis" aria-hidden="true" />
              <span className="text-base text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
