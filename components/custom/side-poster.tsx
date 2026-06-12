import { SidePoster } from "@/services/side-posters-config";
import { cn } from "@/lib/utils";

type Props = {
  poster: SidePoster;
  className?: string;
};

export default function SidePosterComponent({ poster, className }: Props) {
  const content = (
    <div className="relative h-full w-full overflow-hidden rounded-md bg-zinc-900 shadow-sm">
      <img
        src={poster.imageSrc}
        alt={poster.alt ?? "Poster"}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent p-10 text-left text-white">
        {poster.label && (
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-300">
            {poster.label}
          </p>
        )}
        {poster.title && (
          <h3 className="mt-1 text-sm font-semibold">{poster.title}</h3>
        )}
        {poster.description && (
          <p className="mt-1 text-xs text-zinc-200">{poster.description}</p>
        )}
      </div>
    </div>
  );

  return (
    <aside
      className={cn("h-full w-full shrink-0", className)}
      aria-label="Poster"
    >
      {poster.href ? (
        <a href={poster.href} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
          {content}
        </a>
      ) : (
        content
      )}
    </aside>
  );
}