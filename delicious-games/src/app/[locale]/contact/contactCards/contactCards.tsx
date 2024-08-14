import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { getDictionary } from "@/dictionaries";
import { EMAILS, INVOICE_DATA } from "@/data/contactsData";

export default async function ContactCards({ locale }: { locale: string }) {
  const dict = await getDictionary(locale, "contactUs");
  return (
    <>
      <div className="flex items-center justify-start p-2.5 rounded-[5px] bg-white">
        <div className="mr-2.5 flex items-center justify-center size-10 min-[378px]:size-[60px] rounded-full bg-sky-800">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-white text-xl min-[378px]:text-3xl"
          />
        </div>
        <div>
          <h5 className="uppercase font-bold text-sm font-redHat">
            {dict["CompanyAddress"]}
          </h5>
          <p className="text-[13px]">
            <strong className="block">Kateřina Suchá</strong>
            <span className="block">Kettnerova 2051</span>
            <span className="block">{`15500 ${dict["city"]}`}</span>
            <span className="block">{dict["country"]}</span>
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-start p-2.5 bg-white`}>
        <div className="mr-2.5 flex items-center justify-center size-10 min-[378px]:size-[60px] rounded-full bg-sky-800">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="text-white text-xl min-[378px]:text-3xl"
          />
        </div>
        <div>
          <h5 className="uppercase font-bold text-sm  font-redHat">
            {dict["InvoiceData"]}
          </h5>
          <p className="text-[13px]">
            {INVOICE_DATA.map(({ item, value }) => (
              <span key={item} className="block">
                <strong>{dict[item]}</strong>: <span> {value}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
      <div
        className={`flex max-w-full items-center justify-start p-2.5 bg-white`}
      >
        <div className="mr-2.5 flex items-center justify-center size-10 min-[378px]:size-[60px] rounded-full bg-sky-800">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white text-xl min-[378px]:text-3xl"
          />
        </div>
        <div>
          <h5 className="uppercase font-bold text-sm font-redHat">
            {dict["Contacts"]}
          </h5>
          <p className="text-[13px]">
            {EMAILS.map(({ item, value }) => (
              <span key={item} className="flex flex-wrap">
                <strong className="block">{dict[item]}</strong>
                <span className="block mr-0.5">: </span>
                <span>{value}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
