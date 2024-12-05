import CodeSnippet from "@/components/CodeSnippet";
import Container from "@/components/Container";
import {
  ClientSideDataFetching,
  clientSideSourceCode,
} from "@/components/DataFetch/ClientSideDataFetching";

export default function DataFetching() {
  return (
    <Container>
      <p className="font-semibold fontSizeFrom2xl text-primary-colors text-center">
        Three Approaches to Data Fetching in Next.js Applications: Client-Side,
        Server-Side, and React Query Library
      </p>
      <div className="lg:w-1/3 w-full flex flex-col mx-auto 2xl:gap-8 lg:gap-7 gap-6 2xl:p-6 lg:p-5 p-4 max-w-5xl rounded-lg shadow-md bg-white dark:bg-black">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-xl font-bold text-primary-colors">
            Client-side Data Fetching
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-secondary-colors">
              This component demonstrates client-side data fetching. It is used
              when the data doesn't need to be available at build time or
              rendered on the server.
            </p>
            <div className="flex 2xl:flex-row flex-col items-center 2xl:gap-4 gap-3">
              <ClientSideDataFetching tokenId="bitcoin" />
              <ClientSideDataFetching tokenId="ethereum" />
            </div>
            <p className="text-lg text-secondary-colors">
              Below is an example of fetching and displaying real-time token
              data from the CoinGecko API.
            </p>
            <CodeSnippet language="typescript" code={clientSideSourceCode} />
          </div>
        </div>
      </div>
    </Container>
  );
}
