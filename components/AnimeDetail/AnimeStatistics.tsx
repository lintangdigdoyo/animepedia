import style from "styles/components/Detail.module.scss";
import { useGetAnimeStatisticsQuery } from "services/hooks";
import { ANIME_STATISTICS_KEYS } from "./constants";
import Statistic from "./Statistic";

interface AnimeStatisticsProps {
  id: string;
}

const AnimeStatistics = ({ id }: AnimeStatisticsProps) => {
  const { data } = useGetAnimeStatisticsQuery(id);

  return (
    <div className={style.detail__container}>
      {ANIME_STATISTICS_KEYS.map((statistic, index) => (
        <Statistic
          key={index}
          title={statistic.title}
          text={data?.data[statistic.key].toLocaleString() ?? ""}
        />
      ))}
    </div>
  );
};

export default AnimeStatistics;
