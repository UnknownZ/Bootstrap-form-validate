const form = document.querySelector("#paymentForm");
const letters = /^[a-zA-Z]+$/;
const cardNumberReg = /^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}$/;
const cardCVV = /^[0-9]{3,4}$/
const postal = /^[0-9]{5}(?:-[0-9]{4})?$/
let { cardNumber, CVC, amount, firstName, lastName, city, state, postalCode, card, message } = form;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = false;
    let form = e.target;
    console.log(form.id)
    console.log(cardNumber.value);
    console.log(CVC.value);
    console.log(amount.value);
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(city.value);
    console.log(state.value);
    console.log(postalCode.value);
    console.log(card.value);
    console.log(message.value);

    if (cardNumber.value === '') {
        cardNumber.classList.add('is-invalid')

        valido = false;
    }
    else if (!cardNumberReg.test(cardNumber.value)) {
        cardNumber.classList.add('is-invalid')
        valido = false;
    } else {
        cardNumber.classList.remove('is-invalid');
    }

    if (CVC.value === '') {
        cardNumber.classList.add('is-invalid')
        valido = false;
    }
    else if (!cardCVV.test(CVC.value)) {
        CVC.classList.add('is-invalid')
        valido = false;
    } else {
        CVC.classList.remove('is-invalid');
    }

    if (amount.value === '') {
        amount.classList.add('is-invalid')
        valido = false;
    }
    else if (amount.value <= 0) {
        amount.classList.add('is-invalid')
        valido = false;
    } else {
        amount.classList.remove('is-invalid');
    }

    if (firstName.value === '') {
        firstName.classList.add('is-invalid')
        valido = false;
    }
    else if (!letters.test(firstName.value)) {
        firstName.classList.add('is-invalid')
        valido = false;
    } else {
        firstName.classList.remove('is-invalid');
    }

    if (lastName.value === '') {
        lastName.classList.add('is-invalid')
        valido = false;
    }
    else if (!letters.test(lastName.value)) {
        lastName.classList.add('is-invalid')
        valido = false;
    } else {
        lastName.classList.remove('is-invalid');
    }

    if (city.value === '') {
        city.classList.add('is-invalid')
        valido = false;
    }
    else if (!letters.test(city.value)) {
        city.classList.add('is-invalid')
        valido = false;
    } else {
        city.classList.remove('is-invalid');
    }

    if (state.value === 'Non') {
        state.classList.add('is-invalid')
        valido = false;
    }

    if (message.value === '') {
        message.classList.add('is-invalid')
        valido = false;
    }

    if (postalCode.value === '') {
        postalCode.classList.add('is-invalid')
        valido = false;
    }
    else if (!postal.test(postalCode.value)) {
        postalCode.classList.add('is-invalid')
        valido = false;
    } else {
        postalCode.classList.remove('is-invalid');
    }

    if (valido) {
        form.submit();
    }


});