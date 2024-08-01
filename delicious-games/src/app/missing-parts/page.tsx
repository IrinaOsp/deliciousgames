import { ContactForm } from "../components/contactFormMissingParts/contactForm";
import PageHeading from "../components/UI/pageHeading/pageHeading";

export default function MissingParts() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-5 p-2.5 flex flex-col gap-5">
      <PageHeading
        title={"Missing Parts / Damaged components"}
        headingLvl={3}
        styles={{ fontSize: "20px" }}
      />
      <ContactForm />
    </div>
  );
}
