
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.lowOrHi');
const result = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than or equal to 1');
    } else if (guess > 100) {
        alert('Please enter a number lesser than or equal to 100');
    } else {
        prevGuesses.push(guess);
        if (numGuesses >= 10) {
            displayGuess(guess);
            displayMessage(`Game over. The random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number in ${numGuesses} guesses.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low!`);
    } else {
        displayMessage(`Number is too high!`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
    startOver.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function() {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.innerHTML = ''; // Fix to remove the button
        playGame = true;
    });
}
