import '@styles/globals.css';
import '@components/components.scss';
import './pages.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { APP_STAGE } from '@constants/environments';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from '@lib/gtag';
import Header from '@/src/components/header';
import Footer from '../components/footer';
import QuickMenu from '../components/quick-menu';

if (APP_STAGE === 'test') {
  require('../mocks');
}

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    staleTime: Infinity,
    cacheTime: 0,
    retry: 1,
    refetchOnWindowFocus: false,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO} title="베스파 신촌점" />
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <QuickMenu />
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
