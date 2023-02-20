export type AnimeSearchParamsType = {
  page?: number;
  limit?: number;
  q?: string;
  status?: AnimeStatusType;
  type?: AnimeType;
};

export type AnimeType = "tv" | "movie" | "ova" | "special" | "ona" | "music";

export type AnimeStatusType = "airing" | "complete" | "upcoming";

export type AnimeSearchResType = {
  data: AnimeSearchDataType[];
  pagination: AnimePaginationType;
};

export type AnimePaginationType = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};

export type AnimeSearchDataType = {
  mal_id: number;
  url: string;
  images: ImagesType;
  trailer: TrailerType;
  approved: boolean;
  titles: TitleType[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: AiredType;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: AnimeInfoType[];
  licensors: AnimeInfoType[];
  studios: AnimeInfoType[];
  genres: AnimeInfoType[];
  explicit_genres: AnimeInfoType[];
  themes: AnimeInfoType[];
  demographics: AnimeInfoType[];
};

export type ImagesType = {
  jpg: ImageListType;
  webp: ImageListType;
};

export type TrailerType = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  };
};

export type AiredType = {
  from: string;
  to: string;
  prop: {
    from: AiredDateType;
    to: AiredDateType;
    string: string;
  };
};

export type AiredDateType = {
  day: number;
  month: number;
  year: number;
};

export type AnimeInfoType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type TitleType = {
  type: string;
  title: string;
};

export type ImageListType = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};