import { PARTNERS, RETAILERS, SHOPS } from "@/data/retailersData";
import RetailerSection from "./retailerSection/retailerSection";
import PageHeading from "../components/UI/pageHeading/pageHeading";

export default function Retailers() {
  return (
    <div className="p-5 mb-16 max-w-7xl mx-auto">
      <PageHeading title={"Retailers"} />
      <div className="flex flex-wrap gap-2.5">
        <div className="pl-5 flex-1 border-l-[1px] border-zinc-300">
          <RetailerSection heading="Retailers" section={RETAILERS} />
          <p className="mb-[15px] text-[15px]">
            If you want to sell our games, call to national distributors or
            write directly to us on our email&nbsp;
            <a
              href="mailto:info@deliciousgames.org"
              className="underline text-sky-900 hover:text-pink-600"
            >
              info@deliciousgames.org
            </a>
          </p>
          <RetailerSection heading="Partners" section={PARTNERS} />
        </div>
        <div className="pl-5 flex-1 border-l-[1px] border-zinc-300">
          <RetailerSection heading="Shops" section={SHOPS} />
        </div>
      </div>
    </div>
  );
}
