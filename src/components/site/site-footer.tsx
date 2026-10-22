import { CupMark } from "@/components/brand/cup-mark";
import { Wordmark } from "@/components/brand/wordmark";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-olive-700 text-cream-100 [--focus:var(--color-cream-100)]">
      <div className="mx-auto grid w-full max-w-(--container-page) gap-10 px-4 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Wordmark className="text-5xl" />
          <p className="max-w-xs text-cream-200">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Onde estamos</h2>
          <address className="not-italic text-cream-200">
            {site.address.street}
            <br />
            {site.address.district}, {site.address.city}
          </address>
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring w-fit rounded-control font-medium underline underline-offset-4"
          >
            Como chegar
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Horários</h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-cream-200">
            {site.hours.map((h) => (
              <div key={h.days} className="contents">
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-2 w-fit rounded-control font-medium underline underline-offset-4"
          >
            @{site.instagram} no Instagram
          </a>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-(--container-page) items-center gap-3 px-4 pb-8 text-sm text-cream-300 sm:px-8">
        <CupMark className="size-5" />
        <span>Os gatos moram aqui. Trate a casa deles com carinho.</span>
      </div>
    </footer>
  );
}
