"use client";

import Slider, { CustomArrowProps, Settings } from "react-slick";
import "./productsSlider.css";
import { useProducts } from "@/hooks/useProducts";
import GameBox from "../gameBox/gameBox";

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
      {products && (
        <Slider {...settings} className="">
          {products.map((el) => (
            <GameBox key={el.title} el={el} />
          ))}
        </Slider>
      )}
    </div>
  );
}
