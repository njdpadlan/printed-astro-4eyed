import { c as createComponent, b as createAstro, a as renderTemplate, d as addAttribute, m as maybeRenderHead, w as renderHead, r as renderComponent, f as renderSlot } from './astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  const { logo } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<header> <div class="top-nav"> <div class="container"> <a href="tel:780-906-9959" aria-label="Call us for more information.">780-906-9959</a> <span>|</span> <a href="mailto:info@printedonline.ca" aria-label="Email us for more information.">info@printedonline.ca</a> </div> </div> <div class="container"> <div class="nav-container"> <a href="/"><img', "", '></a> <button class="toggle-nav" title="Navigation Button"> <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg> </button> <nav> <ul> <li><a href="/products">Our Products</a></li> <li><a href="/online-services">Online Services</a></li> <li><a href="/contact-us">Contact Us</a></li> <li><a href="/about-us">About Us</a></li> <li><a href="https://printedonline.espwebsite.com/" target="_blank" aria-label="Visit our promotional products website.">Promo Products</a></li> </ul> </nav> <a href="/request-quote" class="request">Request Quote</a> </div> </div> <a href="tel:780-906-9959" class="call-btn" aria-label="Call us for more information."><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="call-btn-svg" width="35px"> <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"></path> </svg></a> </header> <script type="module">\n  var btn = document.querySelector(".toggle-nav");\n\n  btn.addEventListener("click", function () {\n    document.querySelector("nav").classList.toggle("show-nav");\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(logo.NavLogo.url, "src"), addAttribute(logo.NavLogo.alternativeText, "alt"));
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/layouts/Nav.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const { logo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="container"> <div class="footer-container"> <div class="footer-logo-details"> <a href="/"><img${addAttribute(logo.FooterLogo.url, "src")}${addAttribute(logo.FooterLogo.alternativeText, "alt")}></a> <div class="footer-phone-container"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path> </svg> <a href="tel:780-906-9959" class="footer-phone" aria-label="Call us for more information.">780-906-9959</a> </div> <div class="footer-email-container"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path> </svg> <a href="mailto:info@printedonline.ca" class="footer-email" aria-label="Email us for more information.">info@printedonline.ca</a> </div> <a href="/request-quote" class="footer-request">Request Quote</a> </div> <span class="footer-line"></span> <div> <div class="footer-nav-container"> <ul class="footer-nav"> <li><a href="/about-us">About Us</a></li> <li><a href="/products">Our Products</a></li> <li><a href="/contact-us">Contact Us</a></li> <li><a href="/online-services">Online Services</a></li> </ul> <ul class="footer-products"> <li><a href="/linerless-labels">Linerless Labels</a></li> <li><a href="/pressure-seal-forms">Pressure Seal Forms</a></li> <li><a href="/integrated-form-labels">Integrated Label/Form Combinations</a></li> </ul> </div> </div> </div> <p class="footer-copyright">Copyright &copy; Print|ED ${year}</p> </div> </footer>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/layouts/Footer.astro", void 0);

async function fetchApi({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  page,
  locale
}) {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }
  const url = new URL(`${"https://truthful-song-3b4f8cc9a9.strapiapp.com"}/api/${endpoint}`);
  if (locale) {
    url.searchParams.append("locale", locale);
  }
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  if (page) {
    url.searchParams.append(`populate[${page}][populate]`, "*");
  } else {
    url.searchParams.append("populate", "*");
  }
  const res = await fetch(url.toString());
  let data = await res.json();
  {
    data = data[wrappedByKey];
  }
  if (wrappedByList) {
    data = data[0];
  }
  return data;
}

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const logoPageData = await fetchApi({
    endpoint: "logos",
    wrappedByKey: "data"
  });
  const { seo } = Astro2.props;
  const metaDescription = seo?.metaDescription || "Print|ED provides tailored, professional, and high-quality printing services across Canada. Trusted by businesses in Edmonton and Canada.";
  const metaTitle = seo?.metaTitle || "Print|ED Home | Trusted Printing Services in Canada";
  const keywords = seo?.keywords || "Canada printing services, Edmonton printing services, Canada printing products, Edmonton printing services";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(metaDescription, "content")}><meta name="keywords"${addAttribute(keywords, "content")}><title>${metaTitle}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Hepta+Slab:wght@1..900&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@1..900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, { "logo": logoPageData[0] })} <main> <div> ${renderSlot($$result, $$slots["default"])} </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "logo": logoPageData[0] })} </body></html>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/layouts/Layout.astro", void 0);

export { $$Layout as $, fetchApi as f };
