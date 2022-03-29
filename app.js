let userName;
let PlayerLoss;
let ComputerLoss;

function askName () {
    userName = prompt("Howdy, and welcome to Twenty! It's blackjack, but to twenty instead of twenty-one! Exciting right!? Now before we begin, I gotta know your name. Enter it below.")
    
    if (userName === "") {
        do {
            userName = prompt("You gotta enter something dude/dudette.");
        } while (userName === "");
    };
    return userName;

};


function userDraw () {
 
    let userTotal = 0;
    let roundNumb = 0;

    alert(`Alright ${userName}, let's get started. You are going to 'draw' a number between one and ten, and you will have to decide whether or not you want to continue drawing numbers. Your total must not exceed 16, or you lose automatically.`);

    let dontstop;
    do {
        roundNumb++
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        userTotal += randomNumber;

        if (userTotal > 16) {
            alert("Oops! That's over 16! You lose!");
            userTotal = undefined;
            break;
        } else {
            dontstop = prompt(`Round ${roundNumb}\nYou drew ${randomNumber}. You're total is now (${userTotal}). Would you like to continue drawing? (Enter 'n' to stop, anything else to continue.)`);

            if (dontstop == 'n') {
                alert(`The player declines to draw.`);
            }
        }

    } while (dontstop != 'n');

    alert(`Your total was ${userTotal}.`);
    return userTotal;

};

function compDraw () {

    let compTotal = 0;
    let roundNumb = 0;

    alert(`Now it's the bot's turn!`);

    do {
        roundNumb++;
        let compRandomNumber = Math.floor(Math.random() * 10) + 1;

        if (compRandomNumber + compTotal <= 16) {
            compTotal += compRandomNumber;
            alert(`Round ${roundNumb}\nThe computer decides to draw!`);
            alert(`The computer drew ${compRandomNumber}.\nThe computer's total is now ${compTotal}.`)
        } else {
            alert("The computer declines to draw.");
            break;
        }
        
    } while (compTotal < 16);

    alert(`The computer's total is ${compTotal}.\nThe computer wishes the player the best of luck.`);

    return compTotal;

}

askName();

userDraw();

compDraw();

