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