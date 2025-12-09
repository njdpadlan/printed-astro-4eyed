import { c as createComponent, b as createAstro, m as maybeRenderHead, a as renderTemplate, d as addAttribute, e as renderScript, r as renderComponent } from '../chunks/astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import 'clsx';
import { f as fetchApi, $ as $$Layout } from '../chunks/Layout_HZRpKSyG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { requestQuoteHero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="contact-info-card"> <div class="hero-grid"> <div class="form-h1  h1-grid"> <h1>${requestQuoteHero.requestquoteHeader}</h1> </div> <div class="contact-card"> <p>${requestQuoteHero.requestquoteText}</p> <div class="contact-row"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="form-svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path> </svg> <p>${requestQuoteHero.requestquotePhone}</p> </div> <div class="contact-row"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="form-svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path> </svg> <p>${requestQuoteHero.requestquoteEmail}</p> </div> </div> </div> </div>`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/RequestQuote/Hero.astro", void 0);

const $$Astro = createAstro();
const $$RequestQuoteForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RequestQuoteForm;
  const { formDetails } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="form-card"> <!-- Add https://formsubmit.co/email-here later in the action --> <div class="form-p"> <p>Input fields that are marked with <span class="form-symbol">*</span> are required. </p> </div> <form action="https://formsubmit.co/info@printedonline.ca" method="post" name="requestquote" enctype="multipart/form-data"> <!-- Template type --> <input type="hidden" name="_template" value="table"> <div> <label for="name">${formDetails.FullName} <span class="form-symbol">*</span></label> <input id="name" type="text" name="name" placeholder="Enter your full name here."> <p id="name_errormsg"></p> </div> <div> <label for="phone">${formDetails.Phone} <span class="form-symbol">*</span></label> <input id="phone" type="number" name="phone" placeholder="Enter your phone number here."> <p id="phone_errormsg"></p> </div> <div> <label for="email">${formDetails.Email}</label> <input id="email" name="email" placeholder="Enter your email address here."> <p id="email_errormsg"></p> </div> <div> <label for="company">${formDetails.CompanyName}</label> <input id="company" type="text" name="company" placeholder="Enter your company name here."> </div> <div class="product-type-quantity"> <div> <label for="product-type">${formDetails.ProductType} <span class="form-symbol">*</span></label> <select name="product_type" id="product-type"> <option value="">Choose a product</option> <option value="Linerless Label">Linerless Label</option> <option value="Pressure Seal">Pressure Seal Forms</option> <option value="Integrated Form">Integrated Form/Labels</option> <option value="Laser-Cut Sheet Form">Laser-Cut Sheet Forms</option> <option value="Snapset Form">Snapset Form</option> <option value="Continuous Form">Continuous Forms</option> <option value="Custom Envelopes">Custom Envelopes</option> <option value="Other">Other</option> </select> <p id="subject_errormsg"></p> </div> <div> <label for="quantity">${formDetails.Quantity} <span class="form-symbol">*</span></label> <input id="quantity" type="number" name="quantity" placeholder="Enter your quantity here."> <p id="quantity_errormsg"></p> </div> </div> <div> <label class="label-upload" for="label-upload">${formDetails.FileUpload}</label> <input id="label-upload" class="file-upload" type="file" name="attachment"> <p class="upload-p">Upload a file up to 5MB.</p> </div> <div> <label for="message">${formDetails.AdditionalDetails} <span class="form-symbol">*</span></label> <textarea id="message" name="message" class="message-box" placeholder="Enter additional details here. Examples include sizes, materials, colours, specifications, questions, and details from file uploads."></textarea> <p id="message_errormsg"></p> </div> <input type="submit"${addAttribute(formDetails.requestquoteBtn, "value")} class="submit-btn"> </form> </div> ${renderScript($$result, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/RequestQuote/RequestQuoteForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/components/RequestQuote/RequestQuoteForm.astro", void 0);

const $$RequestQuote = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchApi({
    endpoint: "request-quotes",
    page: "RequestQuotePage",
    wrappedByKey: "data"
  });
  const requestquotePage = pages[0];
  const pageData = requestquotePage?.RequestQuotePage || [];
  const heroData = pageData.find((pd) => pd.__component === "requestquotehero.requestquote-hero") || {};
  const requestquoteFormData = pageData.find((pd) => pd.__component === "requestquoteform.requestquote-form") || {};
  const seoPageData = pageData.find((pd) => pd.__component === "shared.seo") || {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": seoPageData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="white-space"></div> <div class="background-form"> <div class="forms-page-wrapper "> ${renderComponent($$result2, "Hero", $$Hero, { "requestQuoteHero": heroData })} ${renderComponent($$result2, "RequestQuoteForm", $$RequestQuoteForm, { "formDetails": requestquoteFormData })} </div> </div> ` })}`;
}, "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/pages/request-quote.astro", void 0);

const $$file = "/Users/rikuowada/Documents/NAIT/Sept-Dec 2025/DMNIT2590/printed-website/printed-astro-4eyed/src/pages/request-quote.astro";
const $$url = "/request-quote";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$RequestQuote,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
