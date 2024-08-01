import { memo } from "react";
import { useParams } from "react-router-dom";
import DetailsHeaderContainer from "../containers/details-header.container";
import { ICharacter } from "../interfaces/ICharacter";
import ComicsListContainer from "../containers/comics-list.container";
import { useCharacterContext } from "../contexts/useCharacterContext";
import "../../common/styles/common.css";

const DetailsPage = () => {
  const { id } = useParams();
  const { characters } = useCharacterContext();
  const chatacter = characters?.filter((character: ICharacter) => {
    return String(character.id) === id;
  })[0];
  return (
    <>
      <section className="section_details__content_container">
        <DetailsHeaderContainer character={chatacter} />
      </section>
      <ComicsListContainer />
    </>
  );
};

export default memo(DetailsPage);
