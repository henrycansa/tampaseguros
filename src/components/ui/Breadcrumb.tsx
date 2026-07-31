import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/components/seo/BreadcrumbSchema";

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-4 md:px-8">
      <ol className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-sm text-foreground/60 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex shrink-0 items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="font-medium text-tardis">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="flex min-h-[32px] items-center hover:text-tardis">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
