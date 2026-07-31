import { ProductCard } from "@/components/ui/ProductCard";
import type { ProductCardData } from "@/lib/content/home";

export function RelatedServices({
  title,
  items,
  linkLabel,
}: {
  title: string;
  items: ProductCardData[];
  linkLabel: string;
}) {
  return (
    <section className="bg-bg-soft px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-2xl font-bold text-tardis md:text-3xl">{title}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ProductCard
              key={item.href}
              href={item.href}
              icon={item.icon}
              title={item.title}
              description={item.description}
              linkLabel={linkLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
