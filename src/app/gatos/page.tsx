import type { Metadata } from "next";
import { Photo } from "@/components/site/photo";
import { Tile } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Os gatos",
  description: "Conheça os gatos que moram na Sun Day e como fazer carinho neles.",
};

const tones = ["rose", "sun", "olive", "sand"] as const;

export default function GatosPage() {
  return (
    <main className="mx-auto flex w-full max-w-(--container-page) flex-col gap-16 px-4 pt-10 sm:px-8 sm:pt-16">
      <header className="flex flex-col gap-4">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">Quem mora aqui</h1>
        <p className="max-w-prose text-lg text-ink-muted">
          Todos foram adotados e vivem na casa. Eles escolhem onde dormir, de quem chegar perto e quando é hora de
          ficar sozinhos. Há sempre um canto alto só deles.
        </p>
      </header>

      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {site.cats.map((cat, i) => (
          <li key={cat.name} className="flex flex-col gap-4">
            <Photo
              file={cat.photo}
              alt={`${cat.name}, gato ${cat.coat.toLowerCase()}`}
              ratio="3/4"
              shape="arch"
              tone={tones[i % tones.length]}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-display text-2xl font-semibold">{cat.name}</h2>
              <p className="text-sm text-ink-muted">{cat.coat}</p>
            </div>
            <p>{cat.about}</p>
          </li>
        ))}
      </ul>

      <Tile tone="sun" className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <h2 className="font-display text-3xl font-semibold">Para o carinho dar certo</h2>
        <ul className="flex flex-col">
          {site.catRules.map((rule) => (
            <li key={rule} className="border-t border-espresso-900/20 py-3 text-lg">
              {rule}
            </li>
          ))}
        </ul>
      </Tile>
    </main>
  );
}
