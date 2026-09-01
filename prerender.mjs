/**
 * Pré-renderiza a página em tempo de build.
 *
 * Por que: o index.html do Vite entrega `<div id="root"></div>` vazio. Quem lê
 * a página sem executar JavaScript — o que inclui o card de link do WhatsApp,
 * LinkedIn, Slack e qualquer prévia social — não vê conteúdo nenhum. O
 * Googlebot renderiza JS, mas numa segunda passada e sem garantia de prazo.
 *
 * O que faz: roda o App uma vez no Node e grava o HTML resultante dentro da
 * div. O bundle do cliente continua igual; ele passa a hidratar em vez de
 * montar do zero (ver src/main.tsx).
 *
 * Não é servidor: nada disso roda em produção, o resultado é estático.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const alvo = path.join(dist, 'index.html');
const servidor = path.resolve('dist-ssr/entry-server.js');

if (!fs.existsSync(servidor)) {
  console.error(`[prerender] build SSR ausente em ${servidor}`);
  process.exit(1);
}

const { render } = await import(pathToFileURL(servidor).href);
const html = render();

const template = fs.readFileSync(alvo, 'utf-8');
const marcador = '<div id="root"></div>';

if (!template.includes(marcador)) {
  console.error('[prerender] nao achei a div raiz no index.html — abortando em vez de gerar pagina vazia');
  process.exit(1);
}

fs.writeFileSync(alvo, template.replace(marcador, `<div id="root">${html}</div>`));
console.log(`[prerender] ${(html.length / 1024).toFixed(1)} KB de HTML gravados em dist/index.html`);
