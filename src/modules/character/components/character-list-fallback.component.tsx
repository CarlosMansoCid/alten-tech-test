import { memo } from "react";
import "../styles/character-list.css";
import CharacterCardSkelleton from "./character-card.skelleton";

const CharacterListFallback = () => {
  return (
    <ul className="character_list__root" aria-busy>
      {new Array(27).fill("").map(() => {
        return (
          <li>
            <CharacterCardSkelleton key={`${crypto.randomUUID()}`} />
          </li>
        );
      })}
    </ul>
  );
};

export default memo(CharacterListFallback);
