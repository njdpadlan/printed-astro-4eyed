import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, s as spreadAttributes, f as renderSlot, F as Fragment, g as defineStyleVars, h as defineScriptVars, i as createTransitionScope, e as renderScript } from '../chunks/astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import '../chunks/index_CR4ZvYMV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_u2X16kue.mjs';
/* empty css                                    */
import 'clsx';
import { f as fetchApi, $ as $$Layout } from '../chunks/Layout_DJeW424u.mjs';
import { $ as $$Head } from '../chunks/Head_BJ2lLxMS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$v = createAstro();
const $$ProductsHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$ProductsHero;
  const { productsHero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="products-banner"> <div class="products-hero"> <h1>${productsHero.productHeroHeader}</h1> ${renderComponent($$result, "Image", $$Image, { "src": productsHero.productHeroImage.url, "alt": productsHero.productHeroImage.alternativeText, "inferSize": true })} <p>${productsHero.productHeroText}</p> </div> </div>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/Products/ProductsHero.astro", void 0);

const $$Astro$u = createAstro();
const $$FeaturedProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$FeaturedProducts;
  const { featureProducts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="featured-products-grid"> <div class="featured-h2-grid"> <h2>${featureProducts.featureProductsHeader}</h2> </div> <div class="featured-products-bg"> <div class="products-container"> <section> <h3>${featureProducts.linerlessTitle}</h3> <p>${featureProducts.linerlessDesc}</p> ${renderComponent($$result, "Image", $$Image, { "src": featureProducts.linerlessImage.url, "alt": featureProducts.linerlessImage.alternativeText, "inferSize": true })} <a href="/linerless-labels" class="featured-btn">${featureProducts.linerlessBtn}</a> </section> <section> <h3>${featureProducts.pressuresealTitle}</h3> <p>${featureProducts.pressuresealDesc}</p> ${renderComponent($$result, "Image", $$Image, { "src": featureProducts.pressuresealImage.url, "alt": featureProducts.pressuresealImage.alternativeText, "inferSize": true })} <a href="/pressure-seal-forms" class="featured-btn">${featureProducts.pressuresealBtn}</a> </section> <section> <h3>${featureProducts.integratedformTitle}</h3> <p>${featureProducts.integratedformDesc}</p> ${renderComponent($$result, "Image", $$Image, { "src": featureProducts.integratedformImage.url, "alt": featureProducts.integratedformImage.alternativeText, "inferSize": true })} <a href="/integrated-form-labels" class="featured-btn">${featureProducts.integratedformBtn}</a> </section> </div> </div> </div>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/Products/FeaturedProducts.astro", void 0);

const $$Astro$t = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["accordion", className], "class:list")}${spreadAttributes(rest)} data-astro-cid-cpnlweum> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/accordion/Accordion.astro", void 0);

const $$Astro$s = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Heading;
  const headingOptions = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
  };
  const { level = "h2", size = level, ...rest } = Astro2.props;
  const Tag = headingOptions[level];
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["heading", size], ...rest, "data-astro-cid-zgbrtpeb": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/heading/Heading.astro", void 0);

const $$Astro$r = createAstro();
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const {
    class: className,
    title,
    name,
    headingLevel = "h3",
    headingSize = "h6",
    variant = "default",
    open = false,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["item", className], "class:list")}${spreadAttributes(rest)} data-astro-cid-v3uupwlt> <details${addAttribute(["wrapper", `variant-${variant}`], "class:list")}${addAttribute(name, "name")}${spreadAttributes(open ? { open } : {})} data-astro-cid-v3uupwlt> <summary class="title" data-astro-cid-v3uupwlt> ${renderComponent($$result, "Heading", $$Heading, { "level": headingLevel, "size": headingSize, "data-astro-cid-v3uupwlt": true }, { "default": ($$result2) => renderTemplate`${variant === "chevron" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-v3uupwlt": true }, { "default": ($$result3) => renderTemplate`${title}<span class="icon-chevron" data-astro-cid-v3uupwlt> <svg aria-hidden="true" width="12" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v3uupwlt> <path d="M1.4 1.6L6 6.2l4.6-4.6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v3uupwlt></path> </svg> </span> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-v3uupwlt": true }, { "default": ($$result3) => renderTemplate` <span class="icon-plus" data-astro-cid-v3uupwlt> <svg aria-hidden="true" width="20" height="2" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v3uupwlt> <path fill="currentColor" d="M20 .5v1H0v-1z" data-astro-cid-v3uupwlt></path> </svg> <svg width="2" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v3uupwlt> <path fill="currentColor" d="M1.5 20h-1V0h1z" data-astro-cid-v3uupwlt></path> </svg> </span> ${title}` })}`}` })} </summary> <div class="content" data-astro-cid-v3uupwlt> ${renderSlot($$result, $$slots["default"])} </div> </details> </li> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/accordion/AccordionItem.astro", void 0);

const $$Astro$q = createAstro();
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Avatar;
  const {
    class: className,
    img,
    initials,
    type = "default",
    shape = "round",
    size = "md",
    label,
    title,
    subtitle,
    ...rest
  } = Astro2.props;
  const getSizeValue = (size2) => {
    switch (size2) {
      case "sm":
        return "3rem";
      case "md":
        return "5rem";
      case "lg":
        return "7rem";
      default:
        return size2;
    }
  };
  const sizeValue = getSizeValue(size);
  const $$definedVars = defineStyleVars([{
    size: `${sizeValue}`
  }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["avatar", `shape-${shape}`, `type-${type}`, className], "class:list")}${spreadAttributes(rest)} data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}> ${img && renderTemplate`<div class="image" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}> <img${addAttribute(img, "src")}${addAttribute(label || title || "", "alt")} loading="lazy" decoding="async" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}> </div>`} ${initials && !img && renderTemplate`<div class="initials-container" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}> <span class="initials" role="img"${addAttribute(label || title || "", "aria-label")} data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}> ${initials} </span> </div>`} ${!initials && !img && renderTemplate`<div class="icon-container" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}> <span class="icon" role="img"${addAttribute(label || title || "User avatar", "aria-label")} data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}> <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}></path> <circle cx="12" cy="7" r="4" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}></circle> </svg> </span> </div>`} ${(title || subtitle) && renderTemplate`<div class="content" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}> ${title && renderTemplate`<p class="title" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}>${title}</p>`} ${subtitle && renderTemplate`<p class="subtitle" data-astro-cid-mpbry7dl${addAttribute($$definedVars, "style")}>${subtitle}</p>`} </div>`} </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/avatar/Avatar.astro", void 0);

const $$Astro$p = createAstro();
const $$AvatarGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$AvatarGroup;
  const {
    class: className,
    display = "condensed",
    gridItemsSize = "200px",
    gridGap = "1rem",
    overlapAmount = "-1rem",
    ...rest
  } = Astro2.props;
  const validatedOverlapAmount = display === "condensed" && !overlapAmount.startsWith("-") ? `-${overlapAmount}` : overlapAmount;
  const $$definedVars = defineStyleVars([{ gridItemsSize, gridGap, overlapAmount: validatedOverlapAmount }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["avatar-group", `display-${display}`, className], "class:list")}${spreadAttributes(rest)} data-astro-cid-nh3p365k${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/avatar/AvatarGroup.astro", void 0);

const $$Astro$o = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Badge;
  const {
    class: className,
    type = "default",
    size = "md",
    isButton = false,
    animateOnHover = false,
    animationType = "boop",
    animationIntensity = 5,
    isCircular = false,
    isPill = false,
    pulse = false,
    label,
    ...rest
  } = Astro2.props;
  const clampedIntensity = Math.max(1, Math.min(10, animationIntensity));
  const scaleAmount = 1 + clampedIntensity * 0.02;
  const rotateAmount = clampedIntensity * 2;
  const shouldAnimate = isButton && animateOnHover && animationType !== "none";
  const animationClass = shouldAnimate ? `animate-${animationType}-svg` : "";
  const circularClass = isCircular ? "circular" : "";
  const pillClass = isPill ? "pill" : "";
  const pulseClass = pulse ? "animation-pulse" : "";
  const sizeClass = `size-${size}`;
  return renderTemplate`${isButton ? renderTemplate`${maybeRenderHead()}<button${addAttribute([
    "badge",
    sizeClass,
    `type-${type}`,
    animationClass,
    circularClass,
    pillClass,
    pulseClass,
    className
  ], "class:list")}${addAttribute(`--scaleAmount: ${scaleAmount}; --rotateAmount: ${rotateAmount}deg;`, "style")}${spreadAttributes(rest)} data-astro-cid-q754tkqb>${label && renderTemplate`<span class="sr-only" data-astro-cid-q754tkqb>${label}</span>`}${renderSlot($$result, $$slots["default"])}</button>` : renderTemplate`<span${addAttribute([
    "badge",
    sizeClass,
    `type-${type}`,
    circularClass,
    pillClass,
    pulseClass,
    className
  ], "class:list")}${spreadAttributes(rest)} data-astro-cid-q754tkqb>${label && renderTemplate`<span class="sr-only" data-astro-cid-q754tkqb>${label}</span>`}${renderSlot($$result, $$slots["default"])}</span>`}`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/badge/Badge.astro", void 0);

const $$Astro$n = createAstro();
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { class: className, ariaLabel = "Breadcrumbs", ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["breadcrumbs", className], "class:list")}${addAttribute(ariaLabel, "aria-label")}${spreadAttributes(rest)} data-astro-cid-o726yemk> <ol class="list" data-astro-cid-o726yemk> ${renderSlot($$result, $$slots["default"])} </ol> </nav> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/breadcrumbs/Breadcrumbs.astro", void 0);

const $$Astro$m = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    class: className,
    id,
    htmlType = "button",
    disabled = false,
    variant = "filled",
    type = "default",
    size = "md",
    ariaLabel,
    ariaDescribedby,
    animateOnHover = false,
    animationType = "boop",
    animationIntensity = 5,
    pulse = false,
    ...rest
  } = Astro2.props;
  const clampedIntensity = Math.max(1, Math.min(10, animationIntensity));
  const scaleAmount = 1 + clampedIntensity * 0.02;
  const rotateAmount = clampedIntensity * 2;
  const shouldAnimate = animateOnHover && animationType !== "none";
  const animationClass = shouldAnimate ? `animate-${animationType}-svg` : "";
  const pulseClass = pulse ? "animation-pulse" : "";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(id, "id")}${addAttribute(htmlType, "type")}${addAttribute([
    "button",
    `button--${variant}`,
    `type-${type}`,
    `button--${size}`,
    animationClass,
    pulseClass,
    className
  ], "class:list")}${addAttribute(shouldAnimate || pulse ? `--scaleAmount: ${scaleAmount}; --rotateAmount: ${rotateAmount}deg;` : void 0, "style")}${addAttribute(disabled, "disabled")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(ariaDescribedby, "aria-describedby")}${spreadAttributes(rest)} data-astro-cid-upfnywxm> ${renderSlot($$result, $$slots["default"])} </button> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/button/Button.astro", void 0);

const $$Astro$l = createAstro();
const $$BreadcrumbsItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$BreadcrumbsItem;
  const {
    class: className,
    label = "Breadcrumb",
    href = "#",
    currentPage = false,
    hasIcon = false,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["item", className], "class:list")}${spreadAttributes(rest)} data-astro-cid-whcg5jpn> ${currentPage ? renderTemplate`<span aria-current="page"${addAttribute([hasIcon ? "has-icon" : ""], "class:list")} data-astro-cid-whcg5jpn> ${hasIcon ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-whcg5jpn": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon"])} <span class="sr-only" data-astro-cid-whcg5jpn>${label}</span> ` })}` : label} </span>` : renderTemplate`<a${addAttribute(href, "href")}${addAttribute([hasIcon ? "has-icon" : ""], "class:list")} data-astro-cid-whcg5jpn> ${hasIcon ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-whcg5jpn": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon"])} <span class="sr-only" data-astro-cid-whcg5jpn>${label}</span> ` })}` : label} </a>`} ${renderSlot($$result, $$slots["separator"], renderTemplate` <span class="separator" aria-hidden="true" data-astro-cid-whcg5jpn>/</span> `)} </li> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/breadcrumbs/BreadcrumbsItem.astro", void 0);

const $$Astro$k = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    class: className,
    href,
    isExternal = false,
    hideIcon = false,
    isButton = false,
    variant = "filled",
    type = "default",
    size = "md",
    ariaLabel,
    title,
    animateOnHover = false,
    animationType = "boop",
    animationIntensity = 5,
    pulse = false,
    rel,
    ...rest
  } = Astro2.props;
  const parseRelTokens = (value) => value.split(/\s+/).map((token) => token.trim()).filter(Boolean);
  const ensureRel = (base, extra) => {
    const finalTokens = /* @__PURE__ */ new Set();
    parseRelTokens(base).forEach((token) => finalTokens.add(token));
    if (typeof extra === "string") {
      parseRelTokens(extra).forEach((token) => finalTokens.add(token));
    }
    return finalTokens.size > 0 ? Array.from(finalTokens).join(" ") : void 0;
  };
  const externalRelDefaults = "noopener noreferrer";
  const finalRel = isExternal ? ensureRel(externalRelDefaults, rel) : ensureRel("", rel);
  const externalAttrs = isExternal ? {
    target: "_blank"
  } : {};
  const clampedIntensity = Math.max(1, Math.min(10, animationIntensity));
  const scaleAmount = 1 + clampedIntensity * 0.02;
  const rotateAmount = clampedIntensity * 2;
  const shouldAnimate = isButton && animateOnHover && animationType !== "none";
  const animationClass = shouldAnimate ? `animate-${animationType}-svg` : "";
  const pulseClass = pulse ? "animation-pulse" : "";
  const buttonClasses = isButton ? ["button", `button--${variant}`, `type-${type}`, `button--${size}`, animationClass, pulseClass] : [];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    className,
    isButton ? buttonClasses : "link",
    { "link--external": isExternal && !isButton }
  ], "class:list")}${addAttribute(shouldAnimate || pulse ? `--scaleAmount: ${scaleAmount}; --rotateAmount: ${rotateAmount}deg;` : void 0, "style")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(title, "title")}${addAttribute(finalRel, "rel")}${spreadAttributes(externalAttrs)}${spreadAttributes(rest)} data-astro-cid-lhox4pm7>${renderSlot($$result, $$slots["default"])}${isExternal && !hideIcon && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-lhox4pm7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-lhox4pm7": true }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["icon"], renderTemplate` <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lhox4pm7> <path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-lhox4pm7></path> </svg> `)} <span class="sr-only" data-astro-cid-lhox4pm7>Opens in a new tab</span> ` })} ` })}`}</a>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/link/Link.astro", void 0);

const $$Astro$j = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    class: className,
    title = "Default title",
    img = "https://placehold.co/640x360",
    imageComponent,
    imageAlt = "",
    width = 640,
    height = 360,
    inferSize = false,
    url = "#",
    headingLevel = "h3",
    headingSize = "h6",
    footer = "",
    fullHeight = false,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["card", { "card--full-height": fullHeight }, className], "class:list")}${spreadAttributes(rest)} data-astro-cid-ynhdw64j> <div class="image" data-astro-cid-ynhdw64j> ${imageComponent ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageComponent, "alt": imageAlt, "width": width, "height": height, "data-astro-cid-ynhdw64j": true })}` : renderTemplate`<img${addAttribute(img, "src")}${addAttribute(imageAlt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")} data-astro-cid-ynhdw64j>`} </div> <div class="content" data-astro-cid-ynhdw64j> <div class="title" data-astro-cid-ynhdw64j> ${renderComponent($$result, "Heading", $$Heading, { "level": headingLevel, "size": headingSize, "data-astro-cid-ynhdw64j": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "href": url, "data-astro-cid-ynhdw64j": true }, { "default": ($$result3) => renderTemplate`${title}` })} ` })} </div> <div class="meta" data-astro-cid-ynhdw64j>${renderSlot($$result, $$slots["meta"])}</div> <p class="description" data-astro-cid-ynhdw64j>${renderSlot($$result, $$slots["default"])}</p> ${footer && renderTemplate`<small class="footer" data-astro-cid-ynhdw64j>${footer}</small>`} </div> </article> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/card/Card.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$i = createAstro();
const $$DarkMode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$DarkMode;
  const { class: className, label = "Toggle Dark Mode", initialMode = "auto", ...rest } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<button", ' aria-pressed="false"', "", "", " data-astro-cid-pvqsmiwf", '> <span class="icon icon-light" data-astro-cid-pvqsmiwf> ', ' </span> <span class="icon icon-dark" data-astro-cid-pvqsmiwf> ', " </span> </button> <script>(function(){", "\n  // Only run once\n  if (!window.darkModeInitialized) {\n    window.darkModeInitialized = true\n\n    const root = document.documentElement\n    let darkMode = localStorage.getItem('darkMode')\n\n    const enableDarkMode = (store = true) => {\n      const darkModeToggles = document.querySelectorAll('.darkmode-toggle')\n      root.classList.add('darkmode')\n      root.style.colorScheme = 'dark'\n      darkModeToggles.forEach((toggle) => toggle.setAttribute('aria-pressed', 'true'))\n      if (store) localStorage.setItem('darkMode', 'enabled')\n    }\n\n    const disableDarkMode = (store = true) => {\n      const darkModeToggles = document.querySelectorAll('.darkmode-toggle')\n      root.classList.remove('darkmode')\n      root.style.colorScheme = 'light'\n      darkModeToggles.forEach((toggle) => toggle.setAttribute('aria-pressed', 'false'))\n      if (store) localStorage.setItem('darkMode', 'disabled')\n    }\n\n    const checkPreference = () => {\n      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n        enableDarkMode(false)\n      } else {\n        disableDarkMode(false)\n      }\n    }\n\n    const initializeDarkMode = () => {\n      if (darkMode) {\n        darkMode === 'enabled' ? enableDarkMode() : disableDarkMode()\n        return\n      }\n\n      switch (initialMode) {\n        case 'dark':\n          enableDarkMode()\n          break\n        case 'light':\n          disableDarkMode()\n          break\n        default: // 'auto'\n          checkPreference()\n      }\n    }\n\n    // execution\n    initializeDarkMode()\n\n    // Add click handlers to all toggles\n    document.addEventListener('click', (e) => {\n      if (e.target.closest('.darkmode-toggle')) {\n        darkMode = root.classList.contains('darkmode')\n        !darkMode ? enableDarkMode() : disableDarkMode()\n      }\n    })\n\n    // Listen for view transitions\n    document.addEventListener('astro:after-swap', () => {\n      darkMode = localStorage.getItem('darkMode')\n      initializeDarkMode()\n    })\n  }\n})();<\/script> "])), maybeRenderHead(), addAttribute(["darkmode-toggle", className], "class:list"), addAttribute(label, "aria-label"), addAttribute(initialMode, "data-initial-mode"), spreadAttributes(rest), addAttribute(createTransitionScope($$result, "dafcdbmg"), "data-astro-transition-persist"), renderSlot($$result, $$slots["light"], renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-pvqsmiwf> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor" data-astro-cid-pvqsmiwf></path> </svg> `), renderSlot($$result, $$slots["dark"], renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-pvqsmiwf> <path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z" data-astro-cid-pvqsmiwf></path> </svg> `), defineScriptVars({ initialMode }));
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/darkmode/DarkMode.astro", "self");

const $$Astro$h = createAstro();
const $$Media = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Media;
  const {
    class: className,
    src = "https://fakeimg.pl/640x360",
    alt = "",
    ratio = "auto",
    loading = "lazy",
    decoding = "async",
    fetchpriority = "auto",
    ...rest
  } = Astro2.props;
  const aspectRatios = {
    "1:1": "1",
    "4:3": "4/3",
    "16:9": "16/9",
    "21:9": "21/9",
    auto: "auto"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["media-wrapper", className], "class:list")}${addAttribute(ratio, "data-ratio")}${spreadAttributes(rest)} data-astro-cid-rhfzfgjd> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}${addAttribute(fetchpriority, "fetchpriority")}${addAttribute(ratio !== "auto" ? `aspect-ratio: ${aspectRatios[ratio]};` : "", "style")} data-astro-cid-rhfzfgjd> </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/media/Media.astro", void 0);

const $$Astro$g = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Modal;
  const {
    class: className,
    title,
    triggerId,
    closeText = "Close",
    closeIcon = true,
    headingSize = "h2",
    ...rest
  } = Astro2.props;
  const titleId = `${triggerId}-title`;
  return renderTemplate`${maybeRenderHead()}<dialog${addAttribute(["modal", className], "class:list")}${addAttribute(titleId, "aria-labelledby")}${addAttribute(triggerId, "data-trigger-id")}${spreadAttributes(rest)} data-astro-cid-7finwimi> <div class="modal-inner" data-astro-cid-7finwimi> <div class="modal-content" data-astro-cid-7finwimi> ${renderComponent($$result, "Heading", $$Heading, { "level": "h3", "size": headingSize, "id": titleId, "tabindex": "-1", "autofocus": true, "data-astro-cid-7finwimi": true }, { "default": ($$result2) => renderTemplate`${title}` })} ${renderSlot($$result, $$slots["default"], renderTemplate`Modal description.`)} </div> <div class="modal-close" data-astro-cid-7finwimi> <button data-astro-cid-7finwimi> ${closeIcon && renderTemplate`<span class="modal-close-icon" data-astro-cid-7finwimi> <svg width="20" height="2" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-7finwimi> <path fill="currentColor" d="M20 .5v1H0v-1z" data-astro-cid-7finwimi></path> </svg> <svg width="20" height="2" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-7finwimi> <path fill="currentColor" d="M20 .5v1H0v-1z" data-astro-cid-7finwimi></path> </svg> </span>`} <span class="sr-only" data-astro-cid-7finwimi>${closeText}</span> </button> </div> </div> </dialog> ${renderScript($$result, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/modal/Modal.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/modal/Modal.astro", void 0);

const $$Astro$f = createAstro();
const $$Notification = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Notification;
  const {
    class: className,
    message = "This is a notification!",
    type = "default",
    variant = "default",
    element = "div",
    role = "none",
    ...rest
  } = Astro2.props;
  const Element = element;
  return renderTemplate`${renderComponent($$result, "Element", Element, { "class:list": ["notification", `type-${type}`, `variant-${variant}`, className], "role": role, ...rest, "data-astro-cid-pnrsh66h": true }, { "default": ($$result2) => renderTemplate`${variant === "accent" && renderTemplate`${maybeRenderHead()}<span class="icon" data-astro-cid-pnrsh66h> ${type === "default" && renderTemplate`<svg width="1.25em" height="1.25em" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-astro-cid-pnrsh66h> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" data-astro-cid-pnrsh66h></path> </svg>`} ${type === "info" && renderTemplate`<svg width="1.25em" height="1.25em" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-astro-cid-pnrsh66h> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-pnrsh66h> <circle cx="12" cy="12" r="10" data-astro-cid-pnrsh66h></circle> <path d="M12 16v-4m0-4h.01" data-astro-cid-pnrsh66h></path> </g> </svg>`} ${type === "success" && renderTemplate`<svg width="1.25em" height="1.25em" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-astro-cid-pnrsh66h> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-pnrsh66h> <circle cx="12" cy="12" r="10" data-astro-cid-pnrsh66h></circle> <path d="m9 12l2 2l4-4" data-astro-cid-pnrsh66h></path> </g> </svg>`} ${type === "warning" && renderTemplate`<svg width="1.25em" height="1.25em" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-astro-cid-pnrsh66h> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" data-astro-cid-pnrsh66h></path> </svg>`} ${type === "error" && renderTemplate`<svg width="1.25em" height="1.25em" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-astro-cid-pnrsh66h> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-pnrsh66h> <circle cx="12" cy="12" r="10" data-astro-cid-pnrsh66h></circle> <path d="m15 9l-6 6m0-6l6 6" data-astro-cid-pnrsh66h></path> </g> </svg>`} </span>`}${renderSlot($$result2, $$slots["default"], renderTemplate` <p data-astro-cid-pnrsh66h><strong data-astro-cid-pnrsh66h>Message:</strong> ${message}</p> `)} ` })} `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/notification/Notification.astro", void 0);

const $$Astro$e = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    class: className,
    currentPage = "1",
    totalPages = "12",
    firstPage = "#",
    previousPage = "#",
    nextPage = "#",
    lastPage = "#",
    ariaLabel = "Pagination",
    firstPageLabel = "Go to the first page",
    previousPageLabel = "Go to the previous page",
    nextPageLabel = "Go to the next page",
    lastPageLabel = "Go to the last page",
    renderProgress = ({ currentPage: currentPage2, totalPages: totalPages2 }) => `Page ${currentPage2} of ${totalPages2}`,
    renderPageLabel,
    ...rest
  } = Astro2.props;
  const defaultRenderPageLabel = ({ type, page }) => {
    switch (type) {
      case "first":
        return firstPageLabel;
      case "previous":
        return previousPageLabel;
      case "next":
        return nextPageLabel;
      case "last":
        return lastPageLabel;
      default:
        return `Go to page ${page}`;
    }
  };
  const pageLabel = renderPageLabel || defaultRenderPageLabel;
  const progress = renderProgress({ currentPage, totalPages });
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["pagination", className], "class:list")}${addAttribute(ariaLabel, "aria-label")}${spreadAttributes(rest)} data-astro-cid-nfgmhllf> <ul class="list" data-astro-cid-nfgmhllf> <li data-astro-cid-nfgmhllf> ${firstPage ? renderTemplate`<a${addAttribute(firstPage, "href")}${addAttribute(pageLabel({ type: "first", page: 1 }), "aria-label")} data-astro-cid-nfgmhllf> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nfgmhllf> <path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nfgmhllf></path> <path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nfgmhllf></path> </svg> </a>` : renderTemplate`<span class="disabled" data-astro-cid-nfgmhllf> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nfgmhllf> <path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nfgmhllf></path> <path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nfgmhllf></path> </svg> </span>`} </li> <li data-astro-cid-nfgmhllf> ${previousPage ? renderTemplate`<a${addAttribute(previousPage, "href")}${addAttribute(pageLabel({
    type: "previous",
    page: Number(currentPage) - 1
  }), "aria-label")} data-astro-cid-nfgmhllf> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-nfgmhllf> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5" data-astro-cid-nfgmhllf></path> </svg> </a>` : renderTemplate`<span class="disabled" data-astro-cid-nfgmhllf> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-nfgmhllf> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5" data-astro-cid-nfgmhllf></path> </svg> </span>`} </li> <li data-astro-cid-nfgmhllf> <span data-astro-cid-nfgmhllf>${progress}</span> </li> <li data-astro-cid-nfgmhllf> ${nextPage ? renderTemplate`<a${addAttribute(nextPage, "href")}${addAttribute(pageLabel({
    type: "next",
    page: Number(currentPage) + 1
  }), "aria-label")} data-astro-cid-nfgmhllf> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-nfgmhllf> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5" data-astro-cid-nfgmhllf></path> </svg> </a>` : renderTemplate`<span class="disabled" data-astro-cid-nfgmhllf> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-nfgmhllf> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5" data-astro-cid-nfgmhllf></path> </svg> </span>`} </li> <li data-astro-cid-nfgmhllf> ${lastPage ? renderTemplate`<a${addAttribute(lastPage, "href")}${addAttribute(pageLabel({
    type: "last",
    page: totalPages
  }), "aria-label")} data-astro-cid-nfgmhllf> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nfgmhllf> <path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nfgmhllf></path> <path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nfgmhllf></path> </svg> </a>` : renderTemplate`<span class="disabled" data-astro-cid-nfgmhllf> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nfgmhllf> <path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nfgmhllf></path> <path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nfgmhllf></path> </svg> </span>`} </li> </ul> </nav> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/pagination/Pagination.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$d = createAstro();
const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SkipLink;
  const {
    class: className,
    text = "Skip to main content",
    target = "#main-content",
    ...rest
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<div", "", " data-astro-cid-nwlnqdlu> <a", " data-astro-cid-nwlnqdlu>", "</a> </div> <script>(function(){", "\n  // variables\n  const skipLink = document.querySelector('.skip-link a')\n\n  // execution\n  skipLink.addEventListener('keydown', (event) => {\n    if (!event.target.closest('a')) return\n    const key = event.key\n\n    if (key !== 'Enter') return\n    event.preventDefault()\n\n    if (document.querySelector(target)) {\n      const targetElement = document.querySelector(target)\n      targetElement.setAttribute('tabindex', '-1')\n      targetElement.focus()\n    } else if (!document.querySelector(target) && document.querySelector('h1')) {\n      const h1 = document.querySelector('h1')\n      h1.setAttribute('tabindex', '-1')\n      h1.focus()\n    } else {\n      console.warn('SkipLink is not set, either missing an h1 or main content id on the page.')\n    }\n  })\n})();<\/script> "])), maybeRenderHead(), addAttribute(["skip-link", className], "class:list"), spreadAttributes(rest), addAttribute(target, "href"), text, defineScriptVars({ target }));
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/skiplink/SkipLink.astro", void 0);

const $$Astro$c = createAstro();
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tabs", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/tabs/Tabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/tabs/Tabs.astro", void 0);

const $$Astro$b = createAstro();
const $$TabsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TabsList;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tabs-list", className], "class:list")} role="tablist"${spreadAttributes(rest)} data-astro-cid-3s5txno4> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/tabs/TabsList.astro", void 0);

const $$Astro$a = createAstro();
const $$TabsPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TabsPanel;
  const { class: className, id, labelledby, selected = false, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tab-panel", className], "class:list")} role="tabpanel"${addAttribute(id, "id")}${addAttribute(labelledby, "aria-labelledby")}${addAttribute(!selected, "aria-hidden")}${spreadAttributes(rest)} data-astro-cid-nhjsydmt> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/tabs/TabsPanel.astro", void 0);

const $$Astro$9 = createAstro();
const $$TabsTab = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TabsTab;
  const { class: className, id, controls, selected = false, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(id, "id")} role="tab"${addAttribute(["tab", className], "class:list")}${addAttribute(controls, "aria-controls")}${addAttribute(selected, "aria-selected")}${addAttribute(selected ? 0 : -1, "tabindex")}${spreadAttributes(rest)} data-astro-cid-ckvbxbek> ${renderSlot($$result, $$slots["default"])} </button> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/tabs/TabsTab.astro", void 0);

const $$Astro$8 = createAstro();
const $$Video = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Video;
  const {
    class: className,
    src,
    title = "YouTube video player",
    ratio = "16:9",
    loading = "lazy",
    ...rest
  } = Astro2.props;
  const aspectRatios = {
    "1:1": "1",
    "4:3": "4/3",
    "16:9": "16/9",
    "21:9": "21/9"
  };
  const getVideoUrl = (url) => {
    const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch && youtubeMatch[2].length === 11) {
      const videoId = youtubeMatch[2];
      const siParam = Date.now().toString(36);
      const params = new URLSearchParams({
        si: siParam,
        disablekb: "1",
        rel: "0",
        modestbranding: "1",
        controls: "1",
        playsinline: "1",
        showinfo: "0",
        iv_load_policy: "3"
      });
      return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
    }
    return url;
  };
  const videoUrl = getVideoUrl(src);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["video-wrapper", className], "class:list")} data-video-wrapper${addAttribute(ratio, "data-ratio")}${spreadAttributes(rest)} data-astro-cid-if7ezbtx> <iframe${addAttribute(videoUrl, "src")}${addAttribute(title, "title")}${addAttribute(loading, "loading")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen${addAttribute(`aspect-ratio: ${aspectRatios[ratio]};`, "style")} data-astro-cid-if7ezbtx></iframe> </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/video/Video.astro", void 0);

const $$Astro$7 = createAstro();
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const {
    class: className,
    id,
    name,
    label,
    value,
    checked = false,
    disabled = false,
    ...rest
  } = Astro2.props;
  const inputId = id || `checkbox-${name}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["checkbox-group", className], "class:list")} data-astro-cid-64sr2jek> <input type="checkbox"${addAttribute(inputId, "id")}${addAttribute(name, "name")}${addAttribute(value, "value")}${addAttribute(checked, "checked")}${addAttribute(disabled, "disabled")}${spreadAttributes(rest, void 0, { "class": "astro-64sr2jek" })} data-astro-cid-64sr2jek> <label${addAttribute(inputId, "for")} data-astro-cid-64sr2jek> <span data-astro-cid-64sr2jek>${label}</span> </label> </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/forms/Checkbox.astro", void 0);

const $$Astro$6 = createAstro();
const $$Fieldset = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Fieldset;
  const {
    name,
    id,
    legend,
    required = false,
    "data-validation": dataValidation,
    class: className,
    variant = "default",
    ...rest
  } = Astro2.props;
  const fieldsetId = id || `fieldset-${name}`;
  const getDefaultValidationMessage = (isRequired) => {
    return isRequired ? "Please select at least one option" : "";
  };
  const validationMessage = dataValidation || getDefaultValidationMessage(required);
  return renderTemplate`${maybeRenderHead()}<fieldset${addAttribute(["fieldset", className, variant], "class:list")}${addAttribute(fieldsetId, "id")}${addAttribute(name, "name")}${addAttribute(validationMessage, "data-validation")}${addAttribute(required, "data-required")}${addAttribute(required ? `${fieldsetId}-validation` : void 0, "aria-describedby")}${spreadAttributes(rest)} data-astro-cid-h5rg5div> <legend data-astro-cid-h5rg5div> ${legend} ${required && renderTemplate`<span data-astro-cid-h5rg5div>(required)</span>`} </legend> <div class="fieldset-group" data-astro-cid-h5rg5div> ${renderSlot($$result, $$slots["default"])} </div> ${required && renderTemplate`<small${addAttribute(`${fieldsetId}-validation`, "id")} data-astro-cid-h5rg5div> <span class="icon" data-astro-cid-h5rg5div> <svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-astro-cid-h5rg5div> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-h5rg5div> <circle cx="12" cy="12" r="10" data-astro-cid-h5rg5div></circle> <path d="m15 9l-6 6m0-6l6 6" data-astro-cid-h5rg5div></path> </g> </svg> </span> <span class="message" data-astro-cid-h5rg5div></span> </small>`} </fieldset> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/forms/Fieldset.astro", void 0);

const $$Astro$5 = createAstro();
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Form;
  const {
    class: className,
    action,
    name,
    method = "post",
    enctype = "application/x-www-form-urlencoded",
    target = "_self",
    autocomplete = "on",
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form${addAttribute(["form", "js-validate", className], "class:list")}${addAttribute(action, "action")}${addAttribute(method, "method")}${addAttribute(enctype, "enctype")}${addAttribute(target, "target")}${addAttribute(autocomplete, "autocomplete")} novalidate${spreadAttributes(rest)} data-astro-cid-agqpxm5o> ${renderComponent($$result, "Notification", $$Notification, { "type": "error", "ariaLive": "polite", "variant": "accent", "hidden": true, "data-astro-cid-agqpxm5o": true })} ${renderSlot($$result, $$slots["default"])} </form> ${renderScript($$result, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/forms/Form.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/forms/Form.astro", void 0);

const $$Astro$4 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    class: className,
    id,
    name,
    label,
    "data-validation": dataValidation,
    type = "text",
    required = false,
    "data-validation-pattern": dataValidationPattern,
    "data-validation-fn": dataValidationFn,
    value,
    disabled = false,
    readonly = false,
    autocomplete = "on",
    ...rest
  } = Astro2.props;
  const inputId = id || `input-${name}`;
  const getDefaultValidationMessage = (inputType, isRequired) => {
    switch (inputType) {
      case "email":
        return "Please provide an email address, for example houston@astro.build";
      case "tel":
        return "Please provide a valid phone number";
      case "password":
        return "Password must be at least 8 characters long";
      case "url":
        return "Please provide a valid URL, for example https://astro.build";
      case "text":
      default:
        return isRequired ? "This field is required" : "";
    }
  };
  const validationMessage = dataValidation || getDefaultValidationMessage(type, required);
  return renderTemplate`${maybeRenderHead()}<div class="input-group" data-astro-cid-nrw5fy6w> <label${addAttribute(["input-group-label", className], "class:list")}${addAttribute(inputId, "for")}${addAttribute(validationMessage, "data-validation")} data-astro-cid-nrw5fy6w> <span data-astro-cid-nrw5fy6w>${label}</span> ${required && renderTemplate`<span data-astro-cid-nrw5fy6w>(required)</span>`} </label> <input${addAttribute(type, "type")}${addAttribute(inputId, "id")}${addAttribute(name, "name")}${addAttribute(value, "value")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(readonly, "readonly")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(`${inputId}-validation`, "aria-describedby")}${addAttribute(validationMessage, "data-validation")}${addAttribute(dataValidationPattern, "data-validation-pattern")}${addAttribute(dataValidationFn, "data-validation-fn")}${spreadAttributes(rest, void 0, { "class": "astro-nrw5fy6w" })} data-astro-cid-nrw5fy6w> <small${addAttribute(`${inputId}-validation`, "id")} data-astro-cid-nrw5fy6w> <span class="icon" data-astro-cid-nrw5fy6w> <svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-astro-cid-nrw5fy6w> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-nrw5fy6w> <circle cx="12" cy="12" r="10" data-astro-cid-nrw5fy6w></circle> <path d="m15 9l-6 6m0-6l6 6" data-astro-cid-nrw5fy6w></path> </g> </svg> </span> <span class="message" data-astro-cid-nrw5fy6w></span> </small> </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/forms/Input.astro", void 0);

const $$Astro$3 = createAstro();
const $$Radio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Radio;
  const {
    class: className,
    id,
    name,
    label,
    value,
    checked = false,
    disabled = false,
    ...rest
  } = Astro2.props;
  const inputId = id || `radio-${name}-${value}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["radio-group", className], "class:list")} data-astro-cid-7pp5rxdk> <input type="radio"${addAttribute(inputId, "id")}${addAttribute(name, "name")}${addAttribute(value, "value")}${addAttribute(checked, "checked")}${addAttribute(disabled, "disabled")}${spreadAttributes(rest, void 0, { "class": "astro-7pp5rxdk" })} data-astro-cid-7pp5rxdk> <label${addAttribute(inputId, "for")} data-astro-cid-7pp5rxdk> <span data-astro-cid-7pp5rxdk>${label}</span> </label> </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/forms/Radio.astro", void 0);

const $$Astro$2 = createAstro();
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Textarea;
  const {
    class: className,
    id,
    name,
    label,
    "data-validation": dataValidation,
    required = false,
    "data-validation-pattern": dataValidationPattern,
    "data-validation-fn": dataValidationFn,
    value,
    disabled = false,
    readonly = false,
    autocomplete = "on",
    rows,
    cols,
    placeholder,
    ...rest
  } = Astro2.props;
  const inputId = id || `textarea-${name}`;
  const getDefaultValidationMessage = (isRequired) => {
    return isRequired ? "This field is required" : "";
  };
  const validationMessage = dataValidation || getDefaultValidationMessage(required);
  return renderTemplate`${maybeRenderHead()}<div class="textarea-group" data-astro-cid-boif6lpn> <label${addAttribute(inputId, "for")}${addAttribute(validationMessage, "data-validation")} data-astro-cid-boif6lpn> <span data-astro-cid-boif6lpn>${label}</span> ${required && renderTemplate`<span data-astro-cid-boif6lpn>(required)</span>`} </label> <textarea${addAttribute(inputId, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(readonly, "readonly")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(rows, "rows")}${addAttribute(cols, "cols")}${addAttribute(placeholder, "placeholder")}${addAttribute(`${inputId}-validation`, "aria-describedby")}${addAttribute(validationMessage, "data-validation")}${addAttribute(dataValidationPattern, "data-validation-pattern")}${addAttribute(dataValidationFn, "data-validation-fn")}${spreadAttributes(rest, void 0, { "class": "astro-boif6lpn" })} data-astro-cid-boif6lpn>${value}</textarea> <small${addAttribute(`${inputId}-validation`, "id")} data-astro-cid-boif6lpn> <span class="icon" data-astro-cid-boif6lpn> <svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-astro-cid-boif6lpn> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-boif6lpn> <circle cx="12" cy="12" r="10" data-astro-cid-boif6lpn></circle> <path d="m15 9l-6 6m0-6l6 6" data-astro-cid-boif6lpn></path> </g> </svg> </span> <span class="message" data-astro-cid-boif6lpn></span> </small> </div> `;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/node_modules/accessible-astro-components/src/components/forms/Textarea.astro", void 0);

const $$Astro$1 = createAstro();
const $$MoreProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MoreProducts;
  const { moreproducts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="more-products-bg"> <div class="more-products-container"> <div class="more-products-section"> <div class="product-header-group"> <h3>${moreproducts.productTitle}</h3> ${renderComponent($$result, "Image", $$Image, { "src": moreproducts.productImage.url, "alt": moreproducts.productImage.alternativeText, "inferSize": true })} </div> <div class="accordion-group"> <h4>${moreproducts.ProductDesc}</h4> <!-- accordion --> ${renderComponent($$result, "Accordion", $$Accordion, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "title": "About", "variant": "chevron", "open": true }, { "default": ($$result3) => renderTemplate` <div> <!-- About --> <p>${moreproducts.aboutDesc}</p> </div> ` })} ` })} <div> <!-- Choose From --> ${renderComponent($$result, "Accordion", $$Accordion, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "title": "Choose From", "variant": "chevron" }, { "default": ($$result3) => renderTemplate` <ul> <li>${moreproducts.ChooseFromList1}</li> <li>${moreproducts.ChooseFromList2}</li> <li>${moreproducts.ChooseFromList3}</li> <li>${moreproducts.ChooseFromList4}</li> <li>${moreproducts.ChooseFromList5}</li> </ul> ` })} ` })} </div> <div> ${renderComponent($$result, "Accordion", $$Accordion, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "title": "Ideal For", "variant": "chevron" }, { "default": ($$result3) => renderTemplate`  <ul> <li>${moreproducts.IdealForList1}</li> <li>${moreproducts.IdealForList2}</li> <li>${moreproducts.IdealForList3}</li> <li>${moreproducts.IdealForList4}</li> <li>${moreproducts.IdealForList5}</li> </ul> ` })} ` })} </div> </div> </div></div></div>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/Products/MoreProducts.astro", void 0);

const $$Astro = createAstro();
const $$PromoProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PromoProducts;
  const { promoProducts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="promo-products-container"> <div> <h2>${promoProducts.featuredpromoTitle}</h2> <p>${promoProducts.featuredpromoText}</p> <a href="https://printedonline.espwebsite.com/" class="promo-btn" target="_blank">${promoProducts.featuredpromoBtn}</a> </div> <div> ${renderComponent($$result, "Image", $$Image, { "src": promoProducts.featuredpromoImage.url, "alt": promoProducts.featuredpromoImage.alternativeText, "inferSize": true })} </div> </div>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/Products/PromoProducts.astro", void 0);

const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchApi({
    endpoint: "products",
    page: "ProductPage",
    wrappedByKey: "data"
  });
  const productPage = pages[0];
  const pageData = productPage?.ProductPage || [];
  const heroData = pageData.find((pd) => pd.__component === "producthero.product-hero") || {};
  const featuredproductData = pageData.find((pd) => pd.__component === "productsfeaturedproducts.products-featured-products") || {};
  const promoProductsData = pageData.find((pd) => pd.__component === "featuredpromoproducts.featured-promo-products");
  const pageMoreProducts = await fetchApi({
    endpoint: "add-more-products",
    wrappedByKey: "data"
  });
  const initialCount = 4;
  const seoPageData = pageData.find((pd) => pd.__component === "shared.seo") || {};
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "seoData": seoPageData })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ProductsHero", $$ProductsHero, { "productsHero": heroData })} ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, { "featureProducts": featuredproductData })} ${maybeRenderHead()}<div class="more-products"> <div class="more-products-h2"> <h2>More Products</h2> </div> <div id="products-container"> ${pageMoreProducts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((product, index) => renderTemplate`<div class="more-product-item"${addAttribute(index < initialCount ? "" : "display:none", "style")}> ${renderComponent($$result2, "MoreProducts", $$MoreProducts, { "moreproducts": product })} </div>`)} </div> <!-- Load more button --> <div class="load-more-grid"> ${pageMoreProducts.length > initialCount && renderTemplate`<button id="load-more-btn">Load More Products</button>`} </div> </div> ${renderComponent($$result2, "PromoProducts", $$PromoProducts, { "promoProducts": promoProductsData })} ` })} ${renderScript($$result, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/products.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/products.astro", void 0);

const $$file = "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/products.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Products,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
