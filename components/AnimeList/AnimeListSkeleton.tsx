import style from "styles/components/AnimeList.module.scss";

const AnimeListSkeleton = ({ totalCard = 5 }) => {
  return (
    <div
      className={style.list__skeletonContainer}
      data-testid="skeleton-container"
    >
      <div className={style.list__skeletonList} data-testid="skeleton-list">
        {[...new Array(totalCard)].map((_, index) => (
          <div
            key={index}
            className={style.list__skeletonCard}
            data-testid="skeleton-card"
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeListSkeleton;
