
 let button = document.querySelector('#submit');
 let review = document.querySelectorAll('.container > p > span');

function passaggio() {
    console.log('sei passato sul tasto');
     this.style.background = `hsl(0, 0%, 100%)`;
     this.style.color = `hsl(25, 97%, 53%)`;
}

review.forEach(function(review) {
    review.addEventListener('mouseover', passaggio);
});

// review.addEventListener('mouseover', passaggio);
button.addEventListener('mouseover', passaggio);