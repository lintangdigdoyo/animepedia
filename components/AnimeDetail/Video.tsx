import style from "styles/components/Detail.module.scss";

interface VideoProps {
  youtubeId: string;
  title: string;
}

const Video = ({ youtubeId, title }: VideoProps) => (
  <div className={style.detail__container}>
    <iframe
      width="700"
      height="394"
      src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&wmode=opaque`}
      title={title}
      allowFullScreen
      loading="lazy"
    />
  </div>
);

export default Video;
