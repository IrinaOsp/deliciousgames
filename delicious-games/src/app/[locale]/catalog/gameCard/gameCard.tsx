import Link from "next/link";
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
  label,
  path,
}: GameCardInfo) {
  return (
    <div
      className={`flex ${
        view === "grid" ? "flex-col" : "flex-row w-full"
      } sm:flex-nowrap flex-wrap max-sm:w-1/2 justify-center gap-5 bg-white p-2.5 group`}
    >
      <div className="sm:size-[250px] relative">
        <Link href={`/catalog/${path}`}>
          {label && (
            <div className="absolute z-10 top-0 left-0 w-full bg-transparent text-white text-xs flex items-center justify-end">
              <span className="bg m-2.5">
                <b
                  className={`block py-2.5 px-5 ${
                    label.toLowerCase() === "new"
                      ? "bg-green-500"
                      : "bg-pink-600"
                  } text-white text-xs leading-3 rounded-[20px] uppercase`}
                >
                  {label}
                </b>
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
          } inline-block font-redHat text-center font-bold text-lg text-sky-900 hover:text-pink-600 duration-200`}
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
