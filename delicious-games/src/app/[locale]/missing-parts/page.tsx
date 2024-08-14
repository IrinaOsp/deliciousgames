import { getDictionary } from "@/dictionaries";
import { ContactFormMissingParts } from "../components/contactForms/contactFormMissingParts";
import PageHeading from "../components/UI/pageHeading/pageHeading";

export default async function MissingParts({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(locale, "missingParts");

  return (
    <div className="w-full max-w-7xl mx-auto mt-5 p-2.5 flex flex-col gap-5">
      <PageHeading
        title={dict["heading"]}
        headingLvl={3}
        styles={{ fontSize: "20px" }}
      />
      <ContactFormMissingParts />
    </div>
  );
}
