import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainButton({
  link,
  text,
  styles,
  button,
}: {
  link: string;
  text: string;
  styles?: React.CSSProperties;
  button?: boolean;
}) {
  return button ? (
    <button
      className="block mx-auto mt-1/4 w-max font-normal text-sm text-white uppercase p-3 bg-pink-600 hover:bg-slate-500
    opacity-0 animate-fadeIn delay-400"
      style={styles}
    >
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
    </button>
  ) : (
    <Link
      href={link}
      className="block mx-auto mt-1/4 w-max font-normal text-sm text-white uppercase p-3 bg-pink-600 hover:bg-slate-500
    opacity-0 animate-fadeIn delay-400"
      style={styles}
    >
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
    </Link>
  );
}
