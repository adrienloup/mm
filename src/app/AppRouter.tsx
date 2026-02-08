import { useRoutes } from 'react-router-dom';
import ProfilePage from '@/src/page/ProfilePage.tsx';

export default function AppRouter() {
  return useRoutes([
    {
      path: '/mm/*',
      element: <ProfilePage />,
    },
    {
      path: '/mm',
      element: <ProfilePage />,
    },
  ]);
}
