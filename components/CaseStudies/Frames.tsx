import Image, { StaticImageData } from "next/image";
import { cn } from "@/utilities/ui";

type Src = string | StaticImageData;

/** Desktop screenshot inside a minimal browser window. */
export function BrowserFrame({
  src,
  alt,
  url,
  priority,
  className,
  sizes = "(max-width: 1024px) 100vw, 60vw",
}: {
  src: Src;
  alt: string;
  url?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_60px_-20px_rgba(16,16,20,0.25)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        {url && (
          <span className="ml-3 hidden flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-xs text-zinc-500 ring-1 ring-zinc-200 sm:block">
            {url.replace(/^https?:\/\//, "")}
          </span>
        )}
      </div>
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </figure>
  );
}

/** Mobile screenshot inside a modern phone bezel. */
export function PhoneFrame({
  src,
  alt,
  priority,
  className,
}: {
  src: Src;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative w-full max-w-[260px] rounded-[2.4rem] bg-ink p-2.5 shadow-[0_30px_60px_-20px_rgba(16,16,20,0.45)] ring-1 ring-black/10",
        className
      )}
    >
      <span
        className="absolute left-1/2 top-4 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-[1.9rem] bg-white">
        <Image
          src={src}
          alt={alt}
          width={540}
          height={1080}
          sizes="260px"
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    </figure>
  );
}
