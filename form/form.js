function validateForm() {
    var contact = document.getElementById('contact').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var formValid = false;

    var contactBool = validateContact(contact, formValid);
    var nameBool = validateName(name, formValid);
    var emailBool = validateEmail(email, formValid);
    if (contactBool && nameBool && emailBool) {
        document.getElementById('formError').innerHTML = 'Form submitted';
        document.getElementById('contact').value = '';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    }
    else {
        document.getElementById('formError').innerHTML = 'Please check the fields';
    }
}

function validateContact(contact, formValid) {
    if (contact.trim() === '') {
        formValid = false;
        document.getElementById('contactError').innerHTML = 'Please enter contact number';
    }
    else if (contact.length < 10 || contact.length > 10) {
        formValid = false;
        document.getElementById('contactError').innerHTML = 'Please enter contact number';
    }

    else {
        formValid = true;
        document.getElementById('contactError').innerHTML = '';
    }

    return formValid;
}

function validateName(name, formValid) {
    if (name.trim() == '') {
        formValid = false;
        document.getElementById('nameError').innerHTML = 'Please enter name';
    }
    else if (name.length <= 3) {
        formValid = false;
        document.getElementById('nameError').innerHTML = 'Please enter name';
    }
    else {
        formValid = true;
        document.getElementById('nameError').innerHTML = '';
    }

    return formValid;
}

function validateEmail(email, formValid) {
    if (email.trim() == '') {
        formValid = false;
        document.getElementById('emailError').innerHTML = 'Please enter email';
    }
    // else if (!pattern.test(email)) {
    // formValid = false;
    // document.getElementById('emailError').innerHTML = 'Please enter email';
    // }
    else {
        formValid = true;
        document.getElementById('emailError').innerHTML = '';
    }

    return formValid;
}