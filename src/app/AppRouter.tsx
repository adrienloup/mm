// import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from '@/src/page/menu/MenuPage.tsx';
import ProfilePage from '@/src/page/profile/ProfilePage.tsx';
import { Page } from '@/src/shared/ui/page/Page.tsx';
import '@/src/app/App.scss';
// import { Footer } from '@/src/shared/ui/footer/Footer.tsx';
// import { Header } from '@/src/shared/ui/header/Header.tsx';

export default function AppRouter() {
  // const location = useLocation();

  // const page = useRoutes(
  //   [
  //     { path: '/profile', element: <ProfilePage /> },
  //     { path: '/menu', element: <MenuPage /> },
  //     { path: '*', element: <ProfilePage /> },
  //   ]
  //   // location
  // );

  return (
    <BrowserRouter>
      <Page>
        <Routes
        // location={location}
        // key={location.key}
        >
          <Route
            path="/"
            element={<ProfilePage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="/menu"
            element={<MenuPage />}
          />
          <Route
            path="*"
            element={<div>404</div>}
          />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}
