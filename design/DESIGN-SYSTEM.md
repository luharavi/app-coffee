# Sistema de design

Baseado no quadro de marca em `design/ref.webp`. Documentação viva em **/design-system** (`npm run dev` → http://localhost:3000/design-system).

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 (configuração em CSS, sem `tailwind.config`) · TypeScript. Sem bibliotecas de UI extras.

## Tokens — `src/app/globals.css`

| Camada | O que é | Exemplo de uso |
| --- | --- | --- |
| Primitivos (`@theme static`) | Cores da marca em escalas | `bg-oxblood-900`, `text-olive-500` |
| Semânticos (`:root`) | Papéis que mudam no tema escuro | `bg-surface`, `text-ink-muted`, `bg-accent` |
| Tipografia | Archivo, escala de Bringhurst | `font-display font-semibold text-4xl` |
| Forma | Raio por hierarquia; arco para fotos de destaque | `rounded-tile`, `rounded-card`, `rounded-control`, `rounded-arch` (precisa de um pai `@container`) |
| Movimento | Um único momento: o sol nascendo no herói | `animate-sunrise motion-reduce:animate-none` |

Regras:
- No produto, use tokens **semânticos**. Primitivos só em blocos de marca (`Tile`).
- Sun Day: ações principais em olive (`accent`); `highlight` (sun) só no selo Popular e em destaques; oxblood e espresso para texto, detalhes e erro.
- Títulos: `font-display font-semibold` (tom leve). `font-black` só no `Wordmark`.
- Sobre `Tile` colorido, use `Button variant="onTile"`.
- Sem sombras: profundidade vem da cor.
- Tema escuro segue o sistema; force com `data-theme="light"` ou `"dark"` no `<html>`.
- Foco: use a utilidade `focus-ring` em todo elemento interativo.

## Componentes — `@/components/ui`

`Button` / `buttonStyles` (para `Link`) · `Badge` · `Tile` · `Field` + `Input` / `Select` / `Textarea` · `Choice` (checkbox/radio) · `QuantityStepper`* · `Tabs`* · `ProductCard` · `Price` (BRL, em centavos) · `Notice` · `Rule` · `Swatch`

Marca — `@/components/brand`: `Wordmark`, `CupMark`.

Site — `@/components/site`: `Photo` (lê `public/fotos/<arquivo>`; sem o arquivo, mostra um espaço reservado com a legenda) · `PhotoWall` (mural estilo Pinterest) · `SiteHeader`* · `SiteFooter` · `ReservationForm`* (monta a mensagem e abre o WhatsApp).

Conteúdo — `src/content/site.ts` (endereço, horários, Art Café, gatos) e `menu/itens.csv` (lido por `src/lib/menu.ts`).

\* Client Components (`"use client"`). Os demais são Server Components.

## Pendências

- `Wordmark` é um substituto tipográfico. Troque pelo SVG oficial do logotipo quando existir; o nome está em `BRAND_NAME`.
- Valores `TODO` em `src/content/site.ts`: endereço, WhatsApp, Instagram, horários, preço do Art Café e os gatos.
- Fotos: coloque os arquivos em `public/fotos/` com os nomes indicados nos espaços reservados.
