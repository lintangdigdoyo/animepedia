import Image from "next/image";

import style from "styles/components/Banner.module.scss";
import Button from "components/Common/Button";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.banner__content}>
        <h4 className={style.banner__title}>Anime Title</h4>
        <div className={style.banner__genresContainer}>
          <span className={style.banner__genre}>Action</span>
          <span className={style.banner__genre}>Sci-fi</span>
        </div>
        <p className={style.banner__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit
          enim voluptatum aut aliquid illum, temporibus maxime ab accusantium
          quae harum? Consequuntur repellendus totam saepe doloremque rerum?
          Placeat quidem nostrum quam quod temporibus enim vitae aut
          repudiandae, modi quos provident?
        </p>
        <Button variant="outlined">More Info</Button>
      </div>
      <Image
        className={style.banner__image}
        src="https://source.unsplash.com/random/1500x450"
        alt="anime title"
        fill
        priority
      />
    </div>
  );
};

export default Banner;
