import api from "../api";
import { AnimeSearchResType, AnimeSearchParamsType } from "./types";

const getAnimeSearch = async (params?: AnimeSearchParamsType) => {
  const res = await api.get<AnimeSearchResType>("/anime", {
    params,
  });
  return res.data;
};

export default getAnimeSearch;
