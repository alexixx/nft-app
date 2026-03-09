import styles from './Slider.module.scss';
import ArrowLeftIcon from '@/shared/assets/icons/ArrowLeft.svg';
import ArrowRightIcon from '@/shared/assets/icons/ArrowRight.svg';

interface ArrowProps {
  left?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export const SliderArrow = ({ left, onClick, disabled }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.arrow} ${left ? styles.arrowLeft : styles.arrowRight} ${disabled ? styles.arrowDisabled : ''}`}
      aria-label={left ? 'Previous slide' : 'Next slide'}>
      {left ? (
        <ArrowLeftIcon
          className={`${styles.arrowIcon} ${left ? styles.arrowLeft : styles.arrowRight}`}
        />
      ) : (
        <ArrowRightIcon
          className={`${styles.arrowIcon} ${left ? styles.arrowLeft : styles.arrowRight}`}
        />
      )}
    </button>
  );
};
