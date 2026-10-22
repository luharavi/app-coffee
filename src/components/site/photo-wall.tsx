import { Photo, type PhotoTone } from "./photo";

export type WallPhoto = {
  file: string;
  alt: string;
  caption?: string;
  ratio?: "3/4" | "4/5" | "1/1" | "4/3" | "2/3";
  tone?: PhotoTone;
};

/** Pinterest-style mural: CSS columns, so mixed aspect ratios pack naturally. */
export function PhotoWall({ photos }: { photos: WallPhoto[] }) {
  return (
    <div className="columns-2 gap-3 sm:gap-4 md:columns-3">
      {photos.map((photo) => (
        <Photo
          key={photo.file}
          {...photo}
          sizes="(min-width: 768px) 33vw, 50vw"
          className="mb-3 break-inside-avoid sm:mb-4"
        />
      ))}
    </div>
  );
}
