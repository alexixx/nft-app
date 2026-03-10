'use client';

import styles from './WeeklyTop.module.scss';
import { Slider } from '@/shared/ui';
import { NftCard, NftCardSkeleton, useGetWeeklyNftsQuery } from '@/entities/Nft';

const MOCK_NFTS = [
  {
    id: 'anarkey-by-tradeai',
    name: 'AnarKey',
    endTime: '2026-03-14T16:56:15.149Z',
    imageUrl: '/assets/nft/1.jpg',
    bid: '8.75',
  },
  {
    id: 'the-anata-nft',
    name: 'The Anata NFT',
    endTime: '2026-03-14T13:39:07.968Z',
    imageUrl: '/assets/nft/5.jpg',
    bid: '0.53',
  },
  {
    id: 'today-ancient-seed',
    name: 'TODAY - Ancient Seed',
    endTime: '2026-03-14T11:24:12.061Z',
    imageUrl: '/assets/nft/4.jpg',
    bid: '1.13',
  },
  {
    id: 'arcadenft',
    name: 'ArcadeNFT',
    endTime: '2026-03-14T05:47:30.785Z',
    imageUrl: '/assets/nft/5.jpg',
    bid: '0.40',
  },
  {
    id: 'cute-animals',
    name: 'Cute Animals',
    endTime: '2026-03-14T11:58:22.718Z',
    imageUrl: '/assets/nft/3.jpg',
    bid: '3.23',
  },
  {
    id: 'a-n-i-m-o',
    name: 'A.N.I.M.O',
    endTime: '2026-03-14T22:23:50.361Z',
    imageUrl: '/assets/nft/4.jpg',
    bid: '6.39',
  },
];

export const WeeklyTop = () => {
  const { data: nfts, isLoading, isError } = useGetWeeklyNftsQuery();

  if (isError)
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Weekly - Top NFT</h1>

        <div className={styles.sliderWrapper}>
          <Slider>
            {MOCK_NFTS.map((nft, i) => (
              // <NftCardSkeleton key={i} />
              <NftCard key={i} {...nft} />
            ))}
          </Slider>
        </div>
      </section>
    );

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Weekly - Top NFT</h1>

      <div className={styles.sliderWrapper}>
        <Slider>
          {isLoading && !nfts
            ? MOCK_NFTS.map((nft, i) => <NftCardSkeleton key={i} />)
            : nfts?.map((nft, i) => <NftCard key={i} {...nft} />)}
        </Slider>
        {/* <Slider>
          {MOCK_NFTS.map((nft, i) => (
            // <NftCardSkeleton key={i} />
            <NftCard key={i} {...nft} />
          ))}
        </Slider> */}
      </div>
    </section>
  );
};
