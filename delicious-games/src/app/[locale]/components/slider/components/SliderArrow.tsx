import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomArrowProps } from "react-slick";
import "./SliderArrow.css";

export default function SliderArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="custom-next max-lg:hidden z-10 absolute top-[58%] right-0 text-base size-[40px] bg-white text-slate-800 hover:bg-slate-800 hover:text-white"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
}
