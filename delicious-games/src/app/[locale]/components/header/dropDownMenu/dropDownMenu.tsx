import { Dispatch, SetStateAction } from "react";
import DropDownMenuItem from "../dropDownMenuItem/dropDownMenuItem";
import { useProducts } from "@/hooks/useProducts";

export default function DropDownMenu({
  setDropDownMenuVisibility,
}: {
  setDropDownMenuVisibility: Dispatch<SetStateAction<boolean>>;
}) {
  const products = useProducts("main");

  const handleDropDownEnter = () => {
    setDropDownMenuVisibility(true);
  };

  const handleDropDownLeave = () => {
    setDropDownMenuVisibility(false);
  };

  return (
    <div
      className="absolute z-10 top-10 left-5 m-5"
      style={{ transform: "translate3d(-50%, -10px, 0)" }}
      onMouseEnter={handleDropDownEnter}
      onMouseLeave={handleDropDownLeave}
    >
      <i className="block mx-auto size-0 border-x-8 border-transparent border-b-8 border-b-white"></i>
      <ul className="relative bg-slate-50 shadow-xl">
        {products &&
          products.map(({ title, path, img }) => (
            <DropDownMenuItem key={title} title={title} link={path} img={img} />
          ))}
      </ul>
    </div>
  );
}
