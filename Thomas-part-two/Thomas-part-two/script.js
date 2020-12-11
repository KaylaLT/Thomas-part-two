// variables  ;
let x= rain;
let y = " ";
let newY = " ";
let greater= ("The yield should be 51.795 bushels per acre." );
let less= ("The yield should be 40 bushels per acre.");
var rain = window.prompt ("How many inches of rain fell?");
var fert = window.prompt("Did you use fertilizer?");
if (fert == "yes") {
var type = window.prompt("Did you use premium or regular fertilizer? ");
}


//functions 
function repeatStringNumTimes(str, num) { 
    return str.repeat(y); 
}
console.log(repeatStringNumTimes('*', y)); 

function bushels() {
    if (x >= 20) {
        y == (0.9*50);
    }
    else if (x < 10) {
        y == (0.8*50);
    }
    else {
    y == 50; 
}
}
function updateBushels () {
if (type == "premium"){
    (1.15*y) == newY ;
    console.log(greater);
}
else if (type=="regular"){
     (1.1*y ) == newY;
    console.log(less);
}
else { 
    r==newY; 
}
}
 console.log(repeatStringNumTimes("*", newY));
