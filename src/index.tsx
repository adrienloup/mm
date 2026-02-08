import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import App from '@/src/app/App.tsx';

createRoot(document.getElementById('_mm_d2zje_1')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.info(`[mm] ${version} %c@jff`, 'padding: 1px 3px; background-color: #1e9e75; color: #fff;');
