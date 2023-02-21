import api from "../api";
import { AnimeFullByIdResType } from "./types";

const getAnimeFullById = async (id: string) => {
  const res = await api.get<AnimeFullByIdResType>(`/anime/${id}/full`);
  return res.data;
};

export default getAnimeFullById;
