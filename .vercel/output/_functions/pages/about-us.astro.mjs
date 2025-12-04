import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import '../chunks/index_CR4ZvYMV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_u2X16kue.mjs';
/* empty css                                    */
import { f as fetchApi, $ as $$Layout } from '../chunks/Layout_DJeW424u.mjs';
import { $ as $$Head } from '../chunks/Head_BJ2lLxMS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$AboutUsWhy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutUsWhy;
  const { aboutUs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="about-bg"> <div class="about-wide-flex"> <div class="about-flex"> <div> <h2>${aboutUs.whyChooseHeader}</h2> <p>${aboutUs.whyChooseDesc}</p> </div> <div class="set-apart-flex"> <div> <h2>${aboutUs.whatSetsApartHeader}</h2> <p>${aboutUs.atPrintedDesc}</p> </div> <p>${aboutUs.withDecadesDesc}</p> <div class="set-apart-tag"> <p>${aboutUs.printSmarterText}</p> <p>${aboutUs.printedText}</p> </div> <a href="/contact-us" class="about-btn">${aboutUs.aboutUsBtn}</a> </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": aboutUs.aboutusWhyImage.url, "alt": aboutUs.aboutusWhyImage.alternativeText, "inferSize": true })} </div> </div>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/AboutUs/AboutUsWhy.astro", void 0);

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { aboutUsHero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="about-banner"> <div class="about-hero"> <h1>${aboutUsHero.aboutUsHeroHeader}</h1> ${renderComponent($$result, "Image", $$Image, { "src": aboutUsHero.aboutUsHeroImg.url, "alt": aboutUsHero.aboutUsHeroImg.alternativeText, "inferSize": true })} <div class="hero-tag"> <p>${aboutUsHero.smartPrintingText}</p> <p>${aboutUsHero.trustedExpertiseText}</p> <p>${aboutUsHero.canadianBasedText}</p> </div> <p>${aboutUsHero.aboutUsHeroDesc}</p> </div> </div>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/AboutUs/Hero.astro", void 0);

const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchApi({
    endpoint: "about-uses",
    page: "AboutUsPage",
    wrappedByKey: "data"
  });
  const aboutusPage = pages[0];
  const pageData = aboutusPage?.AboutUsPage || [];
  const heroData = pageData.find((pd) => pd.__component === "aboutushero.about-us-hero") || {};
  const aboutusWhyData = pageData.find((pd) => pd.__component === "aboutuswhy.about-us-why") || {};
  const seoPageData = pageData.find((pd) => pd.__component === "shared.seo") || {};
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "seoData": seoPageData })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "aboutUsHero": heroData })} ${renderComponent($$result2, "AboutUsWhy", $$AboutUsWhy, { "aboutUs": aboutusWhyData })} ` })}`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/about-us.astro", void 0);

const $$file = "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AboutUs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
