import Image from "next/image";
import CodeSnippet from "@/components/CodeSnippet";
import Container from "@/components/Container";
import {
  ClientSideDataFetching,
  clientSideSourceCode,
  DataRow,
} from "@/components/DataFetch/ClientSideDataFetching";
import { TokenData } from "@/types/tokenData";
import { formatPrice } from "@/utils/priceFormatting";
import { formatNumericAmountCompact } from "@/utils/formatting";

interface ServerSideDataProps {
  data: TokenData;
}

export default function DataFetching({ data }: ServerSideDataProps) {
  return (
    <Container>
      <p className="font-semibold fontSizeFrom2xl text-primary-colors text-center 2xl:gap-5 lg:gap-4 gap-3">
        Three Approaches to Data Fetching in Next.js Applications: Client-Side,
        Server-Side, and React Query Library
      </p>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/3 w-full flex flex-col mx-auto 2xl:gap-8 lg:gap-7 gap-6 2xl:p-6 lg:p-5 p-4 max-w-5xl rounded-lg shadow-md bg-white dark:bg-black">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl font-bold text-primary-colors">
              Client-side Data Fetching
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-lg text-secondary-colors">
                This component demonstrates client-side data fetching. It is
                used when the data doesn't need to be available at build time or
                rendered on the server.
              </p>
              <div className="flex 2xl:flex-row flex-col items-center 2xl:gap-4 gap-3">
                <ClientSideDataFetching tokenId="bitcoin" />
                <ClientSideDataFetching tokenId="ethereum" />
              </div>
              <p className="text-lg text-secondary-colors">
                Below is an example of client-side data fetching and displaying
                real-time token data from the CoinGecko API.
              </p>
              <CodeSnippet language="typescript" code={clientSideSourceCode} />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col mx-auto 2xl:gap-8 lg:gap-7 gap-6 2xl:p-6 lg:p-5 p-4 max-w-5xl rounded-lg shadow-md bg-white dark:bg-black">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl font-bold text-primary-colors">
              Server-side Data Fetching
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-lg text-secondary-colors">
                Use this when the data is critical for SEO or must be up-to-date
                on every request (e.g., user session data, live prices).
              </p>
              <div className="flex 2xl:flex-row flex-col items-center 2xl:gap-4 gap-3">
                <div className="w-full 2xl:gap-4 gap-3 2xl:p-4 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col">
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/${data?.name}.png`}
                      alt={data?.symbol as string}
                      className="rounded-full 2xl:w-8 lg:w-7 w-7 2xl:h-8 lg:h-7 h-6"
                      width={32}
                      height={32}
                    />
                    <h2 className="fontSizeFromXl font-bold text-primary-colors">
                      {data?.name} ({data?.symbol.toUpperCase()})
                    </h2>
                  </div>
                  <DataRow
                    label="Price"
                    value={formatPrice(
                      data?.price ? data?.price.toString() : "N/A"
                    )}
                  />
                  <DataRow
                    label="Market Cap"
                    value={formatNumericAmountCompact(
                      data?.market_cap ? data?.market_cap.toString() : "N/A"
                    )}
                  />
                  <DataRow
                    label="Price Change (24h)"
                    value={
                      data?.price_change_24h
                        ? `${data?.price_change_24h.toFixed(2)}%`
                        : "N/A"
                    }
                  />
                </div>
              </div>
              <p className="text-lg text-secondary-colors">
                Below example demonstrates server-side data fetching to display
                real-time Bitcoin information from the CoinGecko API, ensuring
                the data is loaded before the page is rendered.
              </p>
              <CodeSnippet language="typescript" code={serverSideSourceCode} />
            </div>
          </div>
        </div>
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

    console.log(data, "data");

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
}`;
