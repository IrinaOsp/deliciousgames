import { ResponseCatalogItem } from "@/types/types";

export const pathToTitle: (path: string) => string = (path) => {
  return path.trim().toLowerCase().replace(/-/g, " ");
};

export const trimText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const sortData = (data: ResponseCatalogItem[], sortOption: string) => {
  console.log(data, sortOption);
  switch (sortOption) {
    case "Name (A - Z)":
      return data.sort((a, b) =>
        a.attributes.title
          .toLocaleLowerCase()
          .localeCompare(b.attributes.title.toLocaleLowerCase())
      );
    case "Name (Z - A)":
      return data.sort((a, b) =>
        b.attributes.title
          .toLocaleLowerCase()
          .localeCompare(a.attributes.title.toLocaleLowerCase())
      );
    case "Price (Low > High)":
      return data.sort(
        (a, b) => a.attributes.price[0].price - b.attributes.price[0].price
      );
    case "Price (High < Low)":
      return data.sort(
        (a, b) => b.attributes.price[0].price - a.attributes.price[0].price
      );
    default:
      return data;
  }
};
