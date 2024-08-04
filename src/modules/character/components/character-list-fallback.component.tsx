import { memo } from "react";
import CharacterCardSkelleton from "./character-card.skelleton";
import "../styles/character-list.css";

const CharacterListFallback = () => {
  return (
    <ul className="character_list__root">
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
