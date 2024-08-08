import { TechInfoProps } from "@/app/[locale]/catalog/[title]/components/techInfo/techInfo";

export default function TechInfoDetails({ data }: { data: TechInfoProps }) {
  return (
    <table className="w-full text-zinc-800 text-base bg-white">
      <tbody className="">
        {data.dimensions && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 ">Dimensions:</td>
            <td>{data.dimensions}</td>
          </tr>
        )}
        {data.weight && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5">Weight:</td>
            <td>{data.weight}</td>
          </tr>
        )}
        {data.distributionPackageDimensions && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">
              Distribution package dimensions:
            </td>
            <td>{data.distributionPackageDimensions}</td>
          </tr>
        )}
        {data.packaging && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">Packaging:</td>
            <td>{data.packaging}</td>
          </tr>
        )}
        {data.distributionPackWeight && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">
              Distribution pack weight:
            </td>
            <td>{data.distributionPackWeight}</td>
          </tr>
        )}
        {data.ENGeditionEAN && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">ENG edition EAN:</td>
            <td>{data.ENGeditionEAN}</td>
          </tr>
        )}
        {data.CZeditionEAN && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">CZ edition EAN:</td>
            <td>{data.CZeditionEAN}</td>
          </tr>
        )}
        {data.DEeditionEAN && (
          <tr className="even:bg-zinc-300 hover:bg-pink-100">
            <td className="py-2 px-3.5 hover:bg-pink-100">DE edition EAN:</td>
            <td>{data.DEeditionEAN}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
