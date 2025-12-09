import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                    */
import '../chunks/index_CR4ZvYMV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CgGkHfSF.mjs';
import { f as fetchApi, $ as $$Layout } from '../chunks/Layout_HZRpKSyG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { pressureSealHero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="product-hero-grid"> <a href="/products"><img src="/assets/arrow-left.svg" alt="">Back to Products</a> <div class="featured-products-hero"> <div class="product-hero-container"> <h1>${pressureSealHero.pressuresealHeader}</h1> <p>${pressureSealHero.pressuresealDesc}</p> </div> <div class="product-hero-img"> <picture> <source media="(min-width: 1400px)"${addAttribute(pressureSealHero.pressuresealImageDesktop.url, "srcset")}> <img class="pressureseal-hero-img"${addAttribute(pressureSealHero.pressuresealImageMobile.url, "src")}${addAttribute(pressureSealHero.pressuresealImageMobile.alternativeText, "alt")}> </picture> </div> </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/PressureSeal/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$SecureFold = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SecureFold;
  const { productSecureFold } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="featured-products-additional-info"> <div class="product-container"> <div class="yellow-header"> <h2>${productSecureFold.securefoldTitle}</h2> </div> <div class="featured-products-infolist"> <div class="inner-container inner-grid"> <div class="list"> <p>${productSecureFold.idealforText}</p> <ul> <li>${productSecureFold.payroll}</li> <li>${productSecureFold.taxforms}</li> <li>${productSecureFold.statements}</li> <li>${productSecureFold.utilitybills}</li> <li>${productSecureFold.directmail}</li> </ul> <a href="/request-quote" class="featured-products-btn">${productSecureFold.securefoldBtn}</a> </div> ${renderComponent($$result, "Image", $$Image, { "src": productSecureFold.securefoldImage.url, "alt": productSecureFold.securefoldImage.alternativeText, "inferSize": true })} </div> </div> </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/PressureSeal/SecureFold.astro", void 0);

const $$Astro = createAstro();
const $$WhatIs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhatIs;
  const { productWhatIs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="featured-products-container"> <div class="featured-products-info"> <h2>${productWhatIs.pressuresealWhatIsTitle}</h2> <p>${productWhatIs.pressuresealWhatIsDesc}</p> <p>${productWhatIs.sealedbypressureText}</p> </div> <div class="pressure-seal-img"> ${renderComponent($$result, "Image", $$Image, { "src": productWhatIs.pressuresealImage1.url, "alt": productWhatIs.pressuresealImage1.alternativeText, "inferSize": true })} ${renderComponent($$result, "Image", $$Image, { "src": productWhatIs.pressuresealImage2.url, "alt": productWhatIs.pressuresealImage2.alternativeText, "inferSize": true })} ${renderComponent($$result, "Image", $$Image, { "src": productWhatIs.pressuresealImage3.url, "alt": productWhatIs.pressuresealImage3.alternativeText, "inferSize": true })} </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/PressureSeal/WhatIs.astro", void 0);

const $$PressureSealForms = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchApi({
    endpoint: "pressure-seal-envelopes",
    page: "PressureSealEnvelopePage",
    wrappedByKey: "data"
  });
  const pressureSealPage = pages[0];
  const pageData = pressureSealPage?.PressureSealEnvelopePage || [];
  const heroData = pageData.find((pd) => pd.__component === "pressuresealhero.pressureseal-hero") || {};
  const pressuresealWhatIsData = pageData.find((pd) => pd.__component === "pressuresealwhatis.pressureseal-what-is") || {};
  const securefoldData = pageData.find((pd) => pd.__component === "securefold.secure-fold") || {};
  const seoPageData = pageData.find((pd) => pd.__component === "shared.seo") || {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": seoPageData }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "pressureSealHero": heroData })} ${renderComponent($$result2, "WhatIs", $$WhatIs, { "productWhatIs": pressuresealWhatIsData })} ${renderComponent($$result2, "SecureFold", $$SecureFold, { "productSecureFold": securefoldData })} ` })}`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/pages/pressure-seal-forms.astro", void 0);

const $$file = "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/pages/pressure-seal-forms.astro";
const $$url = "/pressure-seal-forms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PressureSealForms,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
