"use client";

import { useState, type FormEvent } from "react";
import { Button, Field, Input, Notice, QuantityStepper, Select, Textarea, formatPrice } from "@/components/ui";
import { site, whatsappUrl } from "@/content/site";

const weekdayOf: Record<string, { day: number; name: string }> = {
  qui: { day: 4, name: "uma quinta" },
  sab: { day: 6, name: "um sábado" },
  dom: { day: 0, name: "um domingo" },
};

const weekdayNames = ["num domingo", "numa segunda", "numa terça", "numa quarta", "numa quinta", "numa sexta", "num sábado"];

type Errors = Partial<Record<"name" | "date", string>>;

/**
 * Art Café reservation. No backend: builds a pre-filled WhatsApp message and
 * opens it; the café confirms the seat from there.
 */
export function ReservationForm() {
  const [people, setPeople] = useState(1);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const sessionId = String(data.get("session"));
    const date = String(data.get("date") ?? "");
    const notes = String(data.get("notes") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Digite seu nome para a reserva.";
    if (!date) {
      next.date = "Escolha a data da tarde de pintura.";
    } else {
      const [y, m, d] = date.split("-").map(Number);
      const weekday = new Date(y, m - 1, d).getDay();
      const expected = weekdayOf[sessionId];
      if (weekday !== expected.day) {
        next.date = `Essa data cai ${weekdayNames[weekday]}. Escolha ${expected.name} ou troque a sessão.`;
      }
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    const session = site.artCafe.sessions.find((s) => s.id === sessionId)!;
    const [y, m, d] = date.split("-");
    const message = [
      "Olá! Quero reservar o Art Café.",
      `Nome: ${name}`,
      `Data: ${d}/${m}/${y} (${session.label})`,
      `Pessoas: ${people}`,
      notes ? `Observações: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <Field label="Seu nome" error={errors.name}>
        <Input name="name" autoComplete="name" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Sessão">
          <Select name="session" defaultValue={site.artCafe.sessions[1].id}>
            {site.artCafe.sessions.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Data" error={errors.date}>
          <Input name="date" type="date" />
        </Field>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold">Pessoas</span>
        <div className="flex flex-wrap items-center gap-4">
          <QuantityStepper label="Número de pessoas" value={people} onChange={setPeople} min={1} max={4} />
          <span className="text-sm text-ink-muted">
            Total: <span className="font-semibold text-ink">{formatPrice(site.artCafe.priceCents * people)}</span>.
            Até 4 pessoas por reserva.
          </span>
        </div>
      </div>
      <Field label="Observações" hint="Aniversário, restrição alimentar, primeira vez pintando…">
        <Textarea name="notes" />
      </Field>
      <Button type="submit" size="lg" className="self-start">
        Reservar pelo WhatsApp
      </Button>
      {opened ? (
        <Notice tone="success" title="Abrimos o WhatsApp com sua reserva">
          Envie a mensagem para pedir a vaga. A confirmação chega pela mesma conversa.
        </Notice>
      ) : null}
    </form>
  );
}
