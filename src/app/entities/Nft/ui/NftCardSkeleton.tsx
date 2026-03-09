import styles from './NftCard.module.scss';

export const NftCardSkeleton = () => {
  return (
    <article className={styles.skeleton}>
      <div className={styles.imageWrapper}>
        <div className={styles.time}>07h 09m 12s</div>
        <div className={styles.image}></div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>adads</h3>

        <div className={styles.footer}>
          <div className="">
            <div className={styles.label}>Current bid</div>
            <div className={styles.value}>
              {/* <EthLogo className={styles.ethLogo} /> */}
              <span>123</span>
            </div>
          </div>
          <div className="">
            <button className={styles.button}></button>
          </div>
        </div>
      </div>
    </article>
  );
};
