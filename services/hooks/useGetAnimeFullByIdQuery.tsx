import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { getAnimeFullById } from "services/queries";
import { AnimeFullByIdResType } from "services/queries/types";
import { QueryKeyEnum } from "services/types";

const useGetAnimeFullByIdQuery = (
  id: string,
  options?: UseQueryOptions<AnimeFullByIdResType>
) => {
  return useQuery({
    queryKey: [QueryKeyEnum.ANIME, id],
    queryFn: () => getAnimeFullById(id),
    ...options,
  });
};

export default useGetAnimeFullByIdQuery;
