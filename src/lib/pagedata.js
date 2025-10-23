export default function fetchPageData() {


};

//How to load image gallery from strapi
// ---
// const { 
//     moreproductsHeader, 
//     formsTitle, 
//     envelopesTitle,
//     chequesTitle, 
//     labelsmarketingTitle, 
//     formsImageGallery  = [], 
//     envelopesImageGallery  = [], 
//     chequesImageGallery = [], 
//     labelsmarketingImageGallery = [] 
// } = Astro.props;

// const baseUrl = import.meta.env.STRAPI_URL;
// ---


// <div>
//     <h2>{moreproductsHeader}</h2>
//     <section>
//         <h3>{formsTitle}</h3>
//         {formsImageGallery.map((formsIG) => (
//         <img 
//             src={`${baseUrl}${formsIG.url}`} 
//             alt={formsIG.alternativeText || formsIG.name} 
//             width={formsIG.width} 
//             height={formsIG.height}/>
//         <p>{formsIG.caption}</p>
//          ))}
//     </section>
//     <section>
//         <h3>{envelopesTitle}</h3>
//         {envelopesImageGallery.map((envelopeIG) => (
//         <img 
//             src={`${baseUrl}${envelopeIG.url}`} 
//             alt={envelopeIG.alternativeText || envelopeIG.name} 
//             width={envelopeIG.width} 
//             height={envelopeIG.height}/>
//         <p>{envelopeIG.caption}</p>
//          ))}
//     </section>
//     <section>
//         <h3>{chequesTitle}</h3>
//         {chequesImageGallery.map((chequesIG) => (
//         <img 
//             src={`${baseUrl}${chequesIG.url}`} 
//             alt={chequesIG.alternativeText || chequesIG.name} 
//             width={chequesIG.width} 
//             height={chequesIG.height}/>
//         <p>{chequesIG.caption}</p>
//          ))}
//     </section>
//     <section>
//         <h3>{labelsmarketingTitle}</h3>
//         {labelsmarketingImageGallery.map((labelsmarketingIG) => (
//         <img 
//             src={`${baseUrl}${labelsmarketingIG.url}`} 
//             alt={labelsmarketingIG.alternativeText || labelsmarketingIG.name} 
//             width={labelsmarketingIG.width} 
//             height={labelsmarketingIG.height}/>
//         <p>{labelsmarketingIG.caption}</p>
//          ))}
//     </section>
// </div>
