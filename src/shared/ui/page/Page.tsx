// import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import { Outlet, useLocation } from 'react-router-dom';
// import type { ChildrenType } from '@/src/shared/type/Children.ts';
import { useLocation } from 'react-router-dom';
import type { ChildrenType } from '@/src/shared/type/Children.ts';
import { Footer } from '@/src/shared/ui/footer/Footer.tsx';
import { Header } from '@/src/shared/ui/header/Header.tsx';

export const Page = ({ children }: { children: ChildrenType }) => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.main
          key={location.key}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};
