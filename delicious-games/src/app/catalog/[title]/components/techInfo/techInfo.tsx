import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faClock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function TechnicalInfo({
  players,
  playingTime,
  minAge,
}: {
  players: string;
  playingTime: string;
  minAge: number;
}) {
  return (
    <div className="p-[5px] flex max-xl:flex-col gap-2.5">
      <div className="flex-1 bg-zinc-200 p-[15px] flex rounded-[5px] gap-2.5">
        <div className="size-10 bg-pink-600 rounded-full text-white flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <span className="block uppercase text-sm font-bold">
            Nr. of Players:
          </span>
          <span className="block text-base">{players}</span>
        </div>
      </div>
      <div className="flex-1 bg-zinc-200 p-[15px] flex rounded-[5px] gap-2.5">
        <div className="size-10 bg-pink-600 rounded-full text-white flex justify-center items-center">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div>
          <span className="block uppercase text-sm font-bold">
            Playing time:
          </span>
          <span className="block text-base">{playingTime}</span>
        </div>
      </div>
      <div className="flex-1 bg-zinc-200 p-[15px] flex rounded-[5px] gap-2.5">
        <div className="size-10 bg-pink-600 rounded-full text-white flex justify-center items-center">
          <FontAwesomeIcon icon={faChild} />
        </div>
        <div>
          <span className="block uppercase text-sm font-bold">Age:</span>
          <span className="block text-base">{`${minAge} +`}</span>
        </div>
      </div>
    </div>
  );
}
