import { AnimeListParams } from "./types";

export const ANIME_LIST_PARAMS: AnimeListParams[] = [
  {
    title: "Anime List",
    placeholder: "Search list of anime",
    params: {
      limit: 10,
    },
  },
  {
    title: "Tv Series",
    placeholder: "Search tv series",
    params: {
      limit: 10,
      type: "tv",
    },
  },
];
