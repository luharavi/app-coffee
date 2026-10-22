import Link from "next/link";
import { Photo } from "@/components/site/photo";
import { PhotoWall } from "@/components/site/photo-wall";
import { Price, Rule, Tile, buttonStyles } from "@/components/ui";
import { site } from "@/content/site";
import { getMenu } from "@/lib/menu";

const wall = [
  { file: "janela-samambaias.jpg", alt: "Mesa perto da janela, cercada de plantas e luz da manhã", ratio: "3/4", tone: "olive" },
  { file: "latte-art.jpg", alt: "Café com coração desenhado na espuma, ao lado de uma folha de samambaia", ratio: "1/1", tone: "sand" },
  { file: "gato-no-balcao.jpg", alt: "Gato sentado na mesa ao lado de um café com leite", ratio: "4/5", tone: "rose" },
  { file: "brunch-mesa.jpg", alt: "Torrada de abacate com ovo pochê", ratio: "4/3", tone: "sun" },
  { file: "art-cafe-telas.jpg", alt: "Tela pintada num cavalete", ratio: "2/3", tone: "olive" },
  { file: "prateleira-plantas.jpg", alt: "Prateleira com vasos de plantas", ratio: "4/5", tone: "rose" },
] as const;

export default function Home() {
  const menu = getMenu();
  const brunch = site.brunch.highlights
    .map((id) => menu.find((item) => item.id === id))
    .filter((item) => item !== undefined);

  return (
    <main className="mx-auto flex w-full max-w-(--container-page) flex-col gap-24 px-4 pt-10 sm:px-8 sm:pt-16">
      {/* Hero: the sun rises behind the arch window — the page's one moment of motion. */}
      <section className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">{site.tagline}</h1>
          <p className="max-w-md text-lg text-ink-muted">
            Café coado na hora, brunch no fim de semana e tardes de pintura. Os gatos da casa escolhem em qual
            colo vão passar a tarde.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/cardapio" className={buttonStyles({ size: "lg" })}>
              Ver cardápio
            </Link>
            <Link href="/art-cafe#reservar" className={buttonStyles({ variant: "outline", size: "lg" })}>
              Reservar Art Café
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="absolute -top-8 right-0 size-48 animate-sunrise sm:-right-6 rounded-full bg-sun-300 motion-reduce:animate-none sm:size-60"
          />
          <Photo
            file="hero-salao.jpg"
            alt="Salão claro com plantas pendentes e mesas de madeira"
            ratio="3/4"
            shape="arch"
            tone="olive"
            priority
            sizes="(min-width: 768px) 28rem, 100vw"
            className="relative"
          />
        </div>
      </section>

      <section className="flex flex-col gap-8" aria-labelledby="mural">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="mural" className="font-display text-3xl font-semibold">
            Um dia na Sun Day
          </h2>
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-control font-medium underline underline-offset-4"
          >
            Mais fotos no Instagram
          </a>
        </div>
        <PhotoWall photos={[...wall]} />
      </section>

      <section className="grid gap-4 lg:grid-cols-2" aria-label="Brunch e Art Café">
        <Tile tone="sun" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-3xl font-semibold">Brunch</h2>
            <p className="font-medium">{site.brunch.when}</p>
          </div>
          <p className="max-w-prose">{site.brunch.intro}</p>
          <ul className="flex flex-col">
            {brunch.map((item) => (
              <li key={item.id} className="flex items-baseline justify-between gap-4 border-t border-espresso-900/20 py-3">
                <span className="font-medium">{item.name}</span>
                <Price cents={item.priceCents} />
              </li>
            ))}
          </ul>
          <Link href="/cardapio" className={buttonStyles({ variant: "secondary", className: "self-start" })}>
            Ver o cardápio completo
          </Link>
        </Tile>

        <Tile tone="olive" className="grid gap-6 sm:grid-cols-[1fr_12rem] sm:items-end">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-semibold">Art Café</h2>
            <p className="max-w-prose text-cream-200">
              Tardes de pintura com café, doce e todo o material na mesa. Uma artista da casa guia o tema; você
              pinta no seu ritmo e leva a tela para casa.
            </p>
            <p className="font-medium">
              {site.artCafe.when}. <Price cents={site.artCafe.priceCents} /> por pessoa.
            </p>
            <Link href="/art-cafe" className={buttonStyles({ variant: "onTile", className: "self-start" })}>
              Como funciona o Art Café
            </Link>
          </div>
          <Photo
            file="art-cafe-mesa.jpg"
            alt="Mãos pintando ao lado de xícaras de café"
            ratio="3/4"
            shape="arch"
            tone="sun"
            sizes="12rem"
            className="hidden sm:flex"
          />
        </Tile>
      </section>

      <section className="flex flex-col gap-8" aria-labelledby="gatos">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 id="gatos" className="font-display text-3xl font-semibold">
              Quem mora aqui
            </h2>
            <p className="max-w-prose text-ink-muted">
              Gatos adotados que circulam pelo salão. Carinho é bem-vindo; colo, só se eles pedirem.
            </p>
          </div>
          <Link href="/gatos" className={buttonStyles({ variant: "outline" })}>
            Conhecer os gatos
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {site.cats.map((cat, i) => (
            <li key={cat.name}>
              <Photo
                file={cat.photo}
                alt={`${cat.name}, gato ${cat.coat.toLowerCase()}`}
                ratio="3/4"
                shape="arch"
                tone={(["rose", "sun", "olive", "sand"] as const)[i % 4]}
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <p className="mt-3 font-display text-xl font-semibold">{cat.name}</p>
              <p className="text-sm text-ink-muted">{cat.coat}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="visite" className="scroll-mt-8 flex flex-col gap-8" aria-labelledby="visite-titulo">
        <Rule variant="double" className="text-ink" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 id="visite-titulo" className="font-display text-3xl font-semibold">
              Visite
            </h2>
            <address className="text-lg not-italic">
              {site.address.street}
              <br />
              {site.address.district}, {site.address.city}
            </address>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({ className: "self-start" })}
            >
              Como chegar
            </a>
          </div>
          <dl className="grid grid-cols-[auto_1fr] content-start gap-x-8 gap-y-3 text-lg">
            {site.hours.map((h) => (
              <div key={h.days} className="contents">
                <dt className="font-medium">{h.days}</dt>
                <dd className="text-ink-muted">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
