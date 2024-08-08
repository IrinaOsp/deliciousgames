import { faFilePdf, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStrapiMedia } from "@/utils/strapi";
import PageHeading from "@/app/[locale]/components/UI/pageHeading/pageHeading";

type Rules = {
  id: number;
  name: string;
  isBonus: boolean;
  document: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    };
  };
};

export default function RulesSection({ rules }: { rules: Rules[] }) {
  return (
    <section>
      <PageHeading
        title="RULES DOWNLOAD:"
        headingLvl={3}
        styles={{ fontSize: "14px", color: "white" }}
      />
      <ul>
        {rules.map((rule) => (
          <li
            key={rule.id}
            className="block w-full border-b border-red-500 pt-1.5 pb-0.5 pl-2 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={rule.isBonus ? faGift : faFilePdf}
              className={`${
                rule.isBonus ? "text-amber-400" : "text-pink-600"
              } mr-2.5`}
            />
            <a
              href={getStrapiMedia(rule.document.data.attributes.url) || "#"}
              target="_blank"
              className="text-slate-50 text-base hover:text-pink-600 hover:underline transition-all"
            >
              {rule.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
