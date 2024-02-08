const x = '10';
const y = '1';


if(x == 10) {
    console.log(x);
}
if(y != 10) {
    console.log(5);
}

if(x === 10) { //same value and datatype
    console.log(x);
}

if(y !== 1) { //same value and datatype
    console.log(y);
}

const q = 12;
if(q == 12){
    console.log('q = 12');
}
else if(q>10){
    console.log('q > 10');
}
else{
    console.log('q is not 12');
}

const p = 2;

const res = p>=2 ? 'NO' : 'YES';
console.log(res);


switch (res) {
    case('YES'):
        console.log('OMG its YES!!!');
        break;

    case('NO'):
    console.log('Its NO, Come on...');
    break;

    default:
        console.log('I dont give a shit');
        break;
}

//function:

function square(num){ 
    var res1 = num*num;
    document.write("Res = "  + res1 + "<br>");
}

square(2)
function mul(num1, num2){ 
    var res1 = num1*num2;
   return res1;
} document.write("Res = "  + mul(2, 8) + "<br>");


;



// console.log(res1);
// document.write("Res = "  + res1 + res1 + "<br>");




greetings();
greetings(); // we can call before initialization


function greetings(){
    console.log("Hello Dear!!"); // dont need in console
    document.write("Hello Dear!!" + '<br>');
}



// function expression

const speak = function(){
    console.log("GOOD DAY!!"); // dont need in console
    document.write("good day!!" + '<br>');
}

speak(); // we can't call before initialization
speak();

 

