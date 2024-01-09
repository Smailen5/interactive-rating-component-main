
let button = document.querySelector('#submit');
let review = document.querySelectorAll('.container > p > span');
let form = document.querySelector('#form-review');

button.addEventListener('mouseover', entrata);
button.addEventListener('mouseout', uscita);


function entrata() {
    this.style.background = `hsl(0, 0%, 100%)`;
    this.style.color = `hsl(25, 97%, 53%)`;
}
function uscita() {
    this.style.background = '#FC7614';
    this.style.color = '';
}

review.forEach( (review) => {
    review.addEventListener('click', () => {
        review.classList.toggle('active');
        console.log('hai cliccato una delle stelle');
    })
})

button.addEventListener('click', function() {
    form.classList.add('active');
})


// ---------------------------------------------------------------------------------------------------------

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

