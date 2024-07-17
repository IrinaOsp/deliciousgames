import Image from "next/image";
import PageHeading from "@/app/components/UI/pageHeading/pageHeading";

export default function GameComponents({ img }: { img: string }) {
  return (
    <section>
      <PageHeading
        title="Components"
        headingLvl={3}
        styles={{ fontSize: "14px", color: "white" }}
      />
      <div className="w-full h-auto">
        <Image
          src={img}
          alt="Components"
          width={1280}
          height={675}
          className="block w-full h-auto"
        />
      </div>
    </section>
  );
}
