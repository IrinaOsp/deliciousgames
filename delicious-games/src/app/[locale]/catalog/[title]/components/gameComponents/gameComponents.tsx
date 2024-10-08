import PageHeading from "@/app/[locale]/components/UI/pageHeading/pageHeading";
import { StrapiImage } from "@/app/[locale]/components/UI/StrapiImage/StrapiImage";

export default function GameComponents({
  img,
  locale,
}: {
  img: string;
  locale: string;
}) {
  return (
    <section>
      <PageHeading
        title={locale === "cs" ? "Obsah krabice:" : "Components:"}
        headingLvl={3}
        styles={{ fontSize: "14px", color: "white" }}
      />
      <div className="w-full h-auto">
        <StrapiImage
          src={img}
          alt="Components image"
          width={1280}
          height={675}
          className="block w-full h-auto"
        />
      </div>
    </section>
  );
}
