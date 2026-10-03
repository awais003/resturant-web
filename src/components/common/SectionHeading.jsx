export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="font-display text-balance text-3xl leading-[1.05] md:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="max-w-2xl text-pretty text-base text-[var(--foreground)]/70 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
