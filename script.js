
let button = document.querySelector('#submit');
let review = document.querySelectorAll('.container > p > span');

function passaggio() {
    console.log('sei passato sul tasto');
    this.style.background = `hsl(0, 0%, 100%)`;
    this.style.color = `hsl(25, 97%, 53%)`;
}
function uscita() {
    console.log('sei uscito dal bottone');
    this.style.background = '#FC7614';
    this.style.color = '';
}

review.forEach(function (review) {
    review.addEventListener('mouseover', () => {
        review.style.background = `hsl(25, 97%, 53%)`;
        review.style.color = `hsl(0, 0%, 100%)`;
    });
    review.addEventListener('mouseout', () => {
        console.log('sei uscito');
        review.style.background = '#262E38'
        review.style.color = '#7C8798'
    })
});

// review.addEventListener('mouseover', passaggio);
button.addEventListener('mouseover', passaggio);
button.addEventListener('mouseout', uscita);