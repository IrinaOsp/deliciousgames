import PageHeading from "../components/UI/pageHeading/pageHeading";
import { redHat } from "../fonts";
import ContactCards from "./contactCards/contactCards";
import ContactForm from "./contactForm/contactForm";

export default function Contact() {
  return (
    <div className="w-full mt-5 p-2.5 flex flex-wrap sm:flex-nowrap gap-5">
      <div
        className={`${redHat.variable} flex flex-col gap-2.5 max-w-full min-w-max`}
      >
        <ContactCards />
      </div>
      <div className="w-2/3 p-2.5">
        <PageHeading title={"Contact us"} headingLvl={3} fontSize={20} />
        <ContactForm />
      </div>
    </div>
  );
}
