import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_aorwLhPu.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Head } from '../chunks/Head_BJ2lLxMS.mjs';
import { f as fetchApi, $ as $$Layout } from '../chunks/Layout_DJeW424u.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ContactUsForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactUsForm;
  const { formDetails } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="form-card"> <div class="form-p"> <p>Input fields that are marked with <span class="form-symbol">*</span> are required. </p> </div> <form action="https://formsubmit.co/info@printedonline.ca" method="post" name="contactus"> <input type="hidden" name="_template" value="table"> <div> <label${addAttribute(formDetails.FullName, "for")}>${formDetails.FullName} <span class="form-symbol">*</span></label> <input${addAttribute(formDetails.FullName, "id")} type="text" name="name" placeholder="Enter your full name here."> <p id="name_errormsg"></p> </div> <div> <label for="phone" class="label">${formDetails.Phone}<span class="form-symbol"> *</span></label> <input id="phone" type="number" name="phone" placeholder="Enter your phone number here."> <p id="phone_errormsg"></p> </div> <div> <label${addAttribute(formDetails.Email, "for")}>${formDetails.Email}</label> <input id="email" name="email" placeholder="Enter your email address here."> <p id="email_errormsg"></p> </div> <div> <label${addAttribute(formDetails.Message, "for")}>${formDetails.Message} <span class="form-symbol">*</span></label> <textarea${addAttribute(formDetails.Message, "id")} name="message" class="message-box" placeholder="Enter your message here."></textarea> <p id="message_errormsg"></p> </div> <input type="submit"${addAttribute(formDetails.sendmessageBtn, "value")} class="submit-btn"> </form> </div> ${renderScript($$result, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/ContactUs/ContactUsForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/ContactUs/ContactUsForm.astro", void 0);

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { contactUsHero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="contact-info-card"> <div class="hero-grid"> <div class="form-h1 h1-grid"> <h1>${contactUsHero.contactusHeader}</h1> </div> <div class="contact-card"> <p>${contactUsHero.contactusText}</p> <section class="contact-row"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="form-svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path> </svg> <div class="contact-group"> <h2>${contactUsHero.callusTitle}</h2> <p>${contactUsHero.callusText}</p> </div> </section> <section class="contact-row"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="form-svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path> </svg> <div class="contact-group"> <h2>${contactUsHero.emailTitle}</h2> <p>${contactUsHero.emailText}</p> </div> </section> </div> </div> </div>`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/components/ContactUs/Hero.astro", void 0);

const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchApi({
    endpoint: "contact-uses",
    page: "ContactUsPage",
    wrappedByKey: "data"
  });
  const contactusPage = pages[0];
  const pageData = contactusPage?.ContactUsPage || [];
  const heroData = pageData.find((pd) => pd.__component === "contactushero.contactus-hero") || {};
  const contactusFormData = pageData.find((pd) => pd.__component === "contactusform.contactus-form") || {};
  const seoPageData = pageData.find((pd) => pd.__component === "shared.seo") || {};
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "seoData": seoPageData })} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="background-form"> <div class="forms-page-wrapper"> ${renderComponent($$result2, "Hero", $$Hero, { "contactUsHero": heroData })} ${renderComponent($$result2, "ContactUsForm", $$ContactUsForm, { "formDetails": contactusFormData })} </div> </div> ` })}`;
}, "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/contact-us.astro", void 0);

const $$file = "C:/Users/njdpa/Desktop/printed-astro/astro-frontend/src/pages/contact-us.astro";
const $$url = "/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ContactUs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
