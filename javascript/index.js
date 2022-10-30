
const title = document.getElementById('title')
const response = document.getElementById('response')
const submitButton = document.getElementById('submit')
const form = document.getElementById('guess-form')
const guess = document.getElementById('guess')

let valid_input = false;
let userMax, maxNumber;

while(!valid_input) {
    userMax = window.prompt("What should the maximum number be?");

    maxNumber = Math.round(Number(userMax));
    
    console.log(maxNumber)

    if (!isNaN(maxNumber) && maxNumber > 0) {
        valid_input = true;
    }

    title.innerHTML = `Guess a number between 1 and ${maxNumber}`
}


let number = 0

function getNumber(){
    number = Math.floor(Math.random() * maxNumber) + 1;
    console.log(number)
    
}

getNumber();

let guessArray = []

function higherLower(){
    
    input = +guess.value
    guess.value = ''

    if(input === number){
        guessArray.push(input)
        if(guessArray.length == 1){
            response.innerHTML = `<p style="color: green;">You got it! It took you ${guessArray.length} try and your guess was ${guessArray}.</p>`
        } else {
            response.innerHTML = `<p style="color: green;">You got it! It took you ${guessArray.length} tries and your guesses were ${guessArray}.</p>`

        }
    } else if (input < 1 || input > maxNumber){
        response.innerHTML = '<p style="color: red;"> That number is not in range; please try again.</p>'
    } else if (isNaN(input)){
        response.innerHTML = '<p style="color: red;">That is not a number!</p>'
    } else if (guessArray.includes(input)){
        response.innerHTML = '<p style="color: red;">That number has already been guessed.  Please try again.</p>'
    } else if (input < number){
        guessArray.push(input)
            response.innerHTML = '<p style="color: orange;">No, try a higher number.</p>'
    } else if(input > number){
        guessArray.push(input)
            response.innerHTML = '<p style="color: orange;">No, try a lower number.</p>'
    } 
    
    
   
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    higherLower();
  });


