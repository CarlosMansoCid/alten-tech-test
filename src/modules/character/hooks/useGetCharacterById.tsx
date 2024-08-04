import { useCallback } from "react";
import { ICharacter } from "../interfaces/ICharacter";
import CharacterService from "../services/character.service";
import { IResponse } from "../interfaces/IResponse";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CHARACTER_ONE_KEY } from "../constants/characters-query-keys";

export const useGetCharacterById = (id: string) => {
  const fetchFn = useCallback(
    () => async () => {
      const res = await CharacterService.get({ path: `/${id}` });
      const json: IResponse<ICharacter> = await res.json();
      return json;
    },
    [id]
  );

  const query = useSuspenseQuery<IResponse<ICharacter>>({
    queryKey: [CHARACTER_ONE_KEY, id],
    queryFn: fetchFn(),
    staleTime: 1000 * 60 * 30,
  });
  return { ...query };
};
