import Image from "next/image";
import PageHeading from "../UI/pageHeading/pageHeading";
import Link from "next/link";
import MainButton from "../UI/button/mainButton";

export default function SellOffer() {
  return (
    <section className="w-full bg-sky-900 px-5 py-10">
      <div className="max-w-7xl w-full mx-auto flex gap-5 justify-start items-center">
        <Image
          src={"/icons/trophy.svg"}
          alt="Sell Offer"
          width={78}
          height={70}
          className="block ml-8 scale-x-110 scale-y-125"
        />
        <div>
          <PageHeading
            title="Do you want to sell our products?"
            headingLvl={3}
            textTransform="none"
            styles={{
              fontSize: "32px",
              color: "white",
              lineHeight: "35px",
              marginBottom: "15px",
            }}
          />
          <p className="text-[15px] text-blue-100 w-max">
            UNDERWATER CITIES are on the 60th place of Boardgamegeek game rank
            and on the 40th place of Strategy boardgames.
          </p>
        </div>
        <div className="ml-5 scale-150 w-[30%]">
          <MainButton
            link="/contact"
            text="Contact us!"
            styles={{ padding: "13px" }}
          />
        </div>
      </div>
    </section>
  );
}
