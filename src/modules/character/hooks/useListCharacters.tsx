import { useSuspenseQuery } from "@tanstack/react-query";
import { ICharacter } from "../interfaces/ICharacter";
import { CHARACTER_LIST_KEY } from "../constants/characters-query-keys";
import CharacterService from "../services/character.service";
import { IResponse } from "../interfaces/IResponse";
import { useCharacterContext } from "../contexts/useCharacterContext";
import { useCallback } from "react";

export const useListCharacters = () => {
  const { setCharacters, filters } = useCharacterContext();

  const fetchFn = useCallback(
    () => async () => {
      const res = await CharacterService.get({
        params: `&limit=50${
          filters?.name ? `&nameStartsWith=${filters.name}` : ""
        }`,
      });
      const json: IResponse<ICharacter> = await res.json();
      setCharacters(json?.data?.results as ICharacter[]);
      return json;
    },
    [filters, setCharacters]
  );

  const query = useSuspenseQuery<IResponse<ICharacter>>({
    queryKey: [CHARACTER_LIST_KEY, filters],
    queryFn: fetchFn(),
    staleTime: 1000 * 60 * 30,
  });
  if (query?.data?.message) throw new Error("");
  return query;
};
