let numberToGuess = Math.round(Math.random() * 100);

let attempts = 0;

function guessTheNumber () {
    
    attempts = attempts + 1;
    displayAttempts.innerHTML = 'Attempts: ' + attempts;

    if (numberToGuess == myNumber.value) {
        headline.innerHTML = 'You won! 🥳🎉';
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
    } else if (numberToGuess > myNumber.value) {
        headline.innerHTML = 'The number is higher ⬆️';
    } else {
        headline.innerHTML = 'The number is lower ⬇️';
    }
    myNumber.value = '';
}