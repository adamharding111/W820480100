function addError(field) {
  if (field.previousElementSibling &&
    field.previousElementSibling.className === 'error') {
    // error message already showing
    return;
  }
  const error = document.createElement('div');
  error.innerHTML = '&#x26A1; '
    + field.dataset.errorMsg;
  error.className = 'error';
  field.parentNode.insertBefore(error, field);
}

function removeError(field) {
  if (field.previousElementSibling &&
    field.previousElementSibling.className === 'error') {
    field.previousElementSibling.remove();
  }
}

function checkField(field) {
  if (!field.checkValidity()) {
    addError(field);
  } else {
    removeError(field);
  }
}

function checkSelect(field) {
  if ( field.selectedIndex === 0 ) {
    field.setCustomValidity('Invalid');
    addError(field);
  } else {
    field.setCustomValidity('');
    removeError(field);
  }
}

window.addEventListener('load', function(e) {
  const form  = document.getElementById('ice-cream-form');
  const email = form.email;
  email.dataset.errorMsg = 'Invalid Email';
  const phone = form.phone;
  phone.dataset.errorMsg = 'Invalid Phone. Use format: ###-###-####';
  const username = form.username;
  username.dataset.errorMsg = 'Username must be 8 to 25 characters.';
  const container = form.container[0];
  container.dataset.errorMsg = 'Please select a container.';
  const flavor = form.flavor;
  flavor.dataset.errorMsg = 'Please select a flavor.';
  const terms = form.terms;
  terms.dataset.errorMsg = 'You must accept the terms.';
  const requests = form.requests;
  requests.dataset.errorMsg = 'Your comment must be between ' +
    requests.minLength + ' and ' + requests.maxLength + 
    ' characters.';
  
  username.addEventListener("input", function(e) {
    checkField(username);
  });
  
  email.addEventListener("input", function(e) {
    checkField(email);
  });
  
  phone.addEventListener("input", function(e) {
    checkField(phone);
  });
  
  for (radio of form.container) {
    radio.addEventListener("click", function(e) {
      checkField(container);
    });
  }

  flavor.addEventListener("change", function(e) {
    checkSelect(flavor);
  });

  requests.addEventListener("input", function(e) {
    checkField(requests);
  });

  terms.addEventListener("click", function(e) {
    checkField(terms);
  });

  form.addEventListener("submit", function(e) {
    // Check errors
    checkField(username);
    checkField(email);
    checkField(phone);
    checkField(container);
    checkSelect(flavor);
    checkField(requests);
    checkField(terms);

    // If form is invalid, prevent submission
    if (!form.checkValidity()) {
      e.preventDefault();
      alert('Please fix form errors.');
    }
  });

});