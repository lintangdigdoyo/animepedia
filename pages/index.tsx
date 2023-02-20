import { GetServerSideProps } from "next";

import style from "styles/components/Home.module.scss";
import { useGetAnimeSearchQuery } from "services/hooks";
import { MOBILE_USER_AGENT } from "utils/constants";
import { ANIME_LIST_PARAMS } from "components/AnimeList/constants";
import Banner from "components/Banner";
import AnimeList from "components/AnimeList";

interface HomeProps {
  deviceType: "mobile" | "desktop";
}

const Home = ({ deviceType }: HomeProps) => {
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
              isMobile={deviceType === "mobile"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = Boolean(UA?.match(MOBILE_USER_AGENT));

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
};

export default Home;
