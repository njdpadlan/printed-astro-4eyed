import { c as createComponent, b as createAstro, d as addAttribute, w as renderHead, a as renderTemplate } from './astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Head;
  const { seoData } = Astro2.props;
  const metaDescription = seoData?.metaDescription || "Default description";
  const metaTitle = seoData?.metaTitle || "Print|ED";
  const keywords = seoData?.keywords || "default, keywords";
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(metaDescription, "content")}><meta name="keywords"${addAttribute(keywords, "content")}><title>${metaTitle}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Hepta+Slab:wght@1..900&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@1..900&display=swap" rel="stylesheet">${renderHead()}</head>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/layouts/Head.astro", void 0);

export { $$Head as $ };
