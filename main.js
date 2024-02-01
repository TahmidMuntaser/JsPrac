// alert("Test Alert!!");

console.log('Hello world!!');
console.error('Error!');
console.warn('Warning!');
// view in console
// website: mdn console

let age = 4;
age = 33;
let num;

// const a; error
const a = 25;
// a = 33; can't change the value
console.log(a);

console.log(age);
console.log(num); // undefined


var q = 33;
q = 1;

console.log(q);


function start(){
    for(let i = 0; i<5; ++i){
        console.log(i);
    }
    // let = block scopped
    // console.log(i); error
}

function start2(){
    for(var i = 0; i<5; ++i){
        console.log(i);
    }
    // var = function scopped
    // available in window obj
    console.log(i); //no error 
}

start();
start2();


var color = 'red';
// now it is available in window obj
let age1 = 33;



const name = 'abul';
const ageg = 22;
const isHot = false;
const rating = 5.2;
const x = null;
const y = undefined;
// const z; //error

console.log(typeof name);

// concatanation

const qq = 'abul';
const ww = 'mal';

console.log('My name is ' + qq +' '+ ww+' abdul mohit');;
console.log(`My name is ${name}`); //template string
console.log(qq.length); 
console.log(qq.toUpperCase());
console.log(qq.substring(0, 2).toUpperCase());
console.log(qq.split(''));

const as = 'abul , kalam, khalek';
console.log(as.split(',')); // split all the name

//Arrays

const numbers = new Array(2, 2, 5, 8, 99, 35); //constructor method

console.log(numbers);

const colors = ['red', 'blue', 'yellow', 'black', 12];
console.log(colors);

colors[2] = 'green';
console.log(colors);

// add value
colors.unshift('pink'); // add fornt
console.log(colors);

colors.push('purple'); // add last
console.log(colors);

colors.shift(); // delete fornt
console.log(colors);

colors.pop(); // delete last
console.log(colors);

console.log(colors.indexOf('blue'));

colors[8] = '#000000';
console.log(colors);

console.log(Array.isArray(colors));






document.write('Hello!!');
// view in dom area