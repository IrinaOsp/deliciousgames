"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { SHOW_OPTIONS, SORT_OPTIONS } from "@/data/catalogData";
import GameCard from "./gameCard/gameCard";
import { sortData } from "../../../utils/utils";
import { getStrapiURL } from "../../../utils/strapi";
import PageHeading from "../components/UI/pageHeading/pageHeading";
import { ResponseCatalogItem } from "@/types/types";

export default function Catalog({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [sort, setSort] = useState("default");
  const [data, setData] = useState<ResponseCatalogItem[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState("12");
  const { t } = useTranslation("catalog");

  const gamesQuery = qs.stringify(
    {
      fields: ["title", "description", "path"],
      populate: {
        price: {
          fields: ["currency", "price"],
        },
        images: {
          populate: {
            box: {
              fields: ["alternativeText", "url"],
            },
          },
        },
      },
      locale,
    },
    {
      encodeValuesOnly: true,
    }
  );

  const handleLayout = (display: "grid" | "list") => {
    setLayout(display);
  };

  const handleSort = (target: HTMLSelectElement) => {
    setSort(target.value);
    sortData(data, target.value);
  };

  const handleLimit = (target: HTMLSelectElement) => {
    setLimit(target.value);
    data.slice(0, Number(limit));
  };

  useEffect(() => {
    async function getData(path: string) {
      setIsLoading(true);
      try {
        const baseUrl = getStrapiURL();
        const url = new URL(path, baseUrl);
        url.search = gamesQuery;
        const res = await fetch(url.href).then((res) => res.json());
        const responseData: ResponseCatalogItem[] = res.data;
        setData(responseData);
      } catch (error) {
        setError((error as Error)?.message || "Failed to fetch data");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData("/api/games");
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5 xl:px-0">
      <PageHeading title={t("heading")} />

      <div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex justify-start items-center gap-1 text-lg text-zinc-800">
            <button title="Grid">
              <Image
                src="/icons/grid_icon.svg"
                alt="Grid Icon"
                width={18}
                height={18}
                className="mb-[1px]"
                onClick={() => handleLayout("grid")}
              />
            </button>
            <button
              title="List"
              onClick={() => handleLayout("list")}
              className="pt-[1px]"
            >
              <FontAwesomeIcon icon={faList} className="text-zinc-700" />
            </button>
          </div>

          <div className="flex gap-2.5">
            <div className="">
              <label
                htmlFor="input-sort"
                className="py-[5px] px-2.5 bg-zinc-100 rounded-[3px] text-xs max-[500px]:hidden"
              >
                {`${t("sort_by")}: `}
              </label>
              <select
                name="input-sort"
                id="input-sort"
                onChange={(e) => handleSort(e.target as HTMLSelectElement)}
                className="h-[26px] text-xs border border-zinc-300 rounded-sm max-w-[500px]
                 active:border-slate-500 focus:outline-none focus:border-slate-500"
              >
                {SORT_OPTIONS.map(({ key, enValue }) => (
                  <option key={key} value={t(enValue)} className="text-inherit">
                    {t(key)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="input-limit"
                className="py-[5px] px-2.5 bg-zinc-100 rounded-[3px] text-xs max-[500px]:hidden"
              >
                {`${t("show")}: `}
              </label>
              <select
                name="input-limit"
                id="input-limit"
                onSelect={(e) => handleLimit(e.target as HTMLSelectElement)}
                className="h-[26px] text-xs border border-zinc-300 rounded-sm max-w-[500px]
                 active:border-slate-500 focus:outline-none focus:border-slate-500"
              >
                {SHOW_OPTIONS.map((el) => (
                  <option key={el} value={el} className="text-inherit">
                    {el}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap justify-start ${
            layout === "list" ? "flex-col" : "flex-row"
          }`}
        >
          {isLoading
            ? "Loading..."
            : data.map((el: any) => (
                <GameCard
                  view={layout}
                  key={el.id}
                  title={el.attributes.title}
                  description={el.attributes.description}
                  image={el.attributes.images.box.data.attributes.url}
                  price={el.attributes.price[0].price}
                  tax={el.attributes.tax}
                  label={el.attributes.label}
                  path={el.attributes.path}
                />
              ))}
        </div>
        <div>{error && <p className="text-red-500">{error}</p>}</div>
      </div>
    </div>
  );
}
