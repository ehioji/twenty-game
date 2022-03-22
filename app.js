let userName;
function askName () {
    userName = prompt("Howdy, and welcome to Twenty! It's blackjack, but to twenty instead of twenty-one! Exciting right!? Now before we begin, I gotta know your name. Enter it below.")
    
    if (userName === "") {
        do {
            userName = prompt("You gotta enter something dude/dudette.");
        } while (userName === "");
    };
    return userName;
};

function randomNumb () {
    let number = Math.floor(Math.random()) + 1;
    
    return number;
};


function userGuess (randomNumber) {
    let confirmation = 'y'; 
    do {
        alert(`Alright ${userName}, let's get started. I'm going to generate a random number between`);
    } while (confirmation == 'y');
}