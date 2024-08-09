import Link from "next/link";
import PageHeading from "./components/UI/pageHeading/pageHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NotFoundPage() {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <PageHeading title="THE PAGE YOU REQUESTED CANNOT BE FOUND!" />
      <p className="mb-5">The page you requested cannot be found.</p>
      <Link
        href={"/"}
        className="block w-full h-min uppercase p-[13px] text-center text-white text-sm leading-[14px] bg-sky-800 hover:bg-slate-500"
      >
        {"Continue "}
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </Link>
    </div>
  );
}
