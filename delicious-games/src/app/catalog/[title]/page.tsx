import Image from "next/image";
import PageHeading from "../../components/UI/pageHeading/pageHeading";
import TechnicalInfo from "./components/techInfo/techInfo";
import GameComponents from "./components/gameComponents/gameComponents";
import RulesSection from "./components/rules/rulesSection";
import SellOffer from "@/app/components/sellOffer/sellOffer";

async function getData() {
  const res = await fetch("https://your-api-endpoint.com/games");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const description = `In Woodcraft, players take turns choosing one of seven actions, which become more valuable the longer they remain unchosen. These actions are used to manipulate dice representing wood that can be cut, glued, purchased, or even grown. Manage your workshop, take care of your tools, and work with your cheerful helpers to complete the woodworking projects that will build your reputation as the best woodcrafter in the Forest!`;

export default async function DetailedPage({
  params,
}: {
  params: { title: string };
}) {
  // const data = await getData();
  const data = {
    title: "Woodcraft",
    description: description,
    players: "1-4",
    playingTime: "60-150",
    minAge: 14,
    image: `/imgs/Woodcraft box - 3D visualisation-350x350h.png`,
    backgroundImage: "/imgs/woodcraft_Cover_Background_02-1920x1511h.jpg",
    componentsImage: "/imgs/Resafa Game Vis 5-1500x791.png",
    rules: [
      { name: "Rules (english)", link: "some link" },
      { name: "Rules (czech)", link: "some link" },
      { name: "Help sheet", link: "some link" },
      { name: "Help sheet (Czech)", link: "some link" },
      {
        name: "Roll and Write Woodcraft components - free fo download EN PnP]",
        link: "some link",
      },
    ],
  };

  return (
    <div
      className="size-full bg-no-repeat bg-fixed bg-slate-600"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto p-5 xl:px-0">
        <section className="mb-11">
          <div className="flex max-sm:flex-col">
            <div className="sm:w-1/2 h-auto">
              <Image
                src={data.image}
                alt={data.title}
                width={640}
                height={640}
                className="block w-full h-auto"
              />
            </div>
            <div className="sm:w-1/2 ml-4">
              <PageHeading
                title={data.title}
                styles={{ color: "white", fontSize: "40px" }}
              />
              <p className="my-5 text-[15px] text-white [text-shadow:_2px_2px_5px_rgb(9_9_9)]">
                {data.description}
              </p>
              <TechnicalInfo
                players={data.players}
                playingTime={data.playingTime}
                minAge={data.minAge}
              />
            </div>
          </div>
        </section>
        {data.componentsImage && <GameComponents img={data.componentsImage} />}
        {data.rules && <RulesSection rules={data.rules} />}
      </div>
      <SellOffer />
    </div>
  );
}
