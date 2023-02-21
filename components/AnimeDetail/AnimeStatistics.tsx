import style from "styles/components/Detail.module.scss";
import Statistic from "./Statistic";

const AnimeStatistics = () => {
  return (
    <div className={style.detail__container}>
      <Statistic title="Watching" text="10.000" />
    </div>
  );
};

export default AnimeStatistics;
