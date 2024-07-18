import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function PlusButton({
  state,
  dispatch,
}: {
  state: boolean;
  dispatch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => dispatch(!state)}
      className={`flex justify-center items-center size-5 rounded-full border-2 ${
        state ? "border-red-500" : "border-slate-100"
      }`}
    >
      <FontAwesomeIcon
        icon={state ? faMinus : faPlus}
        className={`${state ? "text-red-600" : "text-inherit"} w-4`}
      />
    </button>
  );
}
