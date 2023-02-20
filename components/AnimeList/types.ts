import { AnimeType } from "services/queries/types";

export type AnimeListParams = {
  title: string;
  placeholder: string;
  params: {
    limit: number;
    type?: AnimeType;
  };
};
