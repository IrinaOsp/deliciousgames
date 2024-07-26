"use client";

import { useEffect, useState } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import Link from "next/link";
import "./productsSlider.css";
import { getStrapiURL } from "@/utils/strapi";
import qs from "qs";
import { StrapiImage } from "../UI/StrapiImage/StrapiImage";
import { Routes } from "@/data/data";

const productsQuery = qs.stringify(
  {
    populate: {
      images: {
        populate: {
          box: {
            fields: ["alternativeText", "url"],
          },
        },
      },
    },
  },
  { encodeValuesOnly: true }
);

type ResponseItem = {
  id: number;
  attributes: {
    title: string;
    path: string;
    images: {
      box: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
};

type Response = {
  data: ResponseItem[];
};

type Product = {
  boxImg: string;
  title: string;
  path: string;
};

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
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const baseUrl = getStrapiURL();
        const url = new URL("/api/games", baseUrl);
        url.search = productsQuery;
        console.log(url.href);
        const res: Response = await fetch(url.href).then((res) => res.json());
        if (res.data.length) {
          const products: Product[] = res.data.map((el: any) => {
            return {
              boxImg: el.attributes.images.box.data.attributes.url,
              title: el.attributes.title,
              path: el.attributes.path,
            };
          });
          setProducts(products);
        }
        return res;
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);

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
