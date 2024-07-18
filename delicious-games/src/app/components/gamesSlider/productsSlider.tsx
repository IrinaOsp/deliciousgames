"use client";

import Slider, { CustomArrowProps, Settings } from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "./productsSlider.css";

const products = [
  {
    boxImg: "/imgs/for-test.png",
    title: "Evacuation",
  },
  {
    boxImg: "/imgs/for-test.png",
    title: "Evacuation",
  },
  {
    boxImg: "/imgs/for-test.png",
    title: "Evacuation",
  },
  {
    boxImg: "/imgs/Woodcraft box - 3D visualisation-350x350h.png",
    title: "Woodcraft",
  },
  {
    boxImg: "/imgs/Woodcraft box - 3D visualisation-350x350h.png",
    title: "Woodcraft",
  },
];

function SampleArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " slick-arrow-custom"}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

export default function ProductsSlider() {
  const settings: Settings = {
    dots: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 4,
    swipeToSlide: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
    ],
  };
  return (
    <div className="px-5">
      <Slider {...settings} className="">
        {products.map((el) => (
          <Link href={"/"} key={el.title} className="group">
            <div>
              <Image
                src={el.boxImg}
                alt={el.title}
                className="w-full group-hover:scale-110 transition-all"
                width={303}
                height={303}
              />
              <p className="text-center uppercase text-[17px] font-bold group-hover:text-pink-600">
                {el.title}
              </p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
