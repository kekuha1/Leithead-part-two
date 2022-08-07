let name = prompt("Welcome to GC mini golf! What is your name?");
let numHoles = Number( prompt("Hi, "+name+"! Would you like to play 3 or 6 holes?"));

let putts = 0;
let coursePar = 0;

if (numHoles == 3){
    coursePar = 9;
}
else{
    coursePar = 18;
}

for(let i =1; i <= numHoles; i ++ ){
    putts += Number(prompt ("How many putts for hole "+i +"? (par: 3) "));
}

let diff = putts - coursePar;

if (diff < 0){
    console.log ("Great job, "+name+"! Your total par was: "+ diff+".");
}
else if (diff > 0 ){
    console.log ("Nice try, "+name+"! Your total par was: +"+ diff+".");
}
else {
    console.log ("Good game, "+name+"! Your total par was: "+ diff+".");
}