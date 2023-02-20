import style from "styles/components/Home.module.scss";
import { useGetAnimeSearchQuery } from "services/hooks";
import useMediaQuery from "utils/hooks/useMediaQuery";
import { ANIME_LIST_PARAMS } from "components/AnimeList/constants";
import Banner from "components/Banner";
import AnimeList from "components/AnimeList";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 640px");

  const { data: dataAiring, isLoading: isLoadingAiring } =
    useGetAnimeSearchQuery({
      page: 1,
      limit: 1,
      status: "airing",
    });

  const airingAnime = dataAiring?.data[0];

  return (
    <>
      <Banner
        title={airingAnime?.titles[0].title ?? ""}
        genres={airingAnime?.genres ?? []}
        description={airingAnime?.synopsis ?? ""}
        imgUrl={airingAnime?.trailer.images.maximum_image_url ?? ""}
        buttonLabel="More Info"
        isLoading={isLoadingAiring}
      />
      <div className={style.home__container}>
        <div className={style.home__listContainer}>
          {ANIME_LIST_PARAMS.map((item, index) => (
            <AnimeList
              key={index}
              title={item.title}
              animeSearchParams={item.params}
              searchPlaceholder={item.placeholder}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
