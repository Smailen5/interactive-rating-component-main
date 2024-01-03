
let button = document.querySelector('#submit');
let review = document.querySelectorAll('.container > p > span');

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



// function aggiungi() {
//     button.classList.add('aggiungi')
// }
// function togli() {
//     button.classList.remove('aggiungi')
// }






// review.forEach(function (review) {
//     review.addEventListener('mouseover', () => {
//         review.style.background = `hsl(25, 97%, 53%)`;
//         review.style.color = `hsl(0, 0%, 100%)`;
//     });
//     review.addEventListener('mouseout', () => {
//         review.style.background = '#262E38';
//         review.style.color = '#7C8798';
//     });
//     review.addEventListener('click', () => {
//         review.style.background = 'hsl(216, 12%, 54%)';
//     });
// });

// review.forEach( (review) => {
    
// });

// button.addEventListener('mouseover', entrata);
// button.addEventListener('mouseout', uscita);


// ---------- CHATGPT CORREGGE COSI IL MIO CODICE

// function handleMouseEnter() {
//     this.style.background = `hsl(25, 97%, 53%)`;
//     this.style.color = `hsl(0, 0%, 100%)`;
// }

// function handleMouseLeave() {
//     this.style.background = '#262E38';
//     this.style.color = '#7C8798';
// }

// function handleReviewClick() {
//     this.style.background = 'hsl(216, 12%, 54%)';
// }

// function handleButtonClick() {
//     this.style.background = `hsl(0, 0%, 100%)`;
//     this.style.color = `hsl(25, 97%, 53%)`;
// }

// review.forEach(function (review) {
//     review.addEventListener('mouseenter', handleMouseEnter);
//     review.addEventListener('mouseleave', handleMouseLeave);
//     review.addEventListener('click', handleReviewClick);
// });

// button.addEventListener('mouseenter', handleButtonClick);
// button.addEventListener('mouseleave', handleMouseLeave);

// -------------------------------------------------------------
