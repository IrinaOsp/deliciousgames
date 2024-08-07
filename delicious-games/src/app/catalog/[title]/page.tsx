import PageHeading from "../../components/UI/pageHeading/pageHeading";
import Specification from "./components/specification/specification";
import GameComponents from "./components/gameComponents/gameComponents";
import RulesSection from "./components/rules/rulesSection";
import SellOffer from "@/app/components/sellOffer/sellOffer";
import { getStrapiMedia, getStrapiURL } from "@/utils/strapi";
import qs from "qs";
import { StrapiImage } from "@/app/components/UI/StrapiImage/StrapiImage";
import NotFoundPage from "@/app/not-found";
import TechInfo from "./components/techInfo/techInfo";
import ImagesSlider from "./components/imgsSlider/imgsSlider";

async function getData(path: string) {
  const gameQuery = qs.stringify(
    {
      filters: {
        path: {
          $eqi: path,
        },
      },
      fields: ["title", "description"],
      populate: {
        specification: "*",
        techInfo: "*",
        images: {
          populate: {
            box: {
              fields: ["alternativeText", "url"],
            },
            background: {
              fields: "url",
            },
            components: {
              fields: "url",
            },
            sliderImages: {
              fields: "*",
            },
          },
        },
        videos: "*",
        rules: {
          fields: ["name", "document", "isBonus"],
          populate: {
            document: {
              fields: "url",
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  try {
    const baseUrl = getStrapiURL();
    // console.log(baseUrl);
    const url = new URL("/api/games", baseUrl);
    url.search = gameQuery;
    // console.log(url.href);
    const res = await fetch(url.href).then((res) => res.json());
    return res;
  } catch (error) {
    console.error(error);
  }
}

export default async function DetailedPage({
  params,
}: {
  params: { title: string };
}) {
  const res = await getData(params.title);
  // console.log(res);
  if (!res || res.data.length === 0) return <NotFoundPage />;
  const data = res.data[0].attributes;
  // console.log(data);

  return (
    <div className={`relative size-full`}>
      <div
        className={`absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-fixed ${
          data.images.background.data.attributes.url ? "" : "bg-slate-600"
        }`}
        style={{
          backgroundImage: data.images.background.data.attributes.url
            ? `url(${getStrapiMedia(
                data.images.background.data.attributes.url
              )})`
            : "none",
          filter: "brightness(50%)",
          zIndex: -1,
        }}
      ></div>
      <div className="max-w-7xl mx-auto p-5 xl:px-0 brightness-100">
        <section className="mb-11">
          <div className="flex max-sm:flex-col">
            <div className="sm:w-1/2 h-auto">
              <StrapiImage
                src={data.images.box.data.attributes.url}
                alt={
                  data.images.box.data.attributes.alternativeText ||
                  "Game box image "
                }
                width={640}
                height={640}
                className="block w-full h-auto"
              />
              {data.techInfo && <TechInfo data={data.techInfo} />}
            </div>
            <div className="sm:w-1/2 ml-4">
              <PageHeading
                title={data.title}
                styles={{ color: "white", fontSize: "40px" }}
              />
              <p className="my-5 text-[15px] text-white [text-shadow:_2px_2px_5px_rgb(9_9_9)]">
                {data.description}
              </p>
              <Specification
                players={data.specification.playersNumber}
                playingTime={data.specification.playingTime}
                minAge={data.specification.minAge}
              />
            </div>
          </div>
        </section>
        {data.images.components.data.attributes.url && (
          <GameComponents img={data.images.components.data.attributes.url} />
        )}
        {data.videos[0] && (
          <ImagesSlider data={data.videos} title={"Videos:"} />
        )}
        {data.images.sliderImages.data && (
          <ImagesSlider
            data={data.images.sliderImages.data}
            title={"Images:"}
          />
        )}
        {data.rules.length && <RulesSection rules={data.rules} />}
      </div>
      <SellOffer />
    </div>
  );
}
