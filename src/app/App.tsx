import { lazy, Suspense } from 'react';
import { delay } from '@/src/shared/utils/delay';
import '@/src/app/App.scss';

const AppRouter = lazy(() => delay(import('@/src/app/AppRouter.tsx'), 2e3));

export default function App() {
  return (
    <Suspense
      fallback={
        <div style={{ fontFamily: 'Title, sans-serif', fontSize: '4rem', color: '#fff' }}>Chargement...</div>
      }
    >
      <AppRouter />
    </Suspense>
  );
}
