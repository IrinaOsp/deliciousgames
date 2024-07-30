"use client";

import {
  ImagesSliderProps,
  VideosProps,
} from "@/app/catalog/[title]/components/imgsSlider/imgsSlider";
import { getStrapiMedia } from "@/utils/strapi";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

function SimpleGallery({
  media,
  mediaType,
}: {
  media: any[];
  mediaType: string;
}) {
  console.log(media);

  const getItems = useCallback(() => {
    return media.map((item) => {
      return (
        <a
          key={item.id}
          title={item.name}
          data-src={item.largeURL || item.url}
          data-video={mediaType === "video" && item.url}
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
            alt=""
            className="size-full object-cover hover:contrast-50 hover:scale-150 transition-all"
          />
        </a>
      );
    });
  }, [media]);

  return (
    <div className="App">
      <LightGallery
        showZoomInOutIcons
        download={false}
        actualSize={false}
        autoplayFirstVideo={false}
        loadYouTubeThumbnail={true}
        plugins={[lgThumbnail, lgZoom, lgVideo]}
        videojs={true}
        elementClassNames="flex flex-wrap gap-2.5"
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
