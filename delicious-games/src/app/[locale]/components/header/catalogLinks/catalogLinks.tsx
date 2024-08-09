import CatalogLink from "../catalogLink/catalogLink";
import { useProducts } from "@/hooks/useProducts";

export default function CatalogLinks() {
  const products = useProducts("main");

  return (
    <div className="w-full transition-transform">
      <ul className="pl-10">
        {products &&
          products.map(({ title, path, img }) => (
            <CatalogLink key={title} title={title} link={path} img={img} />
          ))}
      </ul>
    </div>
  );
}
