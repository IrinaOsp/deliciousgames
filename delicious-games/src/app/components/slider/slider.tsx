"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const games = [
  {
    bgImg: "/imgs/Evacuation_Cover.jpg",
    frontImg: "/imgs/evacuation.png",
    topBtn: "Strategic boardgames",
    bottomBtn: "read more",
    linkToGame: "/evacuation",
  },
  {
    bgImg: "/imgs/woodcraft_Cover_Background_02-1920x1511h.jpg",
    frontImg: "/imgs/woodcraft.png",
    bottomBtn: "download for free",
    linkToGame: "/woodcraft",
  },
];

export default function SliderWrapper() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [animate, setAnimate] = useState(false);

  const settings = {
    dots: true,
    fade: true,
    dotsClass: "slick-dots-custom",
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
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
    <div
      className={`font-redHat slider-container max-h-screen max-w-full w-full overflow-hidden`}
    >
      <Slider {...settings} className="max-w-full w-full">
        {games.map((game, index) => (
          <div key={game.bgImg} className="size-screen">
            <Image
              src={game.bgImg}
              alt="slider image"
              className="w-screen min-h-screen object-cover object-center"
              width={1920}
              height={1511}
            />
            <div
              className={`absolute -top-[10%] left-0 flex flex-col w-full h-full justify-center items-center z-10
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
              <div className="mb-4 max-h-[50vh]">
                <Image
                  src={game.frontImg}
                  alt="game image"
                  className={`${
                    animate && currentSlide === index
                      ? "opacity-0 animate-fadeIn delay-400"
                      : "opacity-0"
                  } mx-auto h-full object-center`}
                  width={400}
                  height={400}
                />
              </div>
              <Link
                href={game.linkToGame}
                className="block mx-auto mt-1/4 w-max font-normal text-sm text-white uppercase p-3 bg-pink-600 hover:bg-slate-500
                opacity-0 animate-fadeIn delay-400"
              >
                <span>{game.bottomBtn}</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
