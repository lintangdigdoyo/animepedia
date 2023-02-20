import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { QueryKeyEnum } from "../types";
import { AnimeSearchParamsType, AnimeSearchResType } from "../queries/types";
import { getAnimeSearch } from "../queries";

const useGetAnimeSearchQuery = (
  params?: AnimeSearchParamsType,
  options?: UseQueryOptions<AnimeSearchResType>
) => {
  return useQuery({
    queryKey: [QueryKeyEnum.ANIME, params],
    queryFn: () => getAnimeSearch(params),
    ...options,
  });
};

export default useGetAnimeSearchQuery;
