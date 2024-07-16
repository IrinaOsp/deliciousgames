export type GameCardInfo = {
  view: "grid" | "list";
  title: string;
  image: string;
  description: string;
  price: number;
  tax: number;
  label?: string;
  rating?: number;
};
