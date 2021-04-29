import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ChakraProvider, GlobalStyle, extendTheme } from '@chakra-ui/react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>House Club by Luis Locon</title>
      </Head>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
