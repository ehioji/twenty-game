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


function userDraw () {
 
    let userTotal =  0;
    let roundNumb = 0;
    let roundLoss = false;

    alert(`Alright ${userName}, let's get started. You are going to 'draw' a number between one and ten, and you will have to decide whether or not you want to continue drawing numbers. Your total must not exceed 16, or you lose automatically.`);

    let dontstop;
    do {
        roundNumb++
        let randomNumber = Math.floor(Math.random() * 10) + 1
        userTotal += randomNumber;

        if (userTotal > 16) {
            alert("Oops! That's over 16! You lose!");
            roundLoss = true;
            break;
        } else {
            dontstop = prompt(`Round ${roundNumb}\nYou drew ${randomNumber}. You're total is now (${userTotal}). Would you like to continue drawing? (Enter 'n' to stop, anything else to continue.)`);
        }

    } while (dontstop != 'n');

    if (roundLoss != true) {
        alert(`Your total was ${userTotal}.`)
        return userTotal;
    } else {
        return undefined
    }
};
