import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { delay } from '@/src/shared/utils/delay';
import '@/src/app/App.scss';

const Router = lazy(() => delay(import('@/src/router.tsx'), 2e3));

export default function App() {
  return (
    <Suspense
      fallback={
        <div style={{ fontFamily: 'Title, sans-serif', fontSize: '4rem', color: '#fff' }}>Chargement...</div>
      }
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
}
