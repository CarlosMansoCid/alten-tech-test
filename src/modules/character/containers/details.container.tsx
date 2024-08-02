import { memo } from "react";
import DetailsHeaderContainer from "./details-header.container";
import { useParams } from "react-router-dom";
import { useGetCharacterById } from "../hooks/useGetCharacterById";
import { ICharacter } from "../interfaces/ICharacter";

const DetailsContainer = () => {
  const { id } = useParams();
  const { data } = useGetCharacterById(id as string);
  return (
    <DetailsHeaderContainer character={data?.data?.results[0] as ICharacter} />
  );
};

export default memo(DetailsContainer);
