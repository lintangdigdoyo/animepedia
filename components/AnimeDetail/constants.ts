import { AnimeStatisticsDataType } from "services/queries/types";

export const ANIME_STATISTICS_KEYS: {
  title: string;
  key: keyof AnimeStatisticsDataType;
}[] = [
  {
    title: "Watching",
    key: "watching",
  },
  {
    title: "Plan to watch",
    key: "plan_to_watch",
  },
];
