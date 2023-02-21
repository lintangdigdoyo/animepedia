import { BsEyeFill } from "react-icons/bs";

import style from "styles/components/Detail.module.scss";

interface StatisticsProps {
  title: string;
  text: string;
}

const Statistic = ({ title, text }: StatisticsProps) => {
  return (
    <>
      <div className={style.detail__pill}>
        <span data-testid="title">{title}</span>
        <span className={style.detail__icon} data-testid="content">
          <BsEyeFill data-testid="icon" /> {text}
        </span>
      </div>
    </>
  );
};

export default Statistic;
