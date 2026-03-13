import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, type ReactElement, type ReactNode } from "react";
import type { NextPage } from "next";
import { Provider } from 'react-redux';
import Layout from '@/components/layouts';
import { Toaster } from 'react-hot-toast';
import { store, persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthWrapper } from "@/hocs/AuthWrapper";
import AppInitializer from '@/init/AppInitializer';
import Head from 'next/head';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  requiresAuth?:boolean
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppInitializer />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: '8px',
                background: '#1f2937',
                color: '#fff',
              },
            }}
          />
          {Component.requiresAuth
            ? getLayout(
                <AuthWrapper>
                  <Component {...pageProps} />
                </AuthWrapper>
              )
            : getLayout(<Component {...pageProps} />)
          }
        </PersistGate>
      </Provider>
    </>
  );
}
