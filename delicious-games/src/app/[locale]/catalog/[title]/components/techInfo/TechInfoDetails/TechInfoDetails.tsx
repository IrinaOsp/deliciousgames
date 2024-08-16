import { TechInfoProps } from "@/app/[locale]/catalog/[title]/components/techInfo/techInfo";
import { TFunction } from "i18next";

export default function TechInfoDetails({
  data,
  t,
}: {
  data: TechInfoProps;
  t: TFunction<"gamePage", undefined>;
}) {
  return (
    <table className="w-full text-zinc-800 text-base bg-white">
      <tbody className="">
        {data.dimensions && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 ">{t("Dimensions")}:</td>
            <td>{data.dimensions} cm</td>
          </tr>
        )}
        {data.weight && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5">{t("Weight")}:</td>
            <td>{data.weight} kg</td>
          </tr>
        )}
        {data.distributionPackageDimensions && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">
              {t("Distribution")}:
            </td>
            <td>{data.distributionPackageDimensions} cm</td>
          </tr>
        )}
        {data.packaging && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">{t("Packaging")}:</td>
            <td>{`${data.packaging} ${t("pcs. / box")}`}</td>
          </tr>
        )}
        {data.distributionPackWeight && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">
              {t("Distribution_weight")}:
            </td>
            <td>{data.distributionPackWeight} kg</td>
          </tr>
        )}
        {data.ENGeditionEAN && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">{t("ENG_EAN")}:</td>
            <td>{data.ENGeditionEAN}</td>
          </tr>
        )}
        {data.CZeditionEAN && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">{t("CZ_EAN")}:</td>
            <td>{data.CZeditionEAN}</td>
          </tr>
        )}
        {data.DEeditionEAN && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">{t("DE_EAN")}:</td>
            <td>{data.DEeditionEAN}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
