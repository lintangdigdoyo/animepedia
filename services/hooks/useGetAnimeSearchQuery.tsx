import {
  useQuery,
  UseQueryOptions,
  useQueryClient,
} from "@tanstack/react-query";

import { QueryKeyEnum } from "../types";
import { AnimeSearchParamsType, AnimeSearchResType } from "../queries/types";
import { getAnimeSearch } from "../queries";

const useGetAnimeSearchQuery = (
  params?: AnimeSearchParamsType,
  options?: UseQueryOptions<AnimeSearchResType>
) => {
  const queryClient = useQueryClient();

  const fetchNextPage = async (fetchParams?: AnimeSearchParamsType) => {
    const res = await queryClient.fetchQuery({
      queryKey: [QueryKeyEnum.ANIME, fetchParams ?? {}],
      queryFn: () => getAnimeSearch(fetchParams),
    });

    queryClient.setQueryData<AnimeSearchResType | undefined>(
      [QueryKeyEnum.ANIME, params ?? {}],
      (prev) => {
        if (!prev || !res) return prev;
        return {
          ...res,
          data: [...prev.data, ...res.data],
        };
      }
    );
  };

  const resultQuery = useQuery({
    queryKey: [QueryKeyEnum.ANIME, params ?? {}],
    queryFn: () => getAnimeSearch(params),
    ...options,
  });

  return { ...resultQuery, fetchNextPage };
};

export default useGetAnimeSearchQuery;
