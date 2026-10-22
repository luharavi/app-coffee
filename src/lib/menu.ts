import { readFileSync } from "node:fs";
import path from "node:path";

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  priceCents: number;
  popular: boolean;
};

/** Splits one CSV line, honouring double-quoted fields with commas and "" escapes. */
function parseLine(line: string) {
  const fields: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (quoted && line[i + 1] === '"') {
        field += '"';
        i++;
      } else {
        quoted = !quoted;
      }
    } else if (ch === "," && !quoted) {
      fields.push(field);
      field = "";
    } else {
      field += ch;
    }
  }
  fields.push(field);
  return fields;
}

/**
 * Reads menu/itens.csv. Synchronous on purpose: with Cache Components a
 * sync read completes during prerender, so the menu ships in the static shell.
 */
export function getMenu(): MenuItem[] {
  const csv = readFileSync(path.join(process.cwd(), "menu", "itens.csv"), "utf8");
  const [header, ...rows] = csv.trim().split(/\r?\n/);
  const columns = parseLine(header);
  const col = (name: string) => {
    const index = columns.indexOf(name);
    if (index === -1) throw new Error(`menu/itens.csv: coluna "${name}" não encontrada`);
    return index;
  };
  const c = {
    id: col("id"),
    name: col("nome"),
    category: col("categoria"),
    description: col("descricao"),
    price: col("preco"),
    popular: col("popular"),
  };

  return rows.map((row, i) => {
    const f = parseLine(row);
    const price = Number(f[c.price]);
    if (!Number.isFinite(price)) {
      throw new Error(`menu/itens.csv linha ${i + 2}: preço inválido "${f[c.price]}"`);
    }
    return {
      id: f[c.id],
      name: f[c.name],
      category: f[c.category],
      description: f[c.description],
      priceCents: Math.round(price * 100),
      popular: f[c.popular] === "true",
    };
  });
}

/** Groups items by category, keeping the order categories first appear in the CSV. */
export function groupByCategory(items: MenuItem[]) {
  const groups = new Map<string, MenuItem[]>();
  for (const item of items) {
    groups.set(item.category, [...(groups.get(item.category) ?? []), item]);
  }
  return [...groups].map(([category, list]) => ({ category, items: list }));
}
