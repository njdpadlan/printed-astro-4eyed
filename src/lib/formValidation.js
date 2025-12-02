export function contactFormValidate() {

  const form = document.querySelector('form[name="contactus"]');

  form.addEventListener("submit", (e) => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const phone = form.querySelector('input[name="phone"]');
    const message = form.querySelector('textarea[name="message"]');

    const nameErrorMsg = form.querySelector('#name_errormsg');
    const emailErrorMsg = form.querySelector('#email_errormsg');
    const phoneErrorMsg = form.querySelector('#phone_errormsg');
    const messageErrorMsg = form.querySelector('#message_errormsg');
    let isValid = true;

    //Trim and sanitize inputs
    name.value = sanitize(name.value);
    email.value = sanitize(email.value);
    phone.value = sanitize(phone.value);
    message.value = sanitize(message.value);



    //validation checks
    if (!name.value) {
      nameErrorMsg.style.display = 'inline'; // show the error
      nameErrorMsg.innerHTML = "Please enter your full name.";
      isValid = false;
    } else {
      nameErrorMsg.style.display = 'none';
    }

    if (email.value.trim() && !validateEmail(email.value)) {
      emailErrorMsg.style.display = 'inline'; // show the error
      emailErrorMsg.innerHTML = "Please enter a valid email.";
      isValid = false;
    } else {
      emailErrorMsg.style.display = 'none';
    }


    if (!/^[0-9\-\+\s\(\)]{7,15}$/.test(phone.value)) {
      phoneErrorMsg.style.display = 'inline'; // show the error
      phoneErrorMsg.innerHTML = "Please enter a valid phone number.";
      isValid = false;
    } else {
      phoneErrorMsg.style.display = 'none';
    }

    if (!message.value) {
      messageErrorMsg.style.display = 'inline'; // show the error
      messageErrorMsg.innerHTML = "Please enter your additional message.";
      isValid = false;
    } else {
      messageErrorMsg.style.display = 'none';
    }


    if (!isValid) {
    e.preventDefault();
    }

  });

  function sanitize(str) {
    return str
      .replace(/<[^>]*>?/gm, "")
      .trim();
  }

  // email validation
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
};


export function requestQuoteFormValidation() {
    const form = document.querySelector('form[name="requestquote"]');

    form.addEventListener("submit", (e) => {
        const name = form.querySelector('input[name="name"]');
        const phone = form.querySelector('input[name="phone"]');
        const email = form.querySelector('input[name="email"]');
        const company = form.querySelector('input[name="company"]');
        const quantity = form.querySelector('input[name="quantity"]');
        const productType = form.querySelector('select[name="product_type"]');
        const message = form.querySelector('textarea[name="message"]');

        const nameErrorMsg = form.querySelector('#name_errormsg');
        const emailErrorMsg = form.querySelector('#email_errormsg');
        const phoneErrorMsg = form.querySelector('#phone_errormsg');
        const quantityErrorMsg = form.querySelector('#quantity_errormsg');
        const messageErrorMsg = form.querySelector('#message_errormsg');
        const productTypeErrorMsg = form.querySelector('#subject_errormsg');
        let isValid = true;

    //Trim and sanitize inputs
    name.value = sanitize(name.value);
    email.value = sanitize(email.value);
    phone.value = sanitize(phone.value);
    message.value = sanitize(message.value);
    company.value = sanitize(company.value);


    //validation checks
    if (!name.value) {
      nameErrorMsg.style.display = 'inline'; // show the error
      nameErrorMsg.innerHTML = "Please enter your full name.";
      isValid = false;
    } else {
      nameErrorMsg.style.display = 'none';
    }

    if (email.value.trim() && !validateEmail(email.value)) {
      emailErrorMsg.style.display = 'inline'; // show the error
      emailErrorMsg.innerHTML = "Please enter a valid email.";
      isValid = false;
    } else {
      emailErrorMsg.style.display = 'none';
    }

    if (!productType.value) {
      productTypeErrorMsg.style.display = 'inline'; // show the error
      productTypeErrorMsg.innerHTML = "Please select a product type.";; // show the error
      isValid = false;
    } else {
      productTypeErrorMsg.style.display = 'none';
    }

    if (!quantity.value) {
      quantityErrorMsg.style.display = 'inline'; // show the error
      quantityErrorMsg.innerHTML = "Please select a quantity.";
      isValid = false;
    } else {
      quantityErrorMsg.style.display = 'none';
    }

    if (!/^[0-9\-\+\s\(\)]{7,15}$/.test(phone.value)) {
      phoneErrorMsg.style.display = 'inline'; // show the error
      phoneErrorMsg.innerHTML = "Please enter a valid phone number.";
      isValid = false;
    } else {
      phoneErrorMsg.style.display = 'none';
    }

    if (!message.value) {
      messageErrorMsg.style.display = 'inline'; // show the error
      messageErrorMsg.innerHTML = "Please enter your additional message.";
      isValid = false;
    } else {
      messageErrorMsg.style.display = 'none';
    }

    if (!isValid) {
    e.preventDefault();
    }

  });

  function sanitize(str) {
    return str
      .replace(/<[^>]*>?/gm, "")
      .trim();
  }

  // email validation
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
}