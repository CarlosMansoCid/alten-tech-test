import { useCallback } from "react";
import CharacterService from "../services/character.service";
import { IResponse } from "../interfaces/IResponse";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CHARACTER_COMIC_LIST_KEY } from "../constants/characters-query-keys";
import { IComic } from "../interfaces/IComic";

export const useGetCharacterComics = (id: string) => {
  const fetchFn = useCallback(
    () => async () => {
      const res = await CharacterService.get({ path: `/${id}/comics` });
      const json = await res.json();
      return json;
    },
    [id]
  );

  const query = useSuspenseQuery<IResponse<IComic>>({
    queryKey: [CHARACTER_COMIC_LIST_KEY, id],
    queryFn: fetchFn(),
  });
  return { ...query };
};
