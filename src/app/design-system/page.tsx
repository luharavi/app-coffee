import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CupMark } from "@/components/brand/cup-mark";
import { BRAND_NAME, Wordmark } from "@/components/brand/wordmark";
import {
  Badge,
  Button,
  Choice,
  Field,
  Input,
  Notice,
  ProductCard,
  QuantityStepper,
  Rule,
  Select,
  Swatch,
  Tabs,
  Textarea,
  Tile,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Sistema de design",
  description: "Tokens e componentes da marca.",
};

const palette = [
  { name: "Oxblood", token: "oxblood", steps: ["50", "100", "300", "500", "700", "900"], role: "Ações principais e a marca." },
  { name: "Espresso", token: "espresso", steps: ["300", "500", "700", "900", "950"], role: "Texto e superfícies escuras." },
  { name: "Cream", token: "cream", steps: ["50", "100", "200", "300"], role: "Fundo e papel." },
  { name: "Sand", token: "sand", steps: ["300", "500", "700"], role: "Embalagem e áreas neutras quentes." },
  { name: "Rose", token: "rose", steps: ["100", "300", "500", "700"], role: "Destaque e foco." },
  { name: "Olive", token: "olive", steps: ["100", "300", "500", "700", "900"], role: "Ações secundárias e sucesso." },
  { name: "Caramel", token: "caramel", steps: ["100", "500", "700"], role: "Avisos." },
  { name: "Sun", token: "sun", steps: ["100", "300", "500"], role: "Selo Popular e o sol do herói." },
];

const semantic = [
  ["bg", "Fundo da página"],
  ["surface", "Cards e campos"],
  ["surface-sunken", "Bandejas e trilhos"],
  ["surface-inverse", "Blocos invertidos"],
  ["ink", "Texto principal"],
  ["ink-muted", "Texto de apoio"],
  ["accent", "Ação principal"],
  ["highlight", "Selo Popular"],
  ["success", "Confirmação"],
  ["warning", "Atenção"],
  ["danger", "Erro"],
] as const;

const typeScale = [
  { cls: "text-7xl", px: 96, sample: "Café", display: true },
  { cls: "text-5xl", px: 60, sample: "Ritual", display: true },
  { cls: "text-4xl", px: 48, sample: "Torra nova", display: true },
  { cls: "text-3xl", px: 36, sample: "Cardápio de outono", display: true },
  { cls: "text-2xl", px: 24, sample: "Filtrados", display: true },
  { cls: "text-xl", px: 21, sample: "Flat white com leite de aveia", display: false },
  { cls: "text-base", px: 16, sample: "Notas de cacau, ameixa seca e um final longo de rapadura.", display: false },
  { cls: "text-sm", px: 14, sample: "Retire no balcão em cerca de 6 minutos.", display: false },
  { cls: "text-xs", px: 12, sample: "Preços com impostos incluídos.", display: false },
];

const menu = {
  espresso: [
    { name: "Espresso", notes: "Blend da casa. Chocolate amargo, caramelo e corpo denso.", priceCents: 700, tags: ["Blend da casa"] },
    { name: "Flat white", notes: "Dose dupla com leite vaporizado em microespuma fina.", priceCents: 1400, tags: ["Aveia disponível"] },
    { name: "Cortado", notes: "Espresso e leite em partes iguais. Curto e redondo.", priceCents: 1100 },
  ],
  filtrados: [
    { name: "Coado do dia", notes: "Sul de Minas, natural. Ameixa seca e rapadura.", priceCents: 1200, tags: ["Origem única"] },
    { name: "Cold brew", notes: "16 horas de extração a frio. Servido com gelo.", priceCents: 1500, soldOut: true },
  ],
  doces: [
    { name: "Brioche de cardamomo", notes: "Massa amanteigada, açúcar de cardamomo por cima.", priceCents: 1600, tags: ["Vegetariano"] },
    { name: "Torta de nozes", notes: "Base de biscoito, recheio de doce de leite e nozes.", priceCents: 1800 },
  ],
};

function Section({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-8">
      <Rule variant="double" className="text-ink" />
      <header className="grid gap-3 lg:grid-cols-[22rem_1fr] lg:gap-10">
        <h2 className="font-display text-3xl font-extrabold">{title}</h2>
        <p className="max-w-prose text-lg text-ink-muted">{intro}</p>
      </header>
      {children}
    </section>
  );
}

function Specimen({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-ink-muted">{name}</h3>
      {children}
    </div>
  );
}

function BrandBoard() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-[repeat(3,minmax(9rem,auto))]">
      <Tile tone="oxblood" className="col-span-2 flex flex-col justify-between gap-12 lg:row-span-2">
        <CupMark className="size-10" />
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-3xl font-extrabold uppercase sm:text-4xl xl:text-5xl">
            Um pequeno ritual antes de um grande dia
          </h1>
          <p className="max-w-md text-cream-300">
            Tokens e componentes para a marca {BRAND_NAME}, feitos para Next.js, React e Tailwind CSS.
          </p>
        </div>
      </Tile>
      <Tile tone="rose" className="flex items-end">
        <p className="font-display text-xl font-extrabold">Conversas, momentos quietos e tudo no meio.</p>
      </Tile>
      <Tile tone="sand" className="row-span-2 flex flex-col items-center justify-center gap-6 lg:row-span-3">
        <Wordmark className="rotate-180 text-6xl text-oxblood-900 [writing-mode:vertical-rl] xl:text-7xl" />
      </Tile>
      <Tile tone="olive" className="flex flex-col justify-between gap-6">
        <Rule variant="double" />
        <CupMark className="mx-auto size-16" title={`Símbolo ${BRAND_NAME}`} />
        <Rule variant="double" />
      </Tile>
      <Tile tone="cream" className="col-span-2 flex items-center justify-center gap-3 lg:col-span-1 lg:flex-col">
        <Swatch color="var(--color-rose-500)" label="Rose" />
        <Swatch color="var(--color-olive-500)" label="Olive" />
        <Swatch color="var(--color-espresso-900)" label="Espresso" />
      </Tile>
      <Tile tone="espresso" className="col-span-2 flex items-center justify-center py-10">
        <Wordmark className="text-5xl text-cream-200 sm:text-7xl" />
      </Tile>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex w-full max-w-(--container-page) flex-col gap-20 px-4 py-6 sm:px-8 sm:py-10">
      <BrandBoard />

      <Section
        title="Cor"
        intro="As cores primitivas vêm direto do quadro da marca. No produto, use os tokens semânticos: eles trocam sozinhos entre o tema claro e o escuro."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {palette.map((color) => (
            <Specimen key={color.token} name={color.name}>
              <div className="flex overflow-hidden rounded-control">
                {color.steps.map((step) => (
                  <div
                    key={step}
                    className="h-14 flex-1"
                    style={{ background: `var(--color-${color.token}-${step})` }}
                    title={`${color.token}-${step}`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="text-ink-muted">{color.role}</span>
                <code className="text-ink-muted">
                  {color.token}-{color.steps[0]}…{color.steps.at(-1)}
                </code>
              </div>
            </Specimen>
          ))}
        </div>
        <Specimen name="Tokens semânticos">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {semantic.map(([token, role]) => (
              <li key={token} className="flex items-center gap-3">
                <Swatch color={`var(--${token})`} size="sm" className="ring-1 ring-line-strong" />
                <code className="text-sm">{token}</code>
                <span className="text-sm text-ink-muted">{role}</span>
              </li>
            ))}
          </ul>
        </Specimen>
      </Section>

      <Section
        title="Tipografia"
        intro="Uma família só, a Archivo, em duas larguras. Os títulos usam a versão expandida e pesada, que ecoa o logotipo. O texto corrido usa a largura normal. A escala segue a progressão clássica de Bringhurst."
      >
        <Specimen name="Escala">
          <ul className="flex flex-col divide-y divide-line">
            {typeScale.map((t) => (
              <li key={t.cls} className="grid items-baseline gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                <code className="text-sm text-ink-muted">
                  {t.cls} · {t.px}px
                </code>
                <span className={`${t.cls} ${t.display ? "font-display font-extrabold" : ""} min-w-0 break-words`}>
                  {t.sample}
                </span>
              </li>
            ))}
          </ul>
        </Specimen>
      </Section>

      <Section
        title="Forma"
        intro="O raio acompanha a hierarquia: quanto maior o bloco, mais suave o canto. Nada tem sombra. A profundidade vem da cor, como no quadro."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["rounded-tile", "28px · blocos da página"],
            ["rounded-card", "18px · cards dentro de blocos"],
            ["rounded-control", "12px · botões e campos"],
            ["rounded-arch", "janela em arco · fotos de destaque"],
          ].map(([cls, label]) => (
            <Specimen key={cls} name={cls}>
              <div className="@container">
                <div className={`${cls} h-24 bg-surface-inverse`} />
              </div>
              <p className="text-sm text-ink-muted">{label}</p>
            </Specimen>
          ))}
        </div>
      </Section>

      <Section
        title="Componentes"
        intro="Componentes React sem dependências extras, estilizados só com os tokens. Importe de @/components/ui."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Specimen name="Button">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Fazer pedido</Button>
              <Button variant="secondary">Ver cardápio</Button>
              <Button variant="outline">Agendar retirada</Button>
              <Button variant="ghost">Cancelar</Button>
            </div>
            <Tile tone="olive" level="card">
              <Button variant="onTile">Botão sobre bloco colorido</Button>
            </Tile>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Pequeno</Button>
              <Button size="md">Médio</Button>
              <Button size="lg">Grande</Button>
              <Button disabled>Indisponível</Button>
            </div>
          </Specimen>

          <Specimen name="Badge">
            <div className="flex flex-wrap gap-2">
              <Badge>Origem única</Badge>
              <Badge tone="accent">Novo</Badge>
              <Badge tone="highlight">Popular</Badge>
              <Badge tone="success">Pronto para retirar</Badge>
              <Badge tone="warning">Últimas unidades</Badge>
              <Badge tone="danger">Esgotado hoje</Badge>
            </div>
          </Specimen>

          <Specimen name="Field · Input · Select · Textarea">
            <form className="flex flex-col gap-5">
              <Field label="Nome para chamar no balcão" hint="Só o primeiro nome já basta.">
                <Input placeholder="Ana" autoComplete="given-name" />
              </Field>
              <Field label="Leite">
                <Select defaultValue="integral">
                  <option value="integral">Integral</option>
                  <option value="aveia">Aveia</option>
                  <option value="sem-lactose">Sem lactose</option>
                </Select>
              </Field>
              <Field label="Celular" error="Digite o DDD e o número, por exemplo 11 91234-5678.">
                <Input type="tel" defaultValue="91234" inputMode="tel" />
              </Field>
              <Field label="Observações">
                <Textarea placeholder="Menos açúcar, mais quente…" />
              </Field>
            </form>
          </Specimen>

          <div className="flex flex-col gap-4">
            <Specimen name="Choice (checkbox e radio)">
              <fieldset className="flex flex-col gap-3">
                <legend className="mb-2 font-semibold">Tamanho</legend>
                <Choice type="radio" name="size" label="Pequeno" description="180 ml" defaultChecked />
                <Choice type="radio" name="size" label="Grande" description="300 ml · + R$ 3,00" />
              </fieldset>
              <Rule />
              <Choice label="Para viagem" description="Copo de papel e tampa compostável." />
            </Specimen>

            <Specimen name="QuantityStepper">
              <QuantityStepper label="Quantidade de flat white" defaultValue={1} min={1} />
            </Specimen>

            <Specimen name="Notice">
              <Notice tone="success" title="Pedido enviado">
                Avisamos aqui quando estiver pronto para retirar.
              </Notice>
              <Notice tone="warning" title="A cozinha fecha às 15h">
                Doces continuam disponíveis até o fim do dia.
              </Notice>
              <Notice tone="danger" title="O pagamento não foi aprovado">
                Confira os dados do cartão ou escolha Pix.
              </Notice>
            </Specimen>
          </div>
        </div>

        <Specimen name="Tabs · ProductCard">
          <Tabs
            label="Categorias do cardápio"
            items={Object.entries(menu).map(([id, items]) => ({
              id,
              label: id === "espresso" ? "Espresso" : id === "filtrados" ? "Filtrados" : "Doces",
              content: (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <ProductCard
                      key={item.name}
                      {...item}
                      action={<Button size="sm" variant="outline">Adicionar</Button>}
                    />
                  ))}
                </div>
              ),
            }))}
          />
        </Specimen>

        <Specimen name="Tile">
          <div className="grid gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {(["surface", "cream", "sun", "olive", "rose", "sand", "espresso", "oxblood"] as const).map((tone) => (
              <Tile key={tone} tone={tone} level="card" className="flex h-28 items-end">
                <code className="text-sm">{tone}</code>
              </Tile>
            ))}
          </div>
        </Specimen>
      </Section>
    </main>
  );
}
