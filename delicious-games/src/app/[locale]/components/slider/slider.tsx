"use client";

import { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import MainButton from "../UI/button/mainButton";
import { getStrapiURL } from "@/utils/strapi";
import qs from "qs";
import Link from "next/link";
import { StrapiImage } from "../UI/StrapiImage/StrapiImage";
import SliderArrow from "./components/SliderArrow";
import { GameDataToRender, GameResponse } from "./types/types";
import { gamesForSlider } from "@/data/sliderData";
import { useParams } from "next/navigation";

export default function SliderWrapper() {
  const [gamesData, setData] = useState<GameDataToRender[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isLocalData, setIsLocalData] = useState<boolean>(false);
  const [animate, setAnimate] = useState(false);
  const locale = useParams<{ locale: string }>().locale;

  const gameQuery = qs.stringify(
    {
      fields: ["title", "path"],
      populate: {
        mainPageSlider: {
          populate: {
            banner: {
              fields: ["url"],
            },
            bg: {
              populate: {
                formats: {
                  populate: {
                    large: {
                      fields: ["url"],
                    },
                  },
                },
              },
            },
          },
        },
      },
      locale,
      sort: ["sortingID:asc"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  useEffect(() => {
    async function getData() {
      try {
        const baseUrl = getStrapiURL();
        const url = new URL("/api/games", baseUrl);
        url.search = gameQuery;
        const { data }: { data: GameResponse[] } = await fetch(url.href).then(
          (res) => res.json()
        );
        const mappedData = data.map((el) => {
          return {
            bgImg:
              el.attributes.mainPageSlider.bg.data.attributes.formats.large.url,
            banner: el.attributes.mainPageSlider.banner.data.attributes.url,
            bottomBtn: el.attributes.mainPageSlider.buttonText,
            topBtn: el.attributes.mainPageSlider.topTitle || "",
            linkToGame: `${locale}/catalog/${el.attributes.path}`,
          };
        });
        setData(mappedData);
        setIsLocalData(false);
      } catch (error) {
        setData(gamesForSlider);
        setIsLocalData(true);
        console.error(error);
      }
    }
    getData();
  }, []);

  const settings: Settings = {
    dots: true,
    fade: true,
    dotsClass: "slick-dots-custom",
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    waitForAnimate: true,
    arrows: true,
    prevArrow: <SliderArrow />,
    nextArrow: <SliderArrow />,
    beforeChange: () => {
      setAnimate(false);
    },
    afterChange: (current: number) => {
      setCurrentSlide(current);
      setAnimate(true);
    },
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="lg:h-[calc(100vh-140px)] h-[calc(100vh-85px)] w-full">
      <div
        className={`absolute lg:-top-[140px] -top-[85px] overflow-hidden w-full font-redHat h-[calc(100vh+85px)] lg:h-[calc(100vh+140px)] max-w-screen`}
      >
        <Slider {...settings} className="size-full">
          {gamesData.map((game, index) => (
            <div key={game.bgImg} className="h-full">
              <Link href={game.linkToGame}>
                {isLocalData ? (
                  <Image
                    src={game.bgImg}
                    alt="slider image"
                    className="w-screen h-full object-cover object-center"
                    width={1920}
                    height={1511}
                  />
                ) : (
                  <StrapiImage
                    src={game.bgImg}
                    className="w-screen h-full object-cover object-center"
                    alt="slider image"
                    width={1920}
                    height={1511}
                  />
                )}
                <div
                  className={`absolute top-[250px] lg:top-[350px] left-1/4 flex flex-col w-1/2 h-1/2 justify-center items-center z-10
            text-center text-lg ${
              animate && currentSlide === index
                ? "opacity-0 animate-fadeIn delay-200"
                : "opacity-0"
            }`}
                >
                  {game.topBtn && (
                    <span className="font-redHat block w-max mx-auto font-bold uppercase px-4 py-1 bg-amber-200 mb-4">
                      {game.topBtn}
                    </span>
                  )}
                  <div className="mb-4 w-auto max-h-[50vh]">
                    {isLocalData ? (
                      <Image
                        src={game.banner}
                        alt="game image"
                        className={`${
                          animate && currentSlide === index
                            ? "opacity-0 animate-fadeIn delay-400"
                            : "opacity-0"
                        } mx-auto w-full h-full object-contain object-center`}
                        width={400}
                        height={400}
                      />
                    ) : (
                      <StrapiImage
                        src={game.banner}
                        className={`${
                          animate && currentSlide === index
                            ? "opacity-0 animate-fadeIn delay-400"
                            : "opacity-0"
                        } mx-auto w-full h-full object-contain object-center`}
                        alt="game image"
                        width={400}
                        height={400}
                      />
                    )}
                  </div>
                  <MainButton
                    link={game.linkToGame}
                    text={game.bottomBtn}
                    button={true}
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
