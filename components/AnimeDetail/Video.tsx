import { useRef } from "react";

import style from "styles/components/Detail.module.scss";
import useOnScreen from "utils/hooks/useOnScreen";

interface VideoProps {
  youtubeId: string;
  title: string;
}

const Video = ({ youtubeId, title }: VideoProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, true);

  return (
    <div ref={ref} className={style.detail__container}>
      {onScreen && (
        <iframe
          data-testid="iframe-video"
          width="700"
          height="394"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?wmode=opaque`}
          title={title}
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default Video;
