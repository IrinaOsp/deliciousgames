import { redHat } from "@/app/fonts";

export default function PageHeading({
  title,
  headingLvl,
  textTransform,
  styles,
}: {
  title: string;
  headingLvl?: number;
  textTransform?: string;
  styles?: React.CSSProperties;
}) {
  return (
    <>
      {(headingLvl === 1 || !headingLvl) && (
        <h1
          className={`${redHat.variable} text-[26px] font-bold ${
            textTransform || "uppercase"
          } mb-5 font-redHat text-zinc-600
          after:block after:w-[100px] after:h-[1px] after:bg-pink-600 after:mt-[10px]`}
          style={{ ...styles }}
        >
          {title}
        </h1>
      )}
      {headingLvl === 3 && (
        <h3
          className={`${redHat.variable} text-[26px] font-bold ${
            textTransform || "uppercase"
          } mb-5 font-redHat text-zinc-600
          after:block after:w-[100px] after:h-[1px] after:bg-pink-600 after:mt-[10px]`}
          style={{ ...styles }}
        >
          {title}
        </h3>
      )}
    </>
  );
}
