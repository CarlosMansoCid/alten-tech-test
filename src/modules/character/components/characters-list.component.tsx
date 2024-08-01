import { memo } from "react";
import { ICharacter } from "../interfaces/ICharacter";
import CharacterCardComponent from "./character-card.component";

interface ICharactersList {
  characters: ICharacter[] | [];
}

const ChatactersList = ({ characters }: ICharactersList) => {
  return (
    <>
      {characters?.map((character: ICharacter) => {
        return (
          <CharacterCardComponent character={character} key={character.id} />
        );
      })}
    </>
  );
};

export default memo(ChatactersList);
