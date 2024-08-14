import { PARTNERS, RETAILERS, SHOPS } from "@/data/retailersData";
import RetailerSection from "./retailerSection/retailerSection";
import PageHeading from "../components/UI/pageHeading/pageHeading";
import { getDictionary } from "@/dictionaries";

export default async function Retailers({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(locale, "retailers");

  return (
    <div className="p-5 mb-16 max-w-7xl mx-auto">
      <PageHeading title={dict["heading"]} />
      <div className="flex flex-wrap gap-2.5">
        <div className="pl-5 flex-1 border-l-[1px] border-zinc-300">
          <RetailerSection
            heading={dict["retailers"]}
            section={RETAILERS}
            locale={locale}
          />
          <p className="mb-[15px] text-[15px]">
            {dict["sellOffer"]}&nbsp;
            <a
              href="mailto:info@deliciousgames.org"
              className="underline text-sky-900 hover:text-pink-600"
            >
              info@deliciousgames.org
            </a>
          </p>
          <RetailerSection
            heading={dict["partners"]}
            section={PARTNERS}
            locale={locale}
          />
        </div>
        <div className="pl-5 flex-1 border-l-[1px] border-zinc-300">
          <RetailerSection
            heading={dict["shops"]}
            section={SHOPS}
            locale={locale}
          />
        </div>
      </div>
    </div>
  );
}
