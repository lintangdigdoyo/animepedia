import style from "styles/components/AnimeList.module.scss";

const AnimeListSkeleton = ({ totalCard = 5 }) => {
  return (
    <div className={style.list__skeletonContainer}>
      <div className={style.list__skeletonList}>
        {[...new Array(totalCard)].map((_, index) => (
          <div key={index} className={style.list__skeletonCard} />
        ))}
      </div>
    </div>
  );
};

export default AnimeListSkeleton;
