"use client";

import { useParams } from "next/navigation";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "./productsSlider.css";
import { useProducts } from "@/hooks/useProducts";
import GameBox from "../gameBox/gameBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SampleArrowNext(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " slick-arrow-custom"}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowRight} className="text-white text-base" />
    </div>
  );
}
function SampleArrowPrev(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " slick-arrow-custom"}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-white text-base" />
    </div>
  );
}

export default function ProductsSlider() {
  const locale = useParams<{ locale: string }>().locale;
  const products = useProducts("box", locale);

  const settings: Settings = {
    dots: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 4,
    swipeToSlide: true,
    nextArrow: <SampleArrowNext />,
    prevArrow: <SampleArrowPrev />,
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
