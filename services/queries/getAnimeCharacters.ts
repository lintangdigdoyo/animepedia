import api from "services/api";
import { AnimeCharactersResType } from "./types";

const getAnimeCharacters = async (id: string) => {
  const res = await api.get<AnimeCharactersResType>(`/anime/${id}/characters`);
  return res.data;
};

export default getAnimeCharacters;
