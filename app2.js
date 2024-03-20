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

    else if(req == "add"){
        let task = prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }

    else if(req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    }

    else {
        console.log("wrong Request");
    }

    req = prompt("please enter your request");
}