let student = [ ["ayush", 45], ["khitish", 65], ["jha",56]];

for( let i =0; i<student.length; i++){
    console.log(`student number #${i}`);
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}

let brands = [ "sg", "gm", "kookaburra", "ss"];

for(brand of brands){
    console.log(brand);
}