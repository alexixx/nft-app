'use client';
import React, { Children, useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './Slider.module.scss';
import { SliderArrow } from './SliderArrow';

interface SliderProps {
  children: React.ReactNode;
  slidesPerView?: number;
}

export const Slider = ({ children }: SliderProps) => {
  const slidesCount = React.Children.count(children);
  const initialSlide = slidesCount > 4 ? 4 : 0;
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    //  loop: true,
    initial: initialSlide,
    slides: { origin: 'center', perView: 'auto', spacing: 32 },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: { origin: 'center', perView: 'auto', spacing: 40 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [children, instanceRef]);

  return (
    <div
      className={styles.sliderContainer}
      style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.2s ease-in' }}>
      <div className={styles.sliderWrapper}>
        <div ref={sliderRef} className="keen-slider">
          {Children.map(children, (child) => (
            <div className="keen-slider__slide">{child}</div>
          ))}
        </div>
      </div>

      <div className={styles.navigation}>
        <SliderArrow
          left
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.prev();
          }}
          disabled={currentSlide === 0}
        />
        <div className={styles.divider}></div>
        <SliderArrow
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.next();
          }}
          disabled={currentSlide === slidesCount - 1}
        />
      </div>
    </div>
  );
};
