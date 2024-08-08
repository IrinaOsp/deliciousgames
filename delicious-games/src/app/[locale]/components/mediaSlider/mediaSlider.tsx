"use client";

import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { getStrapiMedia } from "@/utils/strapi";
import {
  ImagesSliderProps,
  VideosProps,
} from "@/app/[locale]/catalog/[title]/components/imgsSlider/imgsSlider";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";

function SimpleGallery({
  media,
  mediaType,
}: {
  media: any[];
  mediaType: string;
}) {
  const onInit = () => {
    if (!document) return;
  };

  const getItems = useCallback(() => {
    return media.map((item) => {
      return (
        <a
          key={item.id}
          title={item.name}
          data-index={item.id}
          data-video={
            mediaType === "video"
              ? JSON.stringify({
                  source: [{ src: item.url, type: "video/mp4" }],
                  attributes: { preload: "none" },
                })
              : undefined
          }
          data-src={mediaType === "image" ? item.largeURL : item.url}
          rel="noreferrer"
          className={`relative size-16 md:size-[150px] ${
            mediaType === "video" ? "max-h-[84px]" : ""
          } rounded-md overflow-hidden flex justify-center items-center group`}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlassPlus}
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white opacity-0 group-hover:opacity-100"
          />
          <img
            src={
              item.thumbnailURL ||
              item.url.replace("www", "img").replace("embed", "vi") +
                "/default.jpg"
            }
            alt={item.name}
            className="size-full object-cover hover:contrast-50 hover:scale-150 transition-all"
          />
        </a>
      );
    });
  }, [media, mediaType]);

  return (
    <div className="App">
      <LightGallery
        onInit={onInit}
        download={false}
        loadYouTubeThumbnail={false}
        showZoomInOutIcons
        autoplay={false}
        autoplayFirstVideo={false}
        autoplayControls={false}
        loadYouTubePoster={true}
        controls={false}
        plugins={[lgThumbnail, lgZoom, lgVideo]}
        elementClassNames="flex flex-wrap gap-2.5"
        licenseKey="1234-4567-8910-1112"
      >
        {getItems()}
      </LightGallery>
    </div>
  );
}

export default function Gallery({
  media,
}: {
  media: ImagesSliderProps[] | VideosProps[];
}) {
  const mediaItems = media.map((image) => {
    if (image.hasOwnProperty("attributes")) {
      return {
        id: image.id,
        name: (image as ImagesSliderProps).attributes.caption,
        thumbnailURL: getStrapiMedia(
          (image as ImagesSliderProps).attributes.formats.thumbnail.url
        ),
        largeURL: getStrapiMedia((image as ImagesSliderProps).attributes.url),
        width: (image as ImagesSliderProps).attributes.width,
        height: (image as ImagesSliderProps).attributes.height,
      };
    } else {
      return {
        id: image.id,
        name: (image as VideosProps).name,
        url: (image as VideosProps).link.replace("watch?v=", "embed/"),
        thumbnail: "",
      };
    }
  });
  return (
    <div className="mb-5">
      <SimpleGallery
        media={mediaItems}
        mediaType={media[0].hasOwnProperty("attributes") ? "image" : "video"}
      />
    </div>
  );
}
