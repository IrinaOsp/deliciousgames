"use client";

import qs from "qs";
import { getStrapiURL } from "@/utils/strapi";
import Gallery from "@/app/[locale]/components/mediaSlider/mediaSlider";
import { VideosProps } from "@/app/[locale]/catalog/[title]/components/imgsSlider/imgsSlider";
import { useEffect, useState } from "react";

export default function Videos({ locale }: { locale: string }) {
  const [videos, setVideos] = useState<VideosProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const gameQuery = qs.stringify({
        filters: {
          path: {
            $eqi: "underwater-cities",
          },
        },
        populate: {
          videos: "*",
        },
        locale,
      });

      try {
        setIsLoading(true);
        const baseUrl = getStrapiURL();

        const url = new URL("/api/games", baseUrl);
        url.search = gameQuery;
        const res = await fetch(url.href).then((res) => res.json());
        setVideos(res.data[0].attributes.videos as VideosProps[]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="loader border-t-4 border-blue-500 rounded-full size-10 animate-spin"></div>
        </div>
      )}
      {videos.length > 0 && <Gallery media={videos} />}
    </div>
  );
}
