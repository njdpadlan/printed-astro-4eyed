import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import '../chunks/index_CR4ZvYMV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_u2X16kue.mjs';
/* empty css                                    */
import { $ as $$Head } from '../chunks/Head_BJ2lLxMS.mjs';
import { f as fetchApi, $ as $$Layout } from '../chunks/Layout_DJeW424u.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { servicesHero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="service-banner"> <div class="service-hero"> <h1>${servicesHero.serviceHeroHeader}</h1> ${renderComponent($$result, "Image", $$Image, { "src": servicesHero.serviceHeroImage.url, "alt": servicesHero.serviceHeroImage.alternativeText, "inferSize": true })} <p>${servicesHero.serviceHeroDesc}</p> <a href="/request-quote" class="service-btn">${servicesHero.serviceHeroBtn}</a> </div> </div>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/Services/Hero.astro", void 0);

const $$Astro = createAstro();
const $$ServicesTypes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesTypes;
  const { servicesType } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="service"> <div class="service-grid"> <section class="portal"> <div> <h2>${servicesType.servicePortalTitle}</h2> <p>${servicesType.servicePortalDesc}</p> </div> ${renderComponent($$result, "Image", $$Image, { "src": servicesType.servicePortalImage.url, "alt": servicesType.servicePortalImage.alternativeText, "inferSize": true })} </section> <section> <div> <h2>${servicesType.servicePoofingTitle}</h2> <p>${servicesType.servicePoofingDesc}</p> </div> ${renderComponent($$result, "Image", $$Image, { "src": servicesType.servicePoofingImage.url, "alt": servicesType.servicePoofingImage.alternativeText, "inferSize": true })} </section> <section class="warehouse"> <div> <h2>${servicesType.serviceWarehouseTitle}</h2> <p>${servicesType.serviceWarehouseDesc}</p> </div> ${renderComponent($$result, "Image", $$Image, { "src": servicesType.serviceWarehouseImage.url, "alt": servicesType.serviceWarehouseImage.alternativeText, "inferSize": true })} </section> </div> </div>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/Services/ServicesTypes.astro", void 0);

const $$OnlineServices = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchApi({
    endpoint: "services",
    page: "ServicePage",
    wrappedByKey: "data"
  });
  const aboutusPage = pages[0];
  const pageData = aboutusPage?.ServicePage || [];
  const heroData = pageData.find((pd) => pd.__component === "servicehero.service-hero") || {};
  const servicesTypesData = pageData.find((pd) => pd.__component === "servicestype.services-type") || {};
  const seoPageData = pageData.find((pd) => pd.__component === "shared.seo") || {};
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "seoData": seoPageData })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "servicesHero": heroData })} ${renderComponent($$result2, "ServicesTypes", $$ServicesTypes, { "servicesType": servicesTypesData })} ` })}`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/online-services.astro", void 0);

const $$file = "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/online-services.astro";
const $$url = "/online-services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$OnlineServices,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
