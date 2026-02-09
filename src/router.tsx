import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useRoutes } from 'react-router-dom';
import MenuPage from '@/src/page/menu/MenuPage.tsx';
import ProfilePage from '@/src/page/profile/ProfilePage.tsx';
import { Footer } from '@/src/shared/ui/footer/Footer.tsx';
import { Header } from '@/src/shared/ui/header/Header.tsx';
import '@/src/app/App.scss';

export default function Router() {
  const location = useLocation();

  const page = useRoutes(
    [
      { path: '/profile', element: <ProfilePage /> },
      { path: '/menu', element: <MenuPage /> },
      { path: '*', element: <ProfilePage /> },
    ],
    location
  );

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
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          role="main"
        >
          {page}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
