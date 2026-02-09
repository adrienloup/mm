// import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { Outlet, useLocation } from 'react-router-dom';
// import type { ChildrenType } from '@/src/shared/type/Children.ts';
import { cubicBezier } from 'motion-utils';
import type { ChildrenType } from '@/src/shared/type/Children.ts';
import { Footer } from '@/src/shared/ui/footer/Footer.tsx';
import { Header } from '@/src/shared/ui/header/Header.tsx';
// import { Main } from '@/src/shared/ui/main/Main.tsx';
// import { classNames } from '@/src/shared/utils/classNames.ts';
// import styles from '@/src/shared/ui/page/Page.module.scss';
//
// // export const Page = ({ children }: { children: ChildrenType }) => {
// export default function Page() {
//   const location = useLocation();
//   const [phase, setPhase] = useState<'enter' | 'idle'>('enter');
//
//   useEffect(() => {
//     setPhase('enter');
//     const id = window.setTimeout(() => setPhase('idle'), 200);
//     return () => window.clearTimeout(id);
//   }, [location.pathname]);
//
//   useEffect(() => {
//     window.scroll(0, 0);
//   }, []);
//
//   return (
//     <>
//       <Header />
//       {/*<Main className={classNames(styles.page, styles[phase])}>{children}</Main>*/}
//       <Main className={classNames(styles.page, styles[phase])}>
//         <Outlet />
//       </Main>
//       <Footer />
//     </>
//   );
// }

// -ease-out: cubic-bezier(0, 0, 0.58, 1);
// --ease-in: cubic-bezier(1, 0.005, 0, 1.2);
// --ease-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);

export const Page = ({ children }: { children: ChildrenType }) => {
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.25, ease: cubicBezier(0.25, 0.8, 0.25, 1) }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};
