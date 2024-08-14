import { getDictionary } from "@/dictionaries";
import { ContactForm } from "../components/contactForms/contactForm";
import PageHeading from "../components/UI/pageHeading/pageHeading";
import ContactCards from "./contactCards/contactCards";

export default async function Contact({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(locale, "contactUs");
  return (
    <div className="w-full max-w-7xl mx-auto mt-5 p-2.5 flex flex-wrap-reverse md:flex-nowrap gap-5">
      <div className={`font-redHat flex flex-col gap-2.5 max-w-full`}>
        <ContactCards locale={locale} />
      </div>
      <div className="md:w-2/3 p-2.5">
        <PageHeading
          title={dict["heading"]}
          headingLvl={3}
          styles={{ fontSize: "20px" }}
        />
        <ContactForm />
      </div>
    </div>
  );
}
