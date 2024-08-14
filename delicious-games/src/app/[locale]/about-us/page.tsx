import { getDictionary } from "@/dictionaries";
import Blockquote from "../components/UI/blockquote/blockquote";
import PageHeading from "../components/UI/pageHeading/pageHeading";

export default async function AboutUs({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(locale, "aboutUs");

  return (
    <section className="max-w-7xl mx-auto p-5">
      <PageHeading title={dict["heading"]} />
      <p className="mb-[15px] text-[15px]">
        <b>Delicious Games </b>
        {dict["description"]}
      </p>
      <br />
      <Blockquote text={dict["blockquote"]} />
    </section>
  );
}
