import PageHeading from "@/app/components/UI/pageHeading/pageHeading";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Rules = {
  name: string;
  link: string;
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
            key={rule.name}
            className="block w-full border-b border-red-500 pt-1.5 pb-0.5 pl-2 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faFilePdf}
              className="text-pink-600 mr-2.5"
            />
            <a
              href={rule.link}
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
