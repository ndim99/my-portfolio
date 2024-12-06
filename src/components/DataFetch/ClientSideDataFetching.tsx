import { TokenData } from "@/types/tokenData";
import { useState, useEffect } from "react";
import TokenInfoBox from "./Token/TokenInfoBox";

interface ClientSideDataFetchingProps {
  tokenId: string;
}

export function ClientSideDataFetching({
  tokenId,
}: ClientSideDataFetchingProps) {
  const [data, setData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch token data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${tokenId}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        const tokenData: TokenData = {
          name: result.name,
          symbol: result.symbol,
          image: result.image.small,
          market_data: {
            current_price: { usd: result.market_data.current_price.usd },
            market_cap: { usd: result.market_data.market_cap.usd },
            price_change_percentage_24h:
              result.market_data.price_change_percentage_24h,
          },
        };
        setData(tokenData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tokenId]); // Dependency ensures re-fetching if tokenId changes

  const name = data?.name as string;
  const symbol = data?.symbol as string;
  const price = data?.market_data.current_price.usd as string;
  const marketCap = data?.market_data.market_cap.usd as string;
  const priceChange24h = data?.market_data
    .price_change_percentage_24h as number;

  return (
    <TokenInfoBox
      loading={loading}
      error={error}
      name={name}
      symbol={symbol}
      price={price ?? price}
      market_cap={marketCap ?? marketCap}
      price_change_24h={priceChange24h}
    />
  );
}

export const clientSideSourceCode = `import { TokenData } from "@/types/tokenData";
import { useState, useEffect } from "react";
import TokenInfoBox from "./Token/TokenInfoBox";

interface ClientSideDataFetchingProps {
  tokenId: string;
}

export function ClientSideDataFetching({
  tokenId,
}: ClientSideDataFetchingProps) {
  const [data, setData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch token data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          https://api.coingecko.com/api/v3/coins/tokenId
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        const tokenData: TokenData = {
          name: result.name,
          symbol: result.symbol,
          image: result.image.small,
          market_data: {
            current_price: { usd: result.market_data.current_price.usd },
            market_cap: { usd: result.market_data.market_cap.usd },
            price_change_percentage_24h:
              result.market_data.price_change_percentage_24h,
          },
        };
        setData(tokenData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tokenId]); // Dependency ensures re-fetching if tokenId changes

  const name = data?.name as string;
  const symbol = data?.symbol as string;
  const price = data?.market_data.current_price.usd as string;
  const marketCap = data?.market_data.market_cap.usd as string;
  const priceChange24h = data?.market_data
    .price_change_percentage_24h as number;

  return (
    <TokenInfoBox
      loading={loading}
      error={error}
      name={name}
      symbol={symbol}
      price={price ?? price}
      market_cap={marketCap ?? marketCap}
      price_change_24h={priceChange24h}
    />
  );
}`;
