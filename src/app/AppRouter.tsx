// // import { useRoutes } from 'react-router-dom';
// // import MenuPage from '@/src/page/menu/MenuPage.tsx';
// // import ProfilePage from '@/src/page/profile/ProfilePage.tsx';
// //
// import { Route, Routes } from 'react-router-dom';
// import MenuPage from '@/src/page/menu/MenuPage.tsx';
// import ProfilePage from '@/src/page/profile/ProfilePage.tsx';
// import Page from '@/src/shared/ui/page/Page.tsx';
//
// export default function AppRouter() {
//   //   // const location = useLocation();
//   //
//   //   // const element = useRoutes(
//   //   //   [
//   //   //     { path: '/profile', element: <ProfilePage /> },
//   //   //     { path: '/menu', element: <MenuPage /> },
//   //   //     // 404 (ou fallback) : plutôt qu'un /* qui capture tout
//   //   //     { path: '*', element: <ProfilePage /> },
//   //   //   ],
//   //   //   location
//   //   // );
//   //
//   //   return useRoutes([
//   //     {
//   //       path: '/*',
//   //       element: <ProfilePage />,
//   //     },
//   //     {
//   //       path: '/menu',
//   //       element: <MenuPage />,
//   //     },
//   //     {
//   //       path: '/profile',
//   //       element: <ProfilePage />,
//   //     },
//   //   ]);
//   return (
//     <Routes>
//       <Route element={<Page />}>
//         <Route
//           path="/profile"
//           element={<ProfilePage />}
//         />
//         <Route
//           path="/menu"
//           element={<MenuPage />}
//         />
//       </Route>
//     </Routes>
//   );
// }
// import { lazy, Suspense } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { delay } from '@/src/shared/utils/delay.ts';
import '@/src/app/App.scss';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import MenuPage from '@/src/page/menu/MenuPage.tsx';
import ProfilePage from '@/src/page/profile/ProfilePage.tsx';
// import type { ChildrenType } from '@/src/shared/type/Children.ts';
// import { Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import AppRouter from '@/src/app/AppRouter.tsx';
// import MenuPage from '@/src/page/menu/MenuPage.tsx';
// import ProfilePage from '@/src/page/profile/ProfilePage.tsx';
// import MenuPage from '@/src/page/menu/MenuPage.tsx';
// import ProfilePage from '@/src/page/profile/ProfilePage.tsx';
// import Page from '@/src/shared/ui/page/Page.tsx';

// const AppRouter = lazy(() => delay(import('@/src/app/AppRouter.tsx'), 2e3));

// export default function App() {
//   return (
//     <Suspense
//       fallback={
//         <div style={{ fontFamily: 'Title, sans-serif', fontSize: '4rem', color: '#fff' }}>Chargement...</div>
//       }
//     >
//       <BrowserRouter>
//         <AppRouter />
//       </BrowserRouter>
//     </Suspense>
//   );
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route element={<AppLayout />}>
//         <Route
//           path="/menu"
//           element={<MenuPage />}
//         />
//         <Route
//           path="/profile"
//           element={<ProfilePage />}
//         />
//       </Route>
//     </Routes>
//   );
// }

// const Page = ({ children }: { children: ChildrenType }) => (
//   <motion.main
//     initial={{ opacity: 0, y: 8 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -8 }}
//     transition={{ duration: 0.2 }}
//   >
//     {children}
//   </motion.main>
// );

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
    >
      <Routes
        location={location}
        key={location.key}
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
    </AnimatePresence>
  );
}
