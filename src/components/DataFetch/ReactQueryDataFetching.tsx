import { useQuery } from "@tanstack/react-query";
import TokenInfoBox from "./Token/TokenInfoBox";

const FETCHING_TOKEN_DATA_BITCOIN_KEY = "fetchingTokenDataBitcoinKey";
const FETCHING_TOKEN_DATA_BITCOIN_REFETCH_INTERVAL = 5000;

const FETCHING_TOKEN_DATA_ETHEREUM_KEY = "fetchingTokenDataEthereumKey";
const FETCHING_TOKEN_DATA_ETHEREUM_REFETCH_INTERVAL = 5000;

const fetchData = async (tokenId: string) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${tokenId}`
  );
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

export function ReactQueryDataFetching() {
  const {
    data: bitcoinData,
    error: bitcoinError,
    isLoading: isLoadingBitcoin,
    isFetching: isFetchingBitcoin,
  } = useQuery({
    queryKey: [FETCHING_TOKEN_DATA_BITCOIN_KEY],
    queryFn: () => fetchData("bitcoin"),
    refetchInterval: FETCHING_TOKEN_DATA_BITCOIN_REFETCH_INTERVAL,
  });

  const {
    data: ethereumData,
    error: ethereumError,
    isLoading: isLoadingEthereum,
    isFetching: isFetchingEthereum,
  } = useQuery({
    queryKey: [FETCHING_TOKEN_DATA_ETHEREUM_KEY],
    queryFn: () => fetchData("ethereum"),
    refetchInterval: FETCHING_TOKEN_DATA_ETHEREUM_REFETCH_INTERVAL,
  });

  //bitcoin data
  const bitcoinName = bitcoinData?.name;
  const bitcoinSymbol = bitcoinData?.symbol;
  const bitcoinPrice = bitcoinData?.market_data?.current_price?.usd;
  const bitcoinMarketCap = bitcoinData?.market_data?.market_cap?.usd;
  const bitcoinPriceChange24h =
    bitcoinData?.market_data?.price_change_percentage_24h;

  //ethereum data
  const ethereumName = ethereumData?.name;
  const ethereumSymbol = ethereumData?.symbol;
  const ethereumPrice = ethereumData?.market_data?.current_price?.usd;
  const ethereumMarketCap = ethereumData?.market_data?.market_cap?.usd;
  const ethereumPriceChange24h =
    ethereumData?.market_data?.price_change_percentage_24h;

  return (
    <div className="flex 2xl:flex-row flex-col items-center 2xl:gap-4 gap-3 w-full">
      <TokenInfoBox
        loading={isLoadingBitcoin || isFetchingBitcoin}
        error={bitcoinError}
        name={bitcoinName}
        symbol={bitcoinSymbol}
        price={bitcoinPrice ?? bitcoinPrice}
        market_cap={bitcoinMarketCap ?? bitcoinMarketCap}
        price_change_24h={bitcoinPriceChange24h}
      />
      <TokenInfoBox
        loading={isLoadingEthereum || isFetchingEthereum}
        error={ethereumError}
        name={ethereumName}
        symbol={ethereumSymbol}
        price={ethereumPrice ?? ethereumPrice}
        market_cap={ethereumMarketCap ?? ethereumMarketCap}
        price_change_24h={ethereumPriceChange24h}
      />
    </div>
  );
}

export const reactQueryDataFetchingSourceCode = `import { useQuery } from "@tanstack/react-query";
import TokenInfoBox from "./Token/TokenInfoBox";

const FETCHING_TOKEN_DATA_BITCOIN_KEY = "fetchingTokenDataBitcoinKey";
const FETCHING_TOKEN_DATA_BITCOIN_REFETCH_INTERVAL = 5000;

const FETCHING_TOKEN_DATA_ETHEREUM_KEY = "fetchingTokenDataEthereumKey";
const FETCHING_TOKEN_DATA_ETHEREUM_REFETCH_INTERVAL = 5000;

const fetchData = async (tokenId: string) => {
  const response = await fetch(
    https://api.coingecko.com/api/v3/coins/tokenId
  );
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

export function ReactQueryDataFetching() {
  const {
    data: bitcoinData,
    error: bitcoinError,
    isLoading: isLoadingBitcoin,
    isFetching: isFetchingBitcoin,
  } = useQuery({
    queryKey: [FETCHING_TOKEN_DATA_BITCOIN_KEY],
    queryFn: () => fetchData("bitcoin"),
    refetchInterval: FETCHING_TOKEN_DATA_BITCOIN_REFETCH_INTERVAL,
  });

  const {
    data: ethereumData,
    error: ethereumError,
    isLoading: isLoadingEthereum,
    isFetching: isFetchingEthereum,
  } = useQuery({
    queryKey: [FETCHING_TOKEN_DATA_ETHEREUM_KEY],
    queryFn: () => fetchData("ethereum"),
    refetchInterval: FETCHING_TOKEN_DATA_ETHEREUM_REFETCH_INTERVAL,
  });

  //bitcoin data
  const bitcoinName = bitcoinData?.name;
  const bitcoinSymbol = bitcoinData?.symbol;
  const bitcoinPrice = bitcoinData?.market_data?.current_price?.usd;
  const bitcoinMarketCap = bitcoinData?.market_data?.market_cap?.usd;
  const bitcoinPriceChange24h =
    bitcoinData?.market_data?.price_change_percentage_24h;

  //ethereum data
  const ethereumName = ethereumData?.name;
  const ethereumSymbol = ethereumData?.symbol;
  const ethereumPrice = ethereumData?.market_data?.current_price?.usd;
  const ethereumMarketCap = ethereumData?.market_data?.market_cap?.usd;
  const ethereumPriceChange24h =
    ethereumData?.market_data?.price_change_percentage_24h;

  return (
    <div className="flex 2xl:flex-row flex-col items-center 2xl:gap-4 gap-3 w-full">
      <TokenInfoBox
        loading={isLoadingBitcoin || isFetchingBitcoin}
        error={bitcoinError}
        name={bitcoinName}
        symbol={bitcoinSymbol}
        price={bitcoinPrice ?? bitcoinPrice}
        market_cap={bitcoinMarketCap ?? bitcoinMarketCap}
        price_change_24h={bitcoinPriceChange24h}
      />
      <TokenInfoBox
        loading={isLoadingEthereum || isFetchingEthereum}
        error={ethereumError}
        name={ethereumName}
        symbol={ethereumSymbol}
        price={ethereumPrice ?? ethereumPrice}
        market_cap={ethereumMarketCap ?? ethereumMarketCap}
        price_change_24h={ethereumPriceChange24h}
      />
    </div>
  );
}`;
