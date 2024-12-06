import Container from "@/components/Container";
import {
  ClientSideDataFetching,
  clientSideSourceCode,
} from "@/components/DataFetch/ClientSideDataFetching";
import { TokenData } from "@/types/tokenData";
import {
  ReactQueryDataFetching,
  reactQueryDataFetchingSourceCode,
} from "@/components/DataFetch/ReactQueryDataFetching";
import TokenInfoBox from "@/components/DataFetch/Token/TokenInfoBox";
import FetchTypeBox from "@/components/DataFetch/FetchBoxType";

interface ServerSideDataProps {
  data: TokenData;
}

export default function DataFetching({ data }: ServerSideDataProps) {
  const price = data?.market_data?.current_price?.usd;
  const marketCap = data?.market_data?.market_cap?.usd;
  const priceChange24h = data?.market_data?.price_change_percentage_24h;
  return (
    <Container className="2xl:-mx-3">
      <p className="font-semibold fontSizeFrom2xl text-primary-colors text-center 2xl:gap-5 lg:gap-4 gap-3">
        Three Approaches to Data Fetching in Next.js Applications: Client-Side,
        React Query Library, and Server-Side
      </p>

      <div className="flex 2xl:flex-row flex-col 2xl:gap-2 lg:gap-4 gap-3 w-full">
        <FetchTypeBox
          title="Client-side Data Fetching"
          explanationText={
            "This example shows how to fetch data on the client side using React. It’s useful for cases where the data doesn’t need to be ready during build time or fetched on the server."
          }
          exampleText={
            "Below is an example of how to fetch and display real-time token data from the CoinGecko API. It handles loading and error states while keeping the code simple and reusable."
          }
          codeForSnippet={clientSideSourceCode}
        >
          <div className="flex 2xl:flex-row flex-col items-center 2xl:gap-4 gap-3">
            <ClientSideDataFetching tokenId="bitcoin" />
            <ClientSideDataFetching tokenId="ethereum" />
          </div>
        </FetchTypeBox>

        <FetchTypeBox
          title="Client-side Data Fetching with React Query"
          explanationText={
            "React Query simplifies client-side data fetching by providing efficient features such as caching, background updates, and automatic refetching, making it ideal for real-time data management."
          }
          exampleText={
            "Below is an implementation example that demonstrates fetching and displaying real-time token data for Bitcoin and Ethereum using the CoinGecko API. The solution leverages reusable components, ensuring proper handling of loading and error states for a robust user experience."
          }
          codeForSnippet={reactQueryDataFetchingSourceCode}
        >
          <ReactQueryDataFetching />
        </FetchTypeBox>

        <FetchTypeBox
          title="Server-side Data Fetching with Next.js"
          explanationText={
            "Next.js provides powerful support for server-side data fetching through its getServerSideProps function. This feature enables developers to fetch and render data on the server before delivering the page to the client, ensuring optimal performance and SEO benefits."
          }
          exampleText={
            "Below is an example implementation that fetches real-time data for Bitcoin from the CoinGecko API. This solution includes error handling to ensure graceful fallback behavior when data fetching fails."
          }
          codeForSnippet={serverSideSourceCode}
        >
          <div className="flex 2xl:flex-row flex-col items-center 2xl:gap-4 gap-3">
            <div className="w-full bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col">
              <TokenInfoBox
                name={data?.name}
                symbol={data?.symbol}
                price={price && price}
                market_cap={marketCap && marketCap}
                price_change_24h={
                  priceChange24h ? priceChange24h : Number("N/A")
                }
              />
            </div>
          </div>
        </FetchTypeBox>
      </div>
    </Container>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
}

const serverSideSourceCode = `export async function getServerSideProps() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
}`;
