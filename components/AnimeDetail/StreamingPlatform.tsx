import { BsPlay } from "react-icons/bs";

import style from "styles/components/Detail.module.scss";
import Button from "components/Common/Button";

const StreamingPlatform = () => {
  return (
    <div className={style.detail__container}>
      <Button variant="outlined">
        <BsPlay />
        Netflix
      </Button>
    </div>
  );
};

export default StreamingPlatform;
