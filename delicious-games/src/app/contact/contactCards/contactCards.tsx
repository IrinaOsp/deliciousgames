import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { COMPANY_ADDRESS, EMAILS, INVOICE_DATA } from "@/data/contactsData";

export default function ContactCards() {
  return (
    <>
      <div className="flex items-center justify-start p-2.5 rounded-[5px] bg-white">
        <div className="mr-2.5 flex items-center justify-center size-[60px] rounded-full bg-sky-800">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-white text-3xl"
          />
        </div>
        <div>
          <h5 className="uppercase font-bold text-sm font-redHat">
            Company address
          </h5>
          <p className="text-[13px]">
            {COMPANY_ADDRESS.map((el, ind) =>
              ind === 0 ? (
                <strong key={el} className="block">
                  {el}
                </strong>
              ) : (
                <span key={el} className="block">
                  {el}
                </span>
              )
            )}
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-start p-2.5 bg-white`}>
        <div className="mr-2.5 flex items-center justify-center size-[60px] rounded-full bg-sky-800">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="text-white text-3xl"
          />
        </div>
        <div>
          <h5 className="uppercase font-bold text-sm  font-redHat">
            INVOICE DATA
          </h5>
          <p className="text-[13px]">
            {INVOICE_DATA.map(({ item, value }) => (
              <span key={item} className="block">
                <strong> {item}</strong>: <span> {value}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-start p-2.5 bg-white`}>
        <div className="mr-2.5 flex items-center justify-center size-[60px] rounded-full bg-sky-800">
          <FontAwesomeIcon icon={faEnvelope} className="text-white text-3xl" />
        </div>
        <div>
          <h5 className="uppercase font-bold text-sm font-redHat">CONTACTS</h5>
          <p className="text-[13px]">
            {EMAILS.map(({ item, value }) => (
              <span key={item} className="block">
                <strong> {item}</strong>: <span> {value}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
