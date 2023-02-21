import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { getAnimeStatistics } from "services/queries";
import { AnimeStatisticsResType } from "services/queries/types";
import { QueryKeyEnum } from "services/types";

const useGetAnimeStatisticsQuery = (
  id: string,
  options?: UseQueryOptions<AnimeStatisticsResType>
) => {
  return useQuery({
    queryKey: [QueryKeyEnum.STATISTICS, id],
    queryFn: () => getAnimeStatistics(id),
    ...options,
  });
};

export default useGetAnimeStatisticsQuery;
