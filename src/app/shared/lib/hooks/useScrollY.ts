import { useState, useEffect } from 'react';

export const useScrollY = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};
