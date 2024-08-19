import Link from "next/link";
import Image from "next/image";
import { trimText } from "../../../../utils/utils";
import { GameCardInfo } from "@/types/types";
import { StrapiImage } from "../../components/UI/StrapiImage/StrapiImage";

export default function GameCard({
  view,
  title,
  image,
  description,
  price,
  tax,
  path,
  gameTag,
}: GameCardInfo) {
  return (
    <div
      className={`flex ${
        view === "grid" ? "flex-col" : "flex-row w-full"
      } sm:flex-nowrap flex-wrap max-sm:w-1/2 justify-center gap-5 bg-white p-2.5 group`}
    >
      <div className="sm:size-[250px] relative">
        <Link href={`/catalog/${path}`}>
          {gameTag && (
            <div
              className={`absolute z-10 top-0 left-0 w-full  bg-transparent text-white text-xs flex items-center justify-end `}
            >
              <span
                className={`flex items-center m-2.5 p-2.5 rounded-[20px] ${
                  gameTag.toLowerCase() === "new" ||
                  gameTag.toLowerCase() === "novinka"
                    ? "bg-green-500"
                    : "bg-pink-600 px-5"
                }`}
              >
                {(gameTag.toLowerCase() === "new" ||
                  gameTag.toLowerCase() === "novinka") && (
                  <span className="block size-3.5 mr-1">
                    <Image
                      src="/icons/tag.svg"
                      alt="new"
                      width={14}
                      height={14}
                    />
                  </span>
                )}
                <b className={`block leading-3 uppercase`}>{gameTag}</b>
              </span>
            </div>
          )}
          <div className="w-full h-auto sm:size-[250px]">
            <StrapiImage
              src={image}
              alt="Game Cover"
              width={250}
              height={250}
              className="w-full h-auto group-hover:scale-[112%] duration-200"
            />
          </div>
        </Link>
      </div>

      <div>
        <Link
          href={`/catalog/${path}`}
          className={`${
            view === "grid" ? "w-full max-w-60" : "w-auto"
          } uppercase inline-block font-redHat text-center font-bold text-lg text-sky-900 hover:text-pink-600 duration-200`}
        >
          {title}
        </Link>
        {view === "list" && (
          <div>
            <p className="mt-[5px] mb-2.5 text-[13px] text-zinc-500">
              {trimText(description, 300)}
            </p>
            <div className="mb-2.5">
              <span className="text-[20px] leading-5">{`${
                price || 0
              } Kč`}</span>
              <span className="block text-xs leading-[18px]">{`Ex Tax: ${
                tax || 0
              } Kč`}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
