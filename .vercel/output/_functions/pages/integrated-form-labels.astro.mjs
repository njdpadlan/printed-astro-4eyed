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
  const { integratedFormHero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="product-hero-grid"> <a href="/products"><img src="/assets/arrow-left.svg" alt="">Back to Products</a> <div class="featured-products-hero"> <div class="product-hero-container"> <h1>${integratedFormHero.integratedformlabelHeader}</h1> <p>${integratedFormHero.integratedformlabelDesc}</p> </div> <div class="product-hero-img"> <picture> <source media="(min-width: 1400px)"${addAttribute(integratedFormHero.integratedformlabelImageDesktop.url, "srcset")}> <img class="integratedform-hero-img"${addAttribute(integratedFormHero.integratedformlabelImageMobile.url, "src")}${addAttribute(integratedFormHero.integratedformlabelImageMobile.alternativeText, "alt")}> </picture> </div> </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/IntegratedForm/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$WhatIs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhatIs;
  const { productWhatIs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="featured-products-container"> <div class="featured-products-info"> <h2>${productWhatIs.integratedformlabelWhatIsTitle}</h2> <p>${productWhatIs.integratedformlabelWhatIsDesc}</p> <p>${productWhatIs.integratedsolutionText}</p> </div> <div class="integrated-form-img"> ${renderComponent($$result, "Image", $$Image, { "src": productWhatIs.integratedformImage1.url, "alt": productWhatIs.integratedformImage1.alternativeText, "inferSize": true })} ${renderComponent($$result, "Image", $$Image, { "src": productWhatIs.integratedformImage2.url, "alt": productWhatIs.integratedformImage2.alternativeText, "inferSize": true })} ${renderComponent($$result, "Image", $$Image, { "src": productWhatIs.integratedformImage3.url, "alt": productWhatIs.integratedformImage3.alternativeText, "inferSize": true })} </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/IntegratedForm/WhatIs.astro", void 0);

const $$Astro = createAstro();
const $$SmartEfficient = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SmartEfficient;
  const { productSmartEfficient } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="featured-products-additional-info"> <div class="product-container"> <div class="yellow-header"> <h2>${productSmartEfficient.smartefficientformTitle}</h2> </div> <div class="featured-products-infolist"> <div class="inner-container inner-grid"> <div class="list"> <p>${productSmartEfficient.commonapplicationsText}</p> <ul> <li>${productSmartEfficient.ecommerce}</li> <li>${productSmartEfficient.distribution}</li> <li>${productSmartEfficient.retail}</li> <li>${productSmartEfficient.healthcare}</li> <li>${productSmartEfficient.insurance}</li> <li>${productSmartEfficient.logistics}</li> </ul> <a href="/request-quote" class="featured-products-btn">${productSmartEfficient.smartefficientBtn}</a> </div> ${renderComponent($$result, "Image", $$Image, { "src": productSmartEfficient.smartefficientImage.url, "alt": productSmartEfficient.smartefficientImage.alternativeText, "inferSize": true })} </div> </div> </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/IntegratedForm/SmartEfficient.astro", void 0);

const $$IntegratedFormLabels = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchApi({
    endpoint: "integrated-form-labels",
    page: "IntegratedFormLabelPage",
    wrappedByKey: "data"
  });
  const integratedformsPage = pages[0];
  const pageData = integratedformsPage?.IntegratedFormLabelPage || [];
  const heroData = pageData.find((pd) => pd.__component === "integratedformlabelhero.integratedformlabel-hero") || {};
  const integratedformWhatIsData = pageData.find((pd) => pd.__component === "integratedformlabelwhatis.integratedformlabel-what-is") || {};
  const smartformData = pageData.find((pd) => pd.__component === "smartefficientform.smart-efficient-form") || {};
  const seoPageData = pageData.find((pd) => pd.__component === "shared.seo") || {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": seoPageData }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "integratedFormHero": heroData })} ${renderComponent($$result2, "WhatIs", $$WhatIs, { "productWhatIs": integratedformWhatIsData })} ${renderComponent($$result2, "SmartEfficient", $$SmartEfficient, { "productSmartEfficient": smartformData })} ` })}`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/pages/integrated-form-labels.astro", void 0);

const $$file = "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/pages/integrated-form-labels.astro";
const $$url = "/integrated-form-labels";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$IntegratedFormLabels,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
