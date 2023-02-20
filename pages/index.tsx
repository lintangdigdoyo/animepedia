import AnimeList from "components/AnimeList";
import Banner from "components/Banner";
import style from "styles/components/Home.module.scss";

const Home = () => {
  return (
    <>
      <Banner />
      <div className={style.home__container}>
        <div className={style.home__listContainer}>
          <AnimeList />
        </div>
      </div>
    </>
  );
};

export default Home;
