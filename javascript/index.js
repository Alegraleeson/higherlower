// Create a webpage that simulates a number guessing game. On load, the page should generate a random number between 1 and 20. The user will enter a guess into a text input and click a button to submit the guess.

// When submitted, one of the following messages should be displayed:

// "You got it!" if the guess is right.
// "No, try a higher number." if the guess is too low.
// "No, try a lower number." if the guess is too high.


const response = document.getElementById('response')
const submitButton = document.getElementById('submit')
const form = document.getElementById('guess-form')
const guess = document.getElementById('guess')


let number = 0

function getNumber(){
    number = Math.floor(Math.random() * 20) + 1;
    console.log(number)
    
}

getNumber();

function higherLower(){
    input = +guess.value
    // console.log('HigherLower')
    // console.log(guess.value)
    // console.log(typeof 'guess.value')

    if(input === number){
        response.innerHTML = 'You got it!'
        console.log('You got it!')
    } else if(input < number){
        console.log('No, try a higher number')
            response.innerHTML = 'No, try a higher number.'
    } else if(input > number){
        console.log('No, try a lower number')
            response.innerHTML = 'No, try a lower number.'
    } else {
        console.log('Invalid input')
            response.innerHTML = 'Input invalid.  Guess a number between 1 and 20.'
    }
}

function handleSubmit(e) {
e.preventDefault();
higherLower(guess);

}

    
// submitButton.addEventListener('click', higherLower())
   
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    higherLower();
  });

// HigherLower(6)