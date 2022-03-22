function askName () {
    let userName = prompt("Howdy, and welcome to Twenty! It's blackjack, but to twenty instead of twenty-one! Exciting right!? Now before we begin, I gotta know your name. Enter it below.")
    
    if (userName === "") {
        do {
            userName = prompt("You gotta enter something dude/dudette.");
        } while (userName === "");
    };
    return userName;
};

function randomNumb () {
    let range = Number(prompt(`Thanks ${userName}. Now, we need to make a range to guess from. Please enter a upper limit to the range of numbers (integers) that the computer can guess (the range starts from 1).`));
    let number = Math.floor(Math.random() * range) + 1;

    return number;
};
