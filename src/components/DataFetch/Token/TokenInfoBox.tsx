import Image from "next/image";
import LoadingIcon from "../../Icons/LoadingIcon";
import TokenInfoRow from "./TokenInfoRow";
import { formatPrice } from "@/utils/priceFormatting";
import { formatNumericAmountCompact } from "@/utils/formatting";

interface TokenInfoBoxProps {
  loading?: boolean;
  error?: any;
  name: string;
  symbol: string;
  price: string;
  market_cap: string;
  price_change_24h: number;
}

export default function TokenInfoBox({
  loading,
  error,
  name,
  symbol,
  price,
  market_cap,
  price_change_24h,
}: TokenInfoBoxProps) {
  return (
    <div className="w-full 2xl:p-4 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col justify-center">
      {loading ? (
        <div className="flex items-center justify-center space-x-2 fontSizeFromXl font-semibold text-primary-colors">
          <LoadingIcon />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center fontSizeFromXl font-semibold text-red-500">
          Error: {error.message}
        </div>
      ) : (
        <div className="flex flex-col justify-between 2xl:gap-4 gap-3">
          <div className="flex items-center gap-2">
            <Image
              src={`/${name}.png`}
              alt={symbol ?? (symbol as string)}
              className="rounded-full 2xl:w-8 lg:w-7 w-7 2xl:h-8 lg:h-7 h-6"
              width={32}
              height={32}
            />
            <h2 className="fontSizeFromXl font-bold text-primary-colors">
              {name} ({symbol?.toUpperCase()})
            </h2>
          </div>
          <TokenInfoRow label="Price" value={formatPrice(price)} />
          <TokenInfoRow
            label="Market Cap"
            value={formatNumericAmountCompact(market_cap)}
          />
          <TokenInfoRow
            label="Price Change (24h)"
            value={`${price_change_24h?.toFixed(2)}%`}
          />
        </div>
      )}
    </div>
  );
}
