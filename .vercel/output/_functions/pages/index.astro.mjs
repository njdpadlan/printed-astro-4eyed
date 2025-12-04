import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                    */
import '../chunks/index_CR4ZvYMV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_u2X16kue.mjs';
import { f as fetchApi, $ as $$Layout } from '../chunks/Layout_DJeW424u.mjs';
import { $ as $$Head } from '../chunks/Head_BJ2lLxMS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const { homeHero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero-section"> <div class="video-container"> <video playsinline muted loop autoplay> <source${addAttribute(homeHero.heroBanner.url, "src")} type="video/mp4"${addAttribute(homeHero.heroBanner.alternativeText, "title")}> </video> </div> <div class="hero-card"> <h1>${homeHero.heroHeader}</h1> <p>${homeHero.heroText}</p> <!-- cards --> <div class="card-flex"> <div class="products-card"> <h2><img src="/assets/products-icon.svg" alt="Paper with lines and folded corner icon.">${homeHero.ourProductsHeader}</h2> <p>${homeHero.ourProductsText}</p> <a href="/products">${homeHero.ourProductsBtn}</a> </div> <div class="services-card"> <h2><img src="/assets/service-icon.svg" alt="A browser window for services icon.">${homeHero.onlineServicesHeader}</h2> <p>${homeHero.onlineServicesText}</p> <a href="/online-services">${homeHero.onlineServicesBtn}</a> </div> <div class="promo-card"> <h2><img src="/assets/promo-icon.svg" alt="Pen icon for promotional products">${homeHero.promoProductsHeader}</h2> <p>${homeHero.promoProductsText}</p> <a href="https://printedonline.espwebsite.com/" target="_blank">${homeHero.promoProductsBtn}</a> </div> </div> </div> </section>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/HomePage/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$HighQuality = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HighQuality;
  const { homeHighQuality } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="high-quality-section container"> <div class="quality-container"> ${renderComponent($$result, "Image", $$Image, { "src": homeHighQuality.highQualityImage.url, "alt": homeHighQuality.highQualityImage.alternativeText, "inferSize": true })} <div class="high-quality-card"> <h2>${homeHighQuality.highQualityHeader}</h2> <p>${homeHighQuality.highQualityText}</p> <a href="/about-us">${homeHighQuality.highQualityBtn}</a> </div> </div> </section>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/HomePage/HighQuality.astro", void 0);

const $$Astro$2 = createAstro();
const $$FeaturedProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturedProducts;
  const { homeFeaturedProducts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="featured-products"> <div class="featured-header-grid"> <h2>${homeFeaturedProducts.featuredProductsHeader}</h2> </div> <div class="product-grid"> <div class="products-section container"> <section class="linerless-label-section"> <h3>${homeFeaturedProducts.linerlessLabelTitle}</h3> ${renderComponent($$result, "Image", $$Image, { "src": homeFeaturedProducts.linerlessLabelImage.url, "alt": homeFeaturedProducts.linerlessLabelImage.alternativeText, "inferSize": true })} <a href="/linerless-labels">${homeFeaturedProducts.linerlessLabelBtn}</a> </section> <section class="pressure-seal-section"> <h3>${homeFeaturedProducts.pressureSealTitle}</h3> ${renderComponent($$result, "Image", $$Image, { "src": homeFeaturedProducts.pressureSealImage.url, "alt": homeFeaturedProducts.pressureSealImage.alternativeText, "inferSize": true })} <a href="/pressure-seal-forms">${homeFeaturedProducts.pressureSealBtn}</a> </section> <section class="integrated-section"> <h3>${homeFeaturedProducts.integratedFormText}</h3> ${renderComponent($$result, "Image", $$Image, { "src": homeFeaturedProducts.integratedFormImage.url, "alt": homeFeaturedProducts.integratedFormImage.alternativeText, "inferSize": true })} <a href="/integrated-form-labels">${homeFeaturedProducts.integratedFormBtn}</a> </section> </div> </div> </section>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/HomePage/FeaturedProducts.astro", void 0);

const $$Astro$1 = createAstro();
const $$OnlineBased = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OnlineBased;
  const { homeOnlineBased } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="online-services container"> <div class="service-container"> ${renderComponent($$result, "Image", $$Image, { "src": homeOnlineBased.onlineBasedImage.url, "alt": homeOnlineBased.onlineBasedImage.alternativeText, "inferSize": true })} <div class="online-card"> <h2>${homeOnlineBased.onlineBasedHeader}</h2> <p>${homeOnlineBased.onlineBasedText}</p> <a href="/online-services">${homeOnlineBased.onlineBasedBtn}</a> </div> </div> </section>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/HomePage/OnlineBased.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { homeAbout } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="about-section"> <div class="about-header-grid"> <h2>${homeAbout.aboutHeader}</h2> </div> <div class="about-grid"> <div class="about-info container"> <div class="about-flex"> <p>${homeAbout.aboutText}</p> <a href="/request-quote" class="about-request">${homeAbout.requestQuoteBtn}</a> <a href="/contact-us" class="about-contact">${homeAbout.contactUsBtn}</a> </div> ${renderComponent($$result, "Image", $$Image, { "src": homeAbout.aboutImage.url, "alt": homeAbout.aboutImage.alternativeText, "inferSize": true })} </div> </div> </section>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/HomePage/About.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchApi({
    endpoint: "homes",
    page: "HomePage",
    wrappedByKey: "data"
  });
  const homePage = pages[0];
  const pageData = homePage?.HomePage || [];
  const heroData = pageData.find((pd) => pd.__component === "homehero.home-hero") || {};
  const highQualityData = pageData.find((pd) => pd.__component === "highquality.high-quality") || {};
  const featuredProductsData = pageData.find((pd) => pd.__component === "featuredproducts.featured-products") || {};
  const onlineBasedData = pageData.find((pd) => pd.__component === "onlinebased.online-based") || {};
  const aboutData = pageData.find((pd) => pd.__component === "about.about") || {};
  const seoPageData = pageData.find((pd) => pd.__component === "shared.seo") || {};
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "seoData": seoPageData })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "homeHero": heroData })} ${renderComponent($$result2, "HighQuality", $$HighQuality, { "homeHighQuality": highQualityData })} ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, { "homeFeaturedProducts": featuredProductsData })} ${renderComponent($$result2, "OnlineBased", $$OnlineBased, { "homeOnlineBased": onlineBasedData })} ${renderComponent($$result2, "About", $$About, { "homeAbout": aboutData })} ` })}`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
