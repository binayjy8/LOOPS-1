let todo = [];

let req = prompt("Enter your request");

while(true){
    if(req == "quit"){
        console.log("quiting the app");
        break;
    }

    if( req == "list"){
        for(let i =0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
    }
}