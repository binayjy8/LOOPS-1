const favMovie = "3idiots";

let guess = prompt("Guess my fav movie");

while(guess != favMovie){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    guess = prompt("wrong Please try again");
}

if( guess == favMovie){
    console.log("congrats");
} 

let i =1;

while(i<=6){
    if( i == 4){
        break;
    }
    console.log(i);
    i++;
}