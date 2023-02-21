import api from "services/api";
import { AnimeStatisticsResType } from "./types";

const getAnimeStatistics = async (id: string) => {
  const res = await api.get<AnimeStatisticsResType>(`/anime/${id}/statistics`);
  return res.data;
};

export default getAnimeStatistics;
