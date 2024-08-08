import CatalogLink from "../catalogLink/catalogLink";

const products = [
  {
    title: "Woodcraft",
    link: "/woodcraft",
    img: "/imgs/woodcraft.png",
  },
  {
    title: "Evacuation",
    link: "/evacuation",
    img: "/imgs/woodcraft.png",
  },
];

export default function CatalogLinks() {
  return (
    <div className="w-full transition-transform">
      <ul className="pl-10">
        {products.map(({ title, link, img }) => (
          <CatalogLink key={title} title={title} link={link} img={img} />
        ))}
      </ul>
    </div>
  );
}
