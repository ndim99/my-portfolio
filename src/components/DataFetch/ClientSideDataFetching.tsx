import Image from "next/image";
import { TokenData } from "@/types/tokenData";
import { useState, useEffect } from "react";
import { formatNumericAmountCompact } from "@/utils/formatting";
import { formatPrice } from "@/utils/priceFormatting";
import LoadingIcon from "../Icons/LoadingIcon";

interface ClientSideDataFetchingProps {
  tokenId: string;
}
export const DataRow = ({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) => {
  const isPriceChange = label === "Price Change (24h)";
  const isNegative = typeof value === "string" && value.includes("-");

  return (
    <div className="flex justify-between items-center fontSizeFromLg text-primary-colors">
      <span className="font-normal">{label}</span>
      <span
        className={`font-semibold ${
          isPriceChange ? (isNegative ? "text-red-500" : "text-green-500") : ""
        }`}
      >
        {value || "N/A"}
      </span>
    </div>
  );
};

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
          price: result.market_data.current_price.usd,
          market_cap: result.market_data.market_cap.usd,
          price_change_24h: result.market_data.price_change_percentage_24h,
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

  return (
    <div className="w-full 2xl:p-4 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col justify-center">
      {loading ? (
        <div className="flex items-center justify-center space-x-2 fontSizeFromXl font-semibold text-primary-colors">
          <LoadingIcon />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center fontSizeFromXl font-semibold text-red-500">
          Error: {error}
        </div>
      ) : (
        <div className="flex flex-col justify-between 2xl:gap-4 gap-3">
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
            value={formatPrice(data?.price.toString() as string)}
          />
          <DataRow
            label="Market Cap"
            value={formatNumericAmountCompact(
              data?.market_cap.toString() as string
            )}
          />
          <DataRow
            label="Price Change (24h)"
            value={`${data?.price_change_24h.toFixed(2)}%`}
          />
        </div>
      )}
    </div>
  );
}

export const clientSideSourceCode = `import Image from "next/image";
import { TokenData } from "@/types/tokenData";
import { useState, useEffect } from "react";
import { formatNumericAmountCompact } from "@/utils/formatting";
import { formatPrice } from "@/utils/priceFormatting";
import LoadingIcon from "../Icons/LoadingIcon";

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
          price: result.market_data.current_price.usd,
          market_cap: result.market_data.market_cap.usd,
          price_change_24h: result.market_data.price_change_percentage_24h,
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

  return (
    <div className="w-full 2xl:p-4 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col justify-center">
      {loading ? (
        <div className="flex items-center justify-center space-x-2 fontSizeFromXl font-semibold text-primary-colors">
          <LoadingIcon />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center fontSizeFromXl font-semibold text-red-500">
          Error: {error}
        </div>
      ) : (
        <div className="flex flex-col justify-between 2xl:gap-4 gap-3">
          <div className="flex items-center gap-2">
            <Image
              src={data?.name}.png}
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
            value={formatPrice(data?.price.toString() as string)}
          />
          <DataRow
            label="Market Cap"
            value={formatNumericAmountCompact(
              data?.market_cap.toString() as string
            )}
          />
          <DataRow
            label="Price Change (24h)"
            value={data?.price_change_24h.toFixed(2)}%}
          />
        </div>
      )}
    </div>
  );
}`;
