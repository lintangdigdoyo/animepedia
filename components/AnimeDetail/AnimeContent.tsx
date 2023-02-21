import style from "styles/components/Detail.module.scss";

interface AnimeContentProps {
  content: string;
}

const AnimeContent = ({ content }: AnimeContentProps) => {
  return (
    <div className={style.detail__textContainer}>
      <p className={style.detail__text}>{content}</p>
    </div>
  );
};

export default AnimeContent;
