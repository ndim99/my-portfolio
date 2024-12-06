import "@/styles/globals.css";
import "@/styles/components.css";
import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import PrivyProviderWrapper from "@/providers/PrivyProviderWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 2, // 2 minutes
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="dark"
    >
      <QueryClientProvider client={queryClient}>
        <PrivyProviderWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PrivyProviderWrapper>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
