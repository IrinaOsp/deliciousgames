"use client";

import { useEffect, useState } from "react";
import qs from "qs";
import { getStrapiURL } from "@/utils/strapi";
import { GetProductsResponse, Product } from "@/types/types";

export const useProducts = (
  imgType: "box" | "main" | "none",
  locale?: string
) => {
  const [products, setProducts] = useState<Product[] | null>(null);

  const productsQuery =
    imgType === "none"
      ? ""
      : qs.stringify(
          {
            populate: {
              images: {
                populate: {
                  [imgType]: {
                    fields: ["alternativeText", "url"],
                  },
                },
              },
            },
            locale,
          },
          { encodeValuesOnly: true }
        );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = getStrapiURL();
        const url = new URL("/api/games", baseUrl);
        url.search = productsQuery;
        const res: GetProductsResponse = await fetch(url.href).then((res) =>
          res.json()
        );
        if (res.data.length) {
          const products: Product[] = res.data.map((el) => ({
            img:
              imgType === "none"
                ? ""
                : (el.attributes.images as any)[imgType].data.attributes.url,
            title: el.attributes.title,
            path: el.attributes.path,
          }));
          setProducts(products);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (!products) {
      fetchProducts();
    }
  }, [products]);

  return products;
};
