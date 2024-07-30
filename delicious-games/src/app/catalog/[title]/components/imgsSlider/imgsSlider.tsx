import Gallery from "@/app/components/mediaSlider/mediaSlider";
import PageHeading from "@/app/components/UI/pageHeading/pageHeading";

export type ImagesSliderProps = {
  id: number;
  attributes: {
    alternativeText?: string;
    caption?: string;
    url: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

export type VideosProps = {
  id: string;
  name: string;
  link: string;
};

export default function ImagesSlider({
  data,
  title,
}: {
  data: ImagesSliderProps[] | VideosProps[];
  title: string;
}) {
  return (
    <section>
      <PageHeading
        title={title}
        headingLvl={3}
        styles={{ fontSize: "14px", color: "white" }}
      />
      <Gallery media={data} />
    </section>
  );
}
