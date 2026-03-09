import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './NftCard.module.scss';
import EthLogo from '@/shared/assets/icons/Eth.svg';
import { formatTimeLeft } from '@/shared/lib/time';
import { Button } from '@/shared/ui';
import { NftItem } from '@/entities/Nft';

export const NftCard = ({ id, name = 'Sun-Glass', endTime, imageUrl, bid }: NftItem) => {
  const [timeLeft, setTimeLeft] = useState(formatTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(formatTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.time}>{timeLeft}</div>
        <Image alt="nft-preview" fill src={imageUrl} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title} title={name}>
          {name}
        </h3>

        <div className={styles.footer}>
          <div className="">
            <div className={styles.label}>Current bid</div>
            <div className={styles.value}>
              <EthLogo className={styles.ethLogo} />
              <span>{bid}</span>
            </div>
          </div>
          <div className="">
            <Button onClick={() => console.log('bid')}>place bid</Button>
          </div>
        </div>
      </div>
    </article>
  );
};
