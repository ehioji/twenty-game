let userName;

function askName () {
    userName = prompt("Howdy, and welcome to Twenty! It's blackjack, but to twenty instead of twenty-one! Exciting right!? Now before we begin, I gotta know your name. Enter it below.")
    
    if (userName === "") {
        do {
            userName = prompt("You gotta enter something dude/dudette.");
        } while (userName === "");
    };
    return userName;
}

askName();