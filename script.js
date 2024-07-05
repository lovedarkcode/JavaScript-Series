let random = (parseInt(Math.random() * 10 + 1))
const submit = document.getElementById('subt')
const userInput = document.getElementById('guessField')
const guessslot = document.querySelector('.guesses')
const result = document.querySelector('.lastResult')
const vaalue = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playgame = true
if (playgame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = (parseInt(userInput.value))
        validateguess(guess)
        console.log(guess);
    })
}

function validateguess(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number greater than 0')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displaymessage(`game Over.random number was ${random}`)
            endgame()
        } else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if (guess === random) {
        displaymessage(`You got it! The number was ${random}`)
        endgame()
    } else if (guess < random){
        displaymessage(`Number is TOOOOO low`)
    } else if (guess > random){
        displaymessage(`Number is TOOOOO high`)
}
}

function displayGuess(guess){
    userInput.value = ''
    guessslot.innerHTML += `${guess} `
    numGuess++;
    result.innerHTML = `${11 - numGuess}`
}

function displaymessage(message){
    vaalue.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h1 id='newgame'>newgame</h1>`
    startover.appendChild(p)
    playgame = false
    newgame()
}
function newgame(){
    const newgamebutton = document.getElementById('newgame')
    newgamebutton.addEventListener('click', (e)=>{
        random = (parseInt(Math.random() * 10 + 1))
        prevGuess = []
        numGuess = 1
        guessslot.innerHTML = ' '
         result.innerHTML = `${11 - numGuess}`
         userInput.removeAttribute('disabled')
         startover.removeChild(p)
        playgame = true
    })
}

