import { redHat } from "@/app/fonts";

export default function PageHeading({
  title,
  fontSize,
  headingLvl,
}: {
  title: string;
  fontSize?: number;
  headingLvl?: number;
}) {
  return (
    <>
      {(headingLvl === 1 || !headingLvl) && (
        <h1
          className={`${
            fontSize
              ? `text-[${fontSize}px] leading-6`
              : "text-[26px] leading-8"
          } ${
            redHat.variable
          } font-bold uppercase mb-5 font-redHat text-zinc-600
      after:block after:w-[100px] after:h-[1px] after:bg-pink-600 after:mt-[10px]`}
        >
          {title}
        </h1>
      )}
      {headingLvl === 3 && (
        <h3
          className={`${
            fontSize
              ? `text-[${fontSize}px] leading-6`
              : "text-[26px] leading-8"
          } ${
            redHat.variable
          } font-bold uppercase mb-5 font-redHat text-zinc-600
    after:block after:w-[100px] after:h-[1px] after:bg-pink-600 after:mt-[10px]`}
        >
          {title}
        </h3>
      )}
    </>
  );
}
