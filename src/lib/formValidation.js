export function contactFormValidate() {

  const form = document.querySelector('form[name="contactus"]');

  form.addEventListener("submit", (e) => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const subjectSelect = form.querySelector('select[name="_subject"]');
    const phone = form.querySelector('input[name="phone"]');
    const message = form.querySelector('textarea[name="message"]');
    const company = form.querySelector('input[name="company"]');
    const nameErrorMsg = form.querySelector('#name_errormsg');
    const emailErrorMsg = form.querySelector('#email_errormsg');
    const phoneErrorMsg = form.querySelector('#phone_errormsg');
    const subjErrorMsg = form.querySelector('#subject_errormsg');
    const messageErrorMsg = form.querySelector('#message_errormsg');
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
      emailErrorMsg.innerHTML = "Please enter your email address.";
      isValid = false;
    } else {
      emailErrorMsg.style.display = 'none';
    }

    if (!subjectSelect.value) {
      subjErrorMsg.style.display = 'inline'; // show the error
      subjErrorMsg.innerHTML = "Please select a subject.";
      isValid = false;
    } else {
      subjErrorMsg.style.display = 'none';
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
      messageErrorMsg.innerHTML = "Please enter a message.";
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
        const subjectSelect = form.querySelector('select[name="_subject"]');
        const quantity = form.querySelector('select[name="quantity"]');
        const message = form.querySelector('textarea[name="message"]');

        const nameErrorMsg = form.querySelector('#name_errormsg');
        const emailErrorMsg = form.querySelector('#email_errormsg');
        const phoneErrorMsg = form.querySelector('#phone_errormsg');
        const subjErrorMsg = form.querySelector('#subject_errormsg');
        const quantityErrorMsg = form.querySelector('#quantity_errormsg');
        const messageErrorMsg = form.querySelector('#message_errormsg');

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
      emailErrorMsg.innerHTML = "Please enter your email address.";
      isValid = false;
    } else {
      emailErrorMsg.style.display = 'none';
    }

    if (!subjectSelect.value) {
      subjErrorMsg.style.display = 'inline'; // show the error
      subjErrorMsg.innerHTML = "Please select a subject.";
      isValid = false;
    } else {
      subjErrorMsg.style.display = 'none';
    }

    if (!quantity.value) {
      quantityErrorMsg.style.display = 'inline'; // show the error
      quantityErrorMsg.innerHTML = "Please select quantity.";
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
      messageErrorMsg.innerHTML = "Please enter a message.";
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