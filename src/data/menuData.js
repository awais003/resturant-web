export const menuCategories = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Course" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

export const fullMenuSections = [
  { id: "starters", label: "Starters" },
  { id: "soups", label: "Soups & Salads" },
  { id: "mains", label: "Main Courses" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

const img = {
  burrata:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  seabass:
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  risotto:
    "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  fondant:
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ribeye:
    "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  soup:
    "https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  tart:
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cocktail:
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  oysters:
    "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  salad:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  duck:
    "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  pasta:
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  gnocchi:
    "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  sorbet:
    "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  wine:
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const menuItems = [
  // Starters
  {
    id: "truffle-burrata",
    category: "starters",
    name: "Truffle Burrata",
    description: "Whipped burrata, heirloom tomato, basil oil",
    price: "$18",
    image: img.burrata,
  },
  {
    id: "oysters",
    category: "starters",
    name: "Chilled Oysters",
    description: "Mignonette, lemon, cracked black pepper",
    price: "$22",
    image: img.oysters,
  },
  {
    id: "beef-tartare",
    category: "starters",
    name: "Beef Tartare",
    description: "Hand-cut tenderloin, capers, cured egg yolk",
    price: "$19",
    image: img.duck,
  },
  // Soups & Salads
  {
    id: "butternut-soup",
    category: "soups",
    name: "Roasted Butternut Soup",
    description: "Crispy sage, brown butter, toasted seeds",
    price: "$12",
    image: img.soup,
  },
  {
    id: "garden-salad",
    category: "soups",
    name: "Heirloom Garden Salad",
    description: "Burrata, stone fruit, aged balsamic, mint",
    price: "$15",
    image: img.salad,
  },
  // Mains
  {
    id: "herb-crusted-seabass",
    category: "mains",
    name: "Herb-Crusted Sea Bass",
    description: "Seasonal vegetables, lemon beurre blanc",
    price: "$34",
    image: img.seabass,
  },
  {
    id: "charcoal-ribeye",
    category: "mains",
    name: "Charcoal-Grilled Ribeye",
    description: "28-day dry-aged beef, roasted garlic, rosemary jus",
    price: "$52",
    image: img.ribeye,
  },
  {
    id: "duck-breast",
    category: "mains",
    name: "Seared Duck Breast",
    description: "Cherry gastrique, parsnip purée, watercress",
    price: "$38",
    image: img.duck,
  },
  // Vegetarian
  {
    id: "wild-mushroom-risotto",
    category: "vegetarian",
    name: "Wild Mushroom Risotto",
    description: "Parmesan, forest mushrooms, truffle oil",
    price: "$28",
    image: img.risotto,
  },
  {
    id: "truffle-gnocchi",
    category: "vegetarian",
    name: "Truffle Gnocchi",
    description: "Hand-rolled gnocchi, sage brown butter, pecorino",
    price: "$26",
    image: img.gnocchi,
  },
  {
    id: "squash-pasta",
    category: "vegetarian",
    name: "Roasted Squash Pasta",
    description: "Fresh tagliatelle, browned butter, hazelnut",
    price: "$24",
    image: img.pasta,
  },
  // Desserts
  {
    id: "dark-chocolate-fondant",
    category: "desserts",
    name: "Dark Chocolate Fondant",
    description: "Vanilla crème anglaise, sea salt",
    price: "$14",
    image: img.fondant,
  },
  {
    id: "poached-pear-tart",
    category: "desserts",
    name: "Poached Pear Tart",
    description: "Almond frangipane, vanilla ice cream",
    price: "$14",
    image: img.tart,
  },
  {
    id: "citrus-sorbet",
    category: "desserts",
    name: "Citrus Sorbet",
    description: "Seasonal citrus, mint, meringue shard",
    price: "$11",
    image: img.sorbet,
  },
  // Drinks
  {
    id: "signature-cocktail",
    category: "drinks",
    name: "Lumière Gold Spritz",
    description: "Elderflower, citrus, sparkling wine",
    price: "$16",
    image: img.cocktail,
  },
  {
    id: "house-wine",
    category: "drinks",
    name: "Sommelier's Red",
    description: "Hand-selected house pour, glass or bottle",
    price: "$14",
    image: img.wine,
  },
];
