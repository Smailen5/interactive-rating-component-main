
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


