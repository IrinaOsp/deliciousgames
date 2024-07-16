import PageHeading from "@/app/components/UI/pageHeading/pageHeading";

export default function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto p-5">
      <PageHeading title={"About Us"} />
      <p className="mb-[15px] text-[15px]">
        <b>Delicious Games</b> is a project that was founded for the purpose of
        producing of the newest boardgame designed by Vladimir Suchy –
        Underwater Cities. Delicious Games is a small czech family project. If
        it would be succesful, it is possible that we will continue in producing
        other boardgames. Our first game – Underwater Cities we would like to
        release this year for introducing it at Spiel ´18 in Essen this autumn,
        where we would like to have english vision of it.
      </p>
      <br />
      <blockquote className="m-5 p-2.5 pl-5 max-w-[900px] rounded-[3px] border-l-[3px] border-pink-600 bg-neutral-200">
        <span className="font-serif	text-[13px] italic text-neutral-800">
          Why are we DELICIOUS? We don´t want to deny that all members of our
          family are crazy about sweets. None of us will resist velvety fine
          chocolate or crunchy kremlin. In the same time we don´t resist great
          and/or funny boardgame. In addition our boardgame is (and we hope
          others will be) amazing – shortly DELICIOUS !
        </span>
      </blockquote>
    </section>
  );
}
