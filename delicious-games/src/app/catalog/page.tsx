"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeading from "../components/UI/pageHeading/pageHeading";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { SHOW_OPTIONS, SORT_OPTIONS } from "@/data/catalogData";
import GameCard from "./gameCard/gameCard";
import { sortData } from "../utils/utils";

export default function Catalog() {
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [sort, setSort] = useState("default");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState("12");

  const handleLayout = (display: "grid" | "list") => {
    setLayout(display);
  };

  const handleSort = (target: HTMLSelectElement) => {
    setSort(target.value);
    sortData(data, target.value);
  };

  const handleLimit = (target: HTMLSelectElement) => {
    setLimit(target.value);
    data.slice(0, Number(target.value));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://your-api-endpoint.com/games");
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError((error as Error)?.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    // fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5 xl:px-0">
      <PageHeading title={"All Games"} />

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
            <button title="List" onClick={() => handleLayout("list")}>
              <FontAwesomeIcon icon={faList} className="text-zinc-800" />
            </button>
          </div>

          <div className="flex gap-2.5">
            <div className="">
              <label
                htmlFor="input-sort"
                className="py-[5px] px-2.5 bg-zinc-100 rounded-[3px] text-xs"
              >
                Sort By:
              </label>
              <select
                name="input-sort"
                id="input-sort"
                onSelect={(e) => handleSort(e.target as HTMLSelectElement)}
                className="h-[26px] text-xs border border-zinc-300 rounded-sm max-w-[500px]
                 active:border-slate-500 focus:outline-none focus:border-slate-500"
              >
                {SORT_OPTIONS.map((el) => (
                  <option key={el} value={el} className="text-inherit">
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="input-limit"
                className="py-[5px] px-2.5 bg-zinc-100 rounded-[3px] text-xs"
              >
                Show:{" "}
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
          className={`flex flex-wrap ${
            layout === "list" ? "flex-col" : "flex-row"
          }`}
        >
          <GameCard
            view={layout}
            title={"Game Title"}
            image={"/imgs/for-test.png"}
            description="In Woodcraft, players take turns choosing one of seven actions, which become more valuable the longer they remain unchosen. These actions are used to manipulate dice representing wood that can be cut, glued, purchased, or even grown. Manage your workshop, take care of your tools, and work with your friends."
            price={0}
            tax={0}
            label="new"
          />
        </div>
      </div>
    </div>
  );
}
