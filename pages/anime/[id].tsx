import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import style from "styles/components/Detail.module.scss";
import { useGetAnimeFullByIdQuery } from "services/hooks";
import { QueryKeyEnum } from "services/types";
import { getAnimeFullById, getAnimeStatistics } from "services/queries";
import Banner from "components/Banner";
import Section from "components/AnimeDetail/Section";
import Video from "components/AnimeDetail/Video";
import AnimeCharacters from "components/AnimeDetail/AnimeCharacters";
import AnimeContent from "components/AnimeDetail/AnimeContent";
import StreamingPlatform from "components/AnimeDetail/StreamingPlatform";
import AnimeStatistics from "components/AnimeDetail/AnimeStatistics";

const AnimeDetail = () => {
  const router = useRouter();
  const id = router.query.id?.toString() ?? "";

  const { data: dataAnime, isLoading } = useGetAnimeFullByIdQuery(id);

  return (
    <article className={style.detail}>
      {dataAnime?.data?.trailer.embed_url && (
        <Banner
          title={dataAnime?.data?.titles[0].title ?? ""}
          genres={dataAnime?.data?.genres ?? []}
          imgUrl={dataAnime?.data?.trailer.images.maximum_image_url ?? ""}
          isLoading={isLoading}
        />
      )}
      <Section title="SYNOPSIS">
        <AnimeContent content={dataAnime?.data?.synopsis ?? ""} />
      </Section>
      {dataAnime?.data?.streaming.length !== 0 && (
        <Section>
          <StreamingPlatform platforms={dataAnime?.data?.streaming ?? []} />
        </Section>
      )}
      {dataAnime?.data?.trailer.embed_url && (
        <Section title="WATCH THE TRAILER">
          <Video
            title={dataAnime?.data?.titles[0].title ?? "trailer"}
            youtubeId={dataAnime?.data?.trailer.youtube_id ?? ""}
          />
        </Section>
      )}
      <Section>
        <AnimeStatistics id={id} />
      </Section>
      <Section title="FEATURED CHARACTERS">
        <AnimeCharacters id={id} />
      </Section>
    </article>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  const id = query.id?.toString() ?? "";

  try {
    await queryClient.fetchQuery([QueryKeyEnum.ANIME, id], () =>
      getAnimeFullById(id)
    );
    await queryClient.fetchQuery([QueryKeyEnum.STATISTICS, id], () =>
      getAnimeStatistics(id)
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default AnimeDetail;
