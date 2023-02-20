import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";

import "styles/base.scss";

import queryClient from "services/queryClient";
import Layout from "components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
