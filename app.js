let userName;
let PlayerLoss = false;
let ComputerLoss = false;

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
            PlayerLoss = true;
            break;
        } else {
            dontstop = prompt(`Round ${roundNumb}\nYou drew ${randomNumber}. Your total is now (${userTotal}). Would you like to continue drawing? (Enter 'n' to stop, anything else to continue.)`);

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

function compareScores (playerScore, computerScore) {

    alert(`Our contestants, ${userName} and computer, have battled valiently these last few rounds...`);
    alert(`Sadly, all good things must come to an end and this competition is no exception...`);
    alert(`This is the end of the line...`);
    alert("Drumroll please...");

    if (PlayerLoss == true && ComputerLoss == true) {
        alert("Unfortunately, both the player and the computer were eliminated as a result of over-guessing, making this competition a NO CONTEST!");
    } else if (PlayerLoss == true && ComputerLoss == false) {
        alert(`The computer was eliminated as a result of over-guessing, making the winner of this contest, with a score of ${playerScore}, ${userName}!!!`)
    } else if (PlayerLoss == false && ComputerLoss == true) {
        alert(`${userName} was eliminated as a result of over-guessing, making the winner of this contest, with a score ${computerScore}, the computer!`)
        alert("Robo translation: BEEEP BOOOP BEEEP BEEEP BOOOP BOOOP. 01100010 01110010 01110101 01101000 .")
    } else if (playerScore > computerScore) {
        alert(`With a score of ${playerScore}, our winner is ${userName}!!!`)
    } else if (playerScore < computerScore) {
        alert(`With a score of ${computerScore}, our winner is the computer! `)
        alert("Robo translation: BOP BEEP BOP BEEEP BOOOP BOOOP BOP BEEP. 01010100 01101000 01100101 00100000 01110010 01100101 01110110 01101111 01101100 01110101 01110100 01101001 01101111 01101110 00100000 01101001 01110011 00100000 01100101 01101101 01101001 01101110 01100101 01101110 01110100 00101110.")
    } else if (playerScore == computerScore){
        alert(`With scores of ${playerScore} and ${computerScore}. Our contest is a tie!`);
    }

    return 'deez';
}

askName();

playerAttempt = userDraw();

computerAttempt = compDraw();

compareScores(playerAttempt, computerAttempt);