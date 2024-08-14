import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CountryData } from "@/data/retailersData";
import { getDictionary } from "@/dictionaries";

export default async function RetailerSection({
  heading,
  section,
  locale,
}: {
  heading: string;
  section: CountryData[];
  locale: string;
}) {
  const dict = await getDictionary(locale, "retailers");

  return (
    <>
      <h2 className="text-pink-600 text-[32px] mb-[15px] font-bold">
        {heading}
      </h2>
      <div className=" flex justify-center items-center w-full h-[1px] my-5 bg-zinc-300">
        <span className="inline-flex justify-center items-center bg-zink-600 size-4 rounded-full bg-zinc-600">
          <FontAwesomeIcon
            icon={faStar}
            className="block text-white text-[8px]"
          />
        </span>
      </div>
      {section.map((partner) => (
        <div key={partner.country}>
          <h4 className="uppercase mb-[15px] font-bold text-lg">
            {dict[partner.country]}
          </h4>
          {partner.entries.map((entry) => (
            <p key={entry.partnerName} className="mb-[15px] text-[15px]">
              <b>{entry.partnerName}</b>
              {" - "}
              <a
                href={`http://${entry.link}`}
                target="_blank"
                className="underline text-sky-900 hover:text-pink-600"
              >
                {entry.link}
              </a>
            </p>
          ))}
        </div>
      ))}
    </>
  );
}
