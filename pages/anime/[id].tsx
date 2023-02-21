import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import style from "styles/components/Detail.module.scss";
import useGetAnimeFullByIdQuery from "services/hooks/useGetAnimeFullByIdQuery";
import { QueryKeyEnum } from "services/types";
import { getAnimeFullById } from "services/queries";
import Banner from "components/Banner";
import Section from "components/AnimeDetail/Section";
import Video from "components/AnimeDetail/Video";
import AnimeCharacters from "components/AnimeDetail/AnimeCharacters";
import AnimeBackground from "components/AnimeDetail/AnimeBackground";
import StreamingPlatform from "components/AnimeDetail/StreamingPlatform";
import AnimeStatistics from "components/AnimeDetail/AnimeStatistics";

const AnimeDetail = () => {
  const router = useRouter();
  const id = router.query.id?.toString() ?? "";

  const { data: dataAnime, isLoading } = useGetAnimeFullByIdQuery(id, {
    enabled: id !== "",
  });

  return (
    <article className={style.detail}>
      <Banner
        title={dataAnime?.data.titles[0].title ?? ""}
        genres={dataAnime?.data.genres ?? []}
        imgUrl={dataAnime?.data.trailer.images.maximum_image_url ?? ""}
        isLoading={isLoading}
      />
      <Section title="Synopsis">
        <AnimeBackground />
      </Section>
      <Section>
        <StreamingPlatform />
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  const id = query.id?.toString() ?? "";

  await queryClient.prefetchQuery([QueryKeyEnum.ANIME, id], () =>
    getAnimeFullById(id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default AnimeDetail;
