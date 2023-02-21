import { BsPlay } from "react-icons/bs";

import style from "styles/components/Detail.module.scss";
import { AnimeInfoType } from "services/queries/types";
import Button from "components/Common/Button";

interface StreamingPlatformProps {
  platforms: Omit<AnimeInfoType, "mal_id" | "type">[];
}

const StreamingPlatform = ({ platforms }: StreamingPlatformProps) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={style.detail__container} data-testid="platform-container">
      {platforms.map((platform, index) => (
        <Button
          key={index}
          onClick={() => handleClick(platform.url)}
          variant="outlined"
          data-testid="platform-button"
        >
          <BsPlay data-testid="icon" />
          {platform.name}
        </Button>
      ))}
    </div>
  );
};

export default StreamingPlatform;
