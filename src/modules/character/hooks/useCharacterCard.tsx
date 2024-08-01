import { useCharacterContext } from "../contexts/useCharacterContext";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../interfaces/ICharacter";

export const useCharacterCard = (cardCharacter: ICharacter) => {
  const { setFavorites, favorites } = useCharacterContext();

  const isFavorite =
    favorites.filter((character: ICharacter) => {
      return character.id === cardCharacter.id;
    }).length !== 0;

  const navigate = useNavigate();

  const toggleFavorite = () => {
    isFavorite
      ? setFavorites(
          favorites.filter((favoriteCharacter: ICharacter) => {
            return favoriteCharacter.id !== cardCharacter.id;
          })
        )
      : setFavorites([...favorites, cardCharacter]);
  };

  return { navigate, isFavorite, toggleFavorite };
};
