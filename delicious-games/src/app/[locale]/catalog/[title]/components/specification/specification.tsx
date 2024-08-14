import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { getDictionary } from "@/dictionaries";

export default async function Specification({
  players,
  playingTime,
  minAge,
  locale,
}: {
  players: string;
  playingTime: string;
  minAge: number;
  locale: string;
}) {
  const dict = await getDictionary(locale, "gamePage");

  return (
    <div className="p-[5px] flex max-xl:flex-col gap-2.5">
      <div className="flex-1 bg-zinc-200 p-[15px] flex rounded-[5px] gap-2.5">
        <div className="size-10 bg-pink-600 rounded-full text-white flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <span className="block uppercase text-sm font-bold">
            {dict["nrOfPlayers"]}:
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
            {dict["Playing time"]}:
          </span>
          <span className="block text-base">
            {playingTime.endsWith("player")
              ? playingTime
              : `${playingTime} min.`}
          </span>
        </div>
      </div>
      <div className="flex-1 bg-zinc-200 p-[15px] flex rounded-[5px] gap-2.5">
        <div className="size-10 bg-pink-600 rounded-full text-white flex justify-center items-center">
          <FontAwesomeIcon icon={faChild} />
        </div>
        <div>
          <span className="block uppercase text-sm font-bold">
            {dict["Age"]}:
          </span>
          {minAge && <span className="block text-base">{`${minAge} +`}</span>}
        </div>
      </div>
    </div>
  );
}
