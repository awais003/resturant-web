import { MenuItem } from "./MenuItem";

export const MenuCategory = ({ section, items }) => (
  <section id={section.id} className="scroll-mt-28">
    <div className="flex items-center gap-4">
      <h2 className="font-display text-3xl md:text-4xl">{section.label}</h2>
      <span className="h-px flex-1 bg-white/10" />
    </div>
    <div className="mt-8 grid gap-x-14 gap-y-9 lg:grid-cols-2">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  </section>
);
