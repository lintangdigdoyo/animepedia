import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { getAnimeCharacters } from "services/queries";
import { AnimeCharactersResType } from "services/queries/types";
import { QueryKeyEnum } from "services/types";

const useGetAnimeCharactersQuery = (
  id: string,
  options?: UseQueryOptions<AnimeCharactersResType>
) => {
  return useQuery({
    queryKey: [QueryKeyEnum.CHARACTERS, id],
    queryFn: () => getAnimeCharacters(id),
    ...options,
  });
};

export default useGetAnimeCharactersQuery;
