import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

/**
 * Entrada de build SSR, usada só pelo prerender.mjs em tempo de build.
 * Não roda em servidor nenhum em produção: o resultado é gravado no
 * dist/index.html e servido como arquivo estático.
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
