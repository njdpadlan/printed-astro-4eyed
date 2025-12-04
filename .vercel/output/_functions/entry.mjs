import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DE6rPcOU.mjs';
import { manifest } from './manifest_CltrGTy1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about-us.astro.mjs');
const _page3 = () => import('./pages/contact-us.astro.mjs');
const _page4 = () => import('./pages/integrated-form-labels.astro.mjs');
const _page5 = () => import('./pages/linerless-labels.astro.mjs');
const _page6 = () => import('./pages/online-services.astro.mjs');
const _page7 = () => import('./pages/pressure-seal-forms.astro.mjs');
const _page8 = () => import('./pages/products.astro.mjs');
const _page9 = () => import('./pages/request-quote.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about-us.astro", _page2],
    ["src/pages/contact-us.astro", _page3],
    ["src/pages/integrated-form-labels.astro", _page4],
    ["src/pages/linerless-labels.astro", _page5],
    ["src/pages/online-services.astro", _page6],
    ["src/pages/pressure-seal-forms.astro", _page7],
    ["src/pages/products.astro", _page8],
    ["src/pages/request-quote.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3281565b-5ee2-4b15-827c-2bf3934984d5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
