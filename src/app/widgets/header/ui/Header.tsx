'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';

import { useWindowWidth, useScrollY, useScrollLock } from '@/shared/lib/hooks';

import styles from './Header.module.scss';
import LogoIcon from '@/shared/assets/icons/Logo.svg';
import BurgerIcon from '@/shared/assets/icons/Burger.svg';
import CrossIcon from '@/shared/assets/icons/Cross.svg';

const NAV_LINKS = ['DISCOVER', 'CREATORS', 'SELL', 'STATS'];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const windowWidth = useWindowWidth();
  const scrollY = useScrollY();
  useScrollLock(isOpen);

  const isClient = windowWidth > 0;
  const isMobile = isClient && windowWidth < 768;
  const isScrolled = scrollY > 10;

  if (!isMobile && isOpen) {
    setIsOpen(false);
  }

  const headerAppearVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: [-100, 5, 0],
      opacity: [0, 1, 1],
      transition: {
        duration: 0.8,
        times: [0, 0.7, 1],
        ease: 'easeOut',
      },
    },
  };

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    opened: {
      opacity: 1,
      height: '100vh',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const linkVariants: Variants = {
    closed: { opacity: 0 },
    opened: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <header className={`${styles.header} ${isScrolled || isMobile ? styles.sсrolled : ''}`}>
      <motion.div
        className={styles.container}
        initial={'initial'}
        animate="animate"
        variants={headerAppearVariants}>
        <Link href="/" className={styles.logo}>
          <LogoIcon className={styles.logoSvg} />
          <span>DiveSea</span>
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link, index) => (
            <Link key={index} href="#" data-text={link} className={styles.navLink}>
              {link}
            </Link>
          ))}
        </nav>

        <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <BurgerIcon /> : <CrossIcon />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}>
            <nav className={styles.mobileNav}>
              {NAV_LINKS.map((link, index) => (
                <motion.div key={index} variants={linkVariants}>
                  {' '}
                  <Link key={index} href="#" onClick={() => setIsOpen(false)}>
                    {link}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
