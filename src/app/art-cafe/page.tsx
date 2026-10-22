import type { Metadata } from "next";
import { Photo } from "@/components/site/photo";
import { ReservationForm } from "@/components/site/reservation-form";
import { Price, Tile } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Art Café",
  description: "Tardes de pintura com café, doce e todo o material incluído, na Vila Mariana.",
};

export default function ArtCafePage() {
  const { artCafe } = site;

  return (
    <main className="mx-auto flex w-full max-w-(--container-page) flex-col gap-20 px-4 pt-10 sm:px-8 sm:pt-16">
      <section className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">Art Café</h1>
          <p className="max-w-prose text-lg text-ink-muted">
            Uma tarde para pintar sem pressa, com café na mão e um gato por perto. Não precisa saber desenhar: a
            artista da casa sugere um tema e mostra o caminho.
          </p>
          <dl className="grid max-w-md grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <dt className="text-sm text-ink-muted">Quando</dt>
              <dd className="font-medium">{artCafe.when}</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-muted">Duração</dt>
              <dd className="font-medium">{artCafe.duration}</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-muted">Valor por pessoa</dt>
              <dd>
                <Price cents={artCafe.priceCents} />
              </dd>
            </div>
            <div>
              <dt className="text-sm text-ink-muted">Vagas por tarde</dt>
              <dd className="font-medium">{artCafe.seats}</dd>
            </div>
          </dl>
        </div>
        <Photo
          file="art-cafe-hero.jpg"
          alt="Potes com pincéis e tintas coloridas sobre a mesa"
          ratio="4/5"
          shape="arch"
          tone="rose"
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="mx-auto w-full max-w-md"
        />
      </section>

      <section className="flex flex-col gap-8" aria-labelledby="como-funciona">
        <h2 id="como-funciona" className="font-display text-3xl font-semibold">
          Como funciona
        </h2>
        {/* A real sequence, so the steps are numbered. */}
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {artCafe.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 rounded-card border border-line bg-surface p-5">
              <span className="grid size-10 place-items-center rounded-full bg-highlight font-display text-lg font-bold text-highlight-ink">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold">{step.title}</h3>
              <p className="text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="reservar" className="grid scroll-mt-8 gap-4 lg:grid-cols-[1fr_1.4fr]" aria-labelledby="reservar-titulo">
        <Tile tone="olive" className="flex flex-col gap-5">
          <h2 className="font-display text-3xl font-semibold">O que está incluído</h2>
          <ul className="flex flex-col">
            {artCafe.included.map((item) => (
              <li key={item} className="border-t border-cream-100/25 py-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-cream-200">
            Chegue uns 10 minutos antes para escolher a mesa e fazer o pedido da bebida.
          </p>
        </Tile>
        <Tile tone="surface" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 id="reservar-titulo" className="font-display text-3xl font-semibold">
              Reservar uma vaga
            </h2>
            <p className="text-ink-muted">
              Preencha e enviamos sua reserva pelo WhatsApp. O pagamento é feito no dia, no balcão.
            </p>
          </div>
          <ReservationForm />
        </Tile>
      </section>
    </main>
  );
}
