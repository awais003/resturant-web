"use client";

const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold tracking-wide text-[#0b0b0b] shadow-sm transition-all duration-300 hover:bg-[var(--gold-600)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] active:scale-[0.995]",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--foreground)] backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 active:scale-[0.995]",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-[var(--foreground)]/90 transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",
};

export const Button = ({
  variant = "primary",
  children,
  className = "",
  as: Component = "button",
  ...props
}) => {
  const classes = `${variants[variant]} ${className}`.trim();
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
