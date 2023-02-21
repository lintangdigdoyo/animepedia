import style from "styles/components/Detail.module.scss";
import Banner from "components/Banner";
import Section from "components/AnimeDetail/Section";
import Video from "components/AnimeDetail/Video";
import AnimeCharacters from "components/AnimeDetail/AnimeCharacters";
import AnimeBackground from "components/AnimeDetail/AnimeBackground";
import StreamingPlatform from "components/AnimeDetail/StreamingPlatform";
import AnimeStatistics from "components/AnimeDetail/AnimeStatistics";

const AnimeDetail = () => {
  return (
    <article className={style.detail}>
      <Banner
        title="Anime title"
        genres={[{ mal_id: 1, name: "sci-fi", type: "", url: "" }]}
        imgUrl="https://source.unsplash.com/random"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia nulla quo rerum, ea cum suscipit unde quis eum necessitatibus? amet consectetur adipisicing elit. Beatae quia nulla quo rerum, ea cum suscipit unde quis eum necessitatibus"
        fullText
      />
      <Section>
        <StreamingPlatform />
      </Section>
      <Section title="BACKGROUND">
        <AnimeBackground />
      </Section>
      <Section title="WATCH THE TRAILER">
        <Video title="trailer" youtubeId="" />
      </Section>
      <Section>
        <AnimeStatistics />
      </Section>
      <Section title="FEATURED CHARACTERS">
        <AnimeCharacters />
      </Section>
    </article>
  );
};

export default AnimeDetail;
