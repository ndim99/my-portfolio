export type CurrencyType = {
  usd: string;
};

export type MarketData = {
  current_price: CurrencyType;
  market_cap: CurrencyType;
  price_change_percentage_24h: number;
};

export type TokenData = {
  name: string;
  symbol: string;
  image: string;
  market_data: MarketData;
};
