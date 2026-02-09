// import { lazy, Suspense } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { delay } from '@/src/shared/utils/delay.ts';
import '@/src/app/App.scss';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Route, Routes, useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/src/app/AppRouter.tsx';
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

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
