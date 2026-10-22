import type { Metadata } from "next";
import { ProductCard, Tabs } from "@/components/ui";
import { getMenu, groupByCategory } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Cardápio",
  description: "Cafés, filtrados, gelados, lanches e doces da Sun Day, na Vila Mariana.",
};

export default function CardapioPage() {
  const groups = groupByCategory(getMenu());

  return (
    <main className="mx-auto flex w-full max-w-(--container-page) flex-col gap-10 px-4 pt-10 sm:px-8 sm:pt-16">
      <header className="flex flex-col gap-4">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">Cardápio</h1>
        <p className="max-w-prose text-lg text-ink-muted">
          Café de torra própria, pães de fermentação natural e doces assados todas as manhãs. Os itens com o selo
          Popular são os que mais saem no balcão.
        </p>
      </header>

      <Tabs
        label="Categorias do cardápio"
        items={groups.map(({ category, items }) => ({
          id: category,
          label: category,
          content: (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <li key={item.id} className="flex">
                  <ProductCard
                    name={item.name}
                    notes={item.description}
                    priceCents={item.priceCents}
                    popular={item.popular}
                    className="flex-1"
                  />
                </li>
              ))}
            </ul>
          ),
        }))}
      />
    </main>
  );
}
