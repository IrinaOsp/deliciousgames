"use client";

import Slider, { CustomArrowProps, Settings } from "react-slick";
import Link from "next/link";
import "./productsSlider.css";
import { StrapiImage } from "../UI/StrapiImage/StrapiImage";
import { Routes } from "@/data/data";
import { useProducts } from "@/hooks/useProducts";

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
  const products = useProducts("box");

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
        {products &&
          products.map((el) => (
            <Link
              href={`${Routes.CATALOGUE}/${el.path}`}
              key={el.title}
              className="group"
            >
              <div>
                <StrapiImage
                  src={el.img}
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
