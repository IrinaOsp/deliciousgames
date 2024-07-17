import { GameCardInfo } from "@/types/types";

export const titleToPath: (title: string) => string = (title) => {
  return title
    .trim()
    .toLowerCase()
    .replace(/ /g, "-")
    .split(/[^a-zA-Z0-9-]/)[0];
};

export const pathToTitle: (path: string) => string = (path) => {
  return path.trim().toLowerCase().replace(/-/g, " ");
};

export const trimText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const sortData = (data: GameCardInfo[], sortOption: string) => {
  switch (sortOption) {
    case "Name (A - Z)":
      return data.sort((a, b) => a.title.localeCompare(b.title));
    case "Name (Z - A)":
      return data.sort((a, b) => b.title.localeCompare(a.title));
    case "Price (Low > High)":
      return data.sort((a, b) => a.price - b.price);
    case "Price (High < Low)":
      return data.sort((a, b) => b.price - a.price);
    case "Rating (Highest)":
      return data.sort((a, b) => (a.rating || 0) - (b.rating || 0));
    case "Rating (Lowest)":
      return data.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    default:
      return data;
  }
};
