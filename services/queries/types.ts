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
  /** @deprecated use titles field instead */
  title: string;
  /** @deprecated use titles field instead */
  title_english: string;
  /** @deprecated use titles field instead */
  title_japanese: string;
  /** @deprecated use titles field instead */
  title_synonyms: string[];
};

export type AnimeFullByIdResType = {
  data: AnimeFullByIdDataType;
};

export type AnimeFullByIdDataType = {
  relations: RelationsType[];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: Omit<AnimeInfoType, "mal_id" | "type">[];
  streaming: Omit<AnimeInfoType, "mal_id" | "type">[];
} & AnimeSearchDataType;

export type AnimeStatisticsResType = {
  data: AnimeStatisticsDataType;
};

export type AnimeStatisticsDataType = {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: [
    {
      score: number;
      votes: number;
      percentage: number;
    }
  ];
};

export type AnimeCharactersResType = {
  data: AnimeCharactersDataType[];
};

export type AnimeCharactersDataType = {
  character: CharacterType;
  role: string;
  voice_actors: VoiceActorType[];
};

export type VoiceActorType = {
  person: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  language: string;
};

export type CharacterType = {
  mal_id: number;
  url: string;
  images: ImagesType;
  name: string;
};

export type ImagesType = {
  jpg: ImageListType;
  webp: ImageListType;
};

export type RelationsType = {
  relation: string;
  entry: EntryType[];
};

export type EntryType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
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
