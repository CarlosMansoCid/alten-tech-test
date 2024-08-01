import { memo } from "react";
import "../../common/styles/common.css";
import { useParams } from "react-router-dom";
import DetailsHeaderContainer from "../containers/details-header.container";
import { characterListMock } from "../mock/characterList.mock";
import { ICharacter } from "../interfaces/ICharacter";

const DetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <section className="section_details__content_container">
      <DetailsHeaderContainer
        character={
          characterListMock.filter(
            (character: ICharacter) => character.id === Number(id)
          )[0]
        }
      />
    </section>
  );
};

export default memo(DetailsPage);
