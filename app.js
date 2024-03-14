const favMovie = "3idiots";

let guess = prompt("Guess my fav movie");

while( (guess != favMovie) && (guess != "quit")){
    guess = prompt("wrong Please try again");
}

if( guess == favMovie){
    console.log("congrats");
}