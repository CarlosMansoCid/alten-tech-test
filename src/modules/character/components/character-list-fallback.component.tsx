import { memo } from "react";
import "../styles/character-list.css";
import CharacterCardSkelleton from "./character-card.skelleton";

const CharacterListFallback = () => {
  return (
    <section className="character_list__root">
      {new Array(27).fill("").map(() => {
        return <CharacterCardSkelleton key={`${crypto.randomUUID()}`} />;
      })}
    </section>
  );
};

export default memo(CharacterListFallback);
