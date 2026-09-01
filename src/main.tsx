import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const raiz = document.getElementById('root')!;

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Em produção a div já vem preenchida pelo prerender, então hidrata em vez de
// montar do zero. No `vite dev` ela está vazia e o caminho normal vale.
if (raiz.hasChildNodes()) {
  hydrateRoot(raiz, app);
} else {
  createRoot(raiz).render(app);
}
