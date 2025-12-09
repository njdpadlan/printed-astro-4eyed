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
  const { linerlessHero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="product-hero-grid"> <a href="/products"><img src="/assets/arrow-left.svg" alt="">Back to Products</a> <div class="featured-products-hero"> <div class="product-hero-container"> <h1>${linerlessHero.linerlesslabelHeader}</h1> <p>${linerlessHero.linerlesslabelText}</p> </div> <div class="product-hero-img"> <picture> <source media="(min-width: 1400px)"${addAttribute(linerlessHero.linerlessImageDesktop.url, "srcset")}> <img class="linerless-hero-img"${addAttribute(linerlessHero.linerlessImageMobile.url, "src")}${addAttribute(linerlessHero.linerlessImageMobile.alternativeText, "alt")}> </picture> </div> </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/LinerlessLabel/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$SustainableLabel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SustainableLabel;
  const { productSustainable } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="featured-products-additional-info"> <div class="product-container"> <div class="yellow-header"> <h2>${productSustainable.sustainableTitle}</h2> </div> <div class="featured-products-infolist"> <div class="inner-container"> <p>${productSustainable.keyadvantagesTitle}</p> <ul> <li>${productSustainable.nolinerText}</li> <li>${productSustainable.continuousrollText}</li> <li>${productSustainable.custombrandingText}</li> <li>${productSustainable.excellentforText}</li> </ul> <a href="/request-quote" class="featured-products-btn linerless-btn">${productSustainable.sustainableBtn}</a> ${renderComponent($$result, "Image", $$Image, { "src": productSustainable.sustainableImage.url, "alt": productSustainable.sustainableImage.alternativeText, "inferSize": true })} </div> </div> </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/LinerlessLabel/SustainableLabel.astro", void 0);

const $$Astro = createAstro();
const $$WhatIs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhatIs;
  const { productWhatIs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="featured-products-container"> <div class="featured-products-info"> <h2>${productWhatIs.linerlesslabelWhatIsTitle}</h2> <p>${productWhatIs.linerlesslabelWhatIsDesc}</p> <p class="middle-text">${productWhatIs.perfectforwindowText}</p> <p>${productWhatIs.printedmanufactureText}</p> </div> <div class="linerless-img"> ${renderComponent($$result, "Image", $$Image, { "src": productWhatIs.linerlesslabelImage1.url, "alt": productWhatIs.linerlesslabelImage1.alternativeText, "inferSize": true })} ${renderComponent($$result, "Image", $$Image, { "src": productWhatIs.linerlesslabelImage2.url, "alt": productWhatIs.linerlesslabelImage2.alternativeText, "inferSize": true })} ${renderComponent($$result, "Image", $$Image, { "src": productWhatIs.linerlesslabelImage3.url, "alt": productWhatIs.linerlesslabelImage3.alternativeText, "inferSize": true })} </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/LinerlessLabel/WhatIs.astro", void 0);

const $$LinerlessLabels = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchApi({
    endpoint: "linerless-labels",
    page: "LinerlessLabelPage",
    wrappedByKey: "data"
  });
  const linerlessPage = pages[0];
  const pageData = linerlessPage?.LinerlessLabelPage || [];
  const heroData = pageData.find((pd) => pd.__component === "linerlesslabelhero.linerlesslabel-hero") || {};
  const linerlessWhatIsData = pageData.find((pd) => pd.__component === "linerlesslabelwhatis.linerlesslabel-what-is") || {};
  const sustainablelabelData = pageData.find((pd) => pd.__component === "sustainablelabel.sustainable-label") || {};
  const seoPageData = pageData.find((pd) => pd.__component === "shared.seo") || {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": seoPageData }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "linerlessHero": heroData })} ${renderComponent($$result2, "WhatIs", $$WhatIs, { "productWhatIs": linerlessWhatIsData })} ${renderComponent($$result2, "SustainableLabel", $$SustainableLabel, { "productSustainable": sustainablelabelData })} ` })}`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/pages/linerless-labels.astro", void 0);

const $$file = "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/pages/linerless-labels.astro";
const $$url = "/linerless-labels";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LinerlessLabels,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
