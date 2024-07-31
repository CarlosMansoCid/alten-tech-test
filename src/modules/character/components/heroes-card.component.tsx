import { memo } from "react";
import { Link } from "react-router-dom";
import { ICharacter } from "../interfaces/ICharacter";

interface ICharacterCard {
  character: ICharacter;
}

const CharacterCard = ({ character }: ICharacterCard) => {
  console.log(character);
  return (
    <article>
      <Link to={"#"}>Heroe</Link>
    </article>
  );
};

export default memo(CharacterCard);
