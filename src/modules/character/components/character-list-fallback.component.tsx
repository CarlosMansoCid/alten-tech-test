import { memo } from "react";
import CharacterCardSkelleton from "./character-card.skelleton";
import "../styles/character-list.css";

const CharacterListFallback = () => {
  return (
    <ul className="character_list__root">
      {new Array(27).fill("").map((_, index) => {
        return (
          <li key={`${index}=${crypto.randomUUID()}`}>
            <CharacterCardSkelleton />
          </li>
        );
      })}
    </ul>
  );
};

export default memo(CharacterListFallback);
