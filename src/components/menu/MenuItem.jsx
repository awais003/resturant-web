import Image from "next/image";

export const MenuItem = ({ item }) => (
  <article className="group flex items-start gap-5">
    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg md:h-24 md:w-24">
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="96px"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="min-w-0 flex-1">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-lg text-[var(--foreground)] md:text-xl">
          {item.name}
        </h3>
        <span
          aria-hidden="true"
          className="mx-1 hidden h-px flex-1 self-center bg-white/15 sm:block"
        />
        <span className="shrink-0 font-medium text-[var(--gold)]">
          {item.price}
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--foreground)]/60">
        {item.description}
      </p>
    </div>
  </article>
);
