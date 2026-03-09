import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getRandomImage } from '@/entities/Nft';

type NftDto = {
  id: string;
  name: string;
  contract_address: string;
  asset_platform_id: string;
  symbol: string;
};

type NftItem = {
  id: string;
  name: string;
  endTime: string;
  imageUrl: string;
  bid: string;
};

const getRandomBid = () => {
  const bid = (Math.random() * 9.99 + 0.01).toFixed(2);
  return bid;
};

export const nftApi = createApi({
  reducerPath: 'nftApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
  endpoints: (builder) => ({
    getWeeklyNfts: builder.query<NftItem[], void>({
      query: () => 'nfts/list',
      transformResponse: (response: NftDto[]): NftItem[] => {
        return response.map((item) => ({
          id: item.id,
          name: item.name,
          endTime: new Date(Date.now() + Math.random() * 86400000).toISOString(),
          imageUrl: getRandomImage(),
          bid: getRandomBid(),
        }));
      },
    }),
  }),
});

export const { useGetWeeklyNftsQuery } = nftApi;
