"use client";

import GameBox from "@/app/components/gameBox/gameBox";
import PageHeading from "@/app/components/UI/pageHeading/pageHeading";
import { useProducts } from "@/hooks/useProducts";

export default function RelatedProducts({
  productPaths,
}: {
  productPaths: string[];
}) {
  const products = useProducts("box");
  const filteredProducts = products?.filter((product) =>
    productPaths.includes(product.path)
  );
  if (!products || !filteredProducts?.length) return null;

  return (
    <div className="">
      <PageHeading
        title="Related products"
        headingLvl={3}
        styles={{ fontSize: "16px" }}
      />
      {filteredProducts.map((product) => (
        <GameBox key={product.path} el={product} />
      ))}
    </div>
  );
}
