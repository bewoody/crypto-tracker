import { QueryFunctionContext } from "@tanstack/react-query";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () =>
  await (await fetch(`${BASE_URL}/coins`)).json();

export const fetchCoinInfo = async ({ queryKey }: QueryFunctionContext) => {
  const [_, coinId] = queryKey;
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
};

export const fetchCoinTickers = async ({ queryKey }: QueryFunctionContext) => {
  const [_, coinId] = queryKey;
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
};

export const fetchCoinHistory = async ({ queryKey }: QueryFunctionContext) => {
  const [_, coinId] = queryKey;
  return await (
    await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
  ).json();
};
