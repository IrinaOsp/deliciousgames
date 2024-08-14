"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { faArrowRightLong, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pathToTitle } from "@/utils/utils";

export default function Breadcrumbs({ locale }: { locale: string }) {
  const paths = usePathname().split("/");

  return (
    paths.length > 1 &&
    paths[1] && (
      <div className="w-full border-b border-zinc-300">
        <div className="max-w-7xl w-full mx-auto p-2.5 pl-5 xl:pl-0 flex">
          <Link href={`/${locale}`}>
            <FontAwesomeIcon
              icon={faHouse}
              className="text-slate-500 hover:text-stone-400"
            />
          </Link>
          {paths.map(
            (path, index) =>
              path &&
              path !== locale && (
                <div key={path}>
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="text-slate-300 px-2.5"
                  />
                  <Link
                    href={`${paths.slice(0, index + 1).join("/")}`}
                    className="text-zinc-500 text-base capitalize hover:text-stone-400"
                  >
                    {`${pathToTitle(path)}`}
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    )
  );
}
