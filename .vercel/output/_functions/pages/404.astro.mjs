import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DJeW424u.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-four"> <h1 class="h1-four">404</h1> <p>Oops! Page could not be found.</p> <a href="/" class="btn-four"> Back to Home </a> </div> ` })}`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/404.astro", void 0);

const $$file = "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
