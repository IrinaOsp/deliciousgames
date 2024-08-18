import Image from "next/image";
import PageHeading from "../UI/pageHeading/pageHeading";
import MainButton from "../UI/button/mainButton";
import { getDictionary } from "@/dictionaries";
import { Routes } from "@/data/data";

export default async function SellOffer({ locale }: { locale: string }) {
  const dict = await getDictionary(locale, "sellOffer");

  return (
    <section className="w-full bg-sky-900 px-5 py-10">
      <div className="max-w-7xl w-full mx-auto flex max-md:flex-wrap gap-5 justify-center md:justify-start items-center">
        <Image
          src={"/icons/trophy.svg"}
          alt="Sell Offer"
          width={78}
          height={70}
          className="block md:ml-8 scale-x-110 scale-y-125"
        />
        <div className="md:mr-10 max-md:text-center">
          <PageHeading
            title={dict["question"]}
            headingLvl={3}
            textTransform="none"
            styles={{
              fontSize: "32px",
              color: "white",
              lineHeight: "35px",
              marginBottom: "15px",
            }}
          />
          <p className="text-[15px] text-blue-100 xl:w-max">{dict["text"]}</p>
        </div>
        <div className="scale-150 md:mx-8">
          <MainButton
            link={`/${Routes.CONTACT}`}
            text={`${dict["button"]}!`}
            styles={{ padding: "13px" }}
          />
        </div>
      </div>
    </section>
  );
}
