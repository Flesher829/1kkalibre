import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { colors } from "@/lib/styled/colors";
import { Layout } from "@/layout/layout";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout =
    Component.getLayout ?? ((page) => <Layout children={page} />);
  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={colors}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
