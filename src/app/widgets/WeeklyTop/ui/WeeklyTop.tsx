'use client';
import { useSelector } from 'react-redux';
import styles from './WeeklyTop.module.scss';
import { Slider } from '@/shared/ui';
import { NftCard, NftCardSkeleton, useGetWeeklyNftsQuery } from '@/entities/Nft';

const MOCK_NFTS = [
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
];

export const WeeklyTop = () => {
  const { data: nfts, isLoading, isError } = useGetWeeklyNftsQuery();

  if (isError) return <div>Ошибка при загрузке данных</div>;

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
