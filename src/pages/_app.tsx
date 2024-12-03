import "@/styles/globals.css";
import "@/styles/components.css";
import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import PrivyProviderWrapper from "@/providers/PrivyProviderWrapper";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="dark"
    >
      <PrivyProviderWrapper>
        {/* <AppProvider> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>

        {/* </AppProvider> */}
      </PrivyProviderWrapper>
    </ThemeProvider>
  );
}
