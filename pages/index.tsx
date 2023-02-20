import AnimeList from "components/AnimeList";
import Banner from "components/Banner";
import style from "styles/components/Home.module.scss";
import { useGetAnimeSearchQuery } from "services/hooks";

const Home = () => {
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
          <AnimeList />
        </div>
      </div>
    </>
  );
};

export default Home;
