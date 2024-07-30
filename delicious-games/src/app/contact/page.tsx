import PageHeading from "../components/UI/pageHeading/pageHeading";
import { redHat } from "../fonts";
import ContactCards from "./contactCards/contactCards";
import ContactForm from "../components/contactForm/contactForm";

export default function Contact() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-5 p-2.5 flex flex-wrap-reverse md:flex-nowrap gap-5">
      <div className={`${redHat.variable} flex flex-col gap-2.5 max-w-full`}>
        <ContactCards />
      </div>
      <div className="md:w-2/3 p-2.5">
        <PageHeading
          title={"Contact us"}
          headingLvl={3}
          styles={{ fontSize: "20px" }}
        />
        <ContactForm />
      </div>
    </div>
  );
}
