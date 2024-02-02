let x, y, z; 
x = 33; // assign a value 

y = 3;

z = x+y; 

console.log(x,y,z);

//arithmetic ope

// ** exponential ope
console.log(x**y);

/*
    Car -> obj
    properties:
        brand: ,
        model: ,
        colors: ,
        weight: 


    method:
        start()
        drive()
        break()

*/

const person = { //obj

    //properties:
    fristName: 'John', //camelCase
    lastname: 'Vanston',
    age: 25,
    hobbies: ['music', 'gaming', 'movies', 'travel'],
    
    //another obj
    address: {
        city:'Dhaka',
        zip: 1000
    }


}


console.log(person);
console.log(person.fristName, person.lastname);

console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person.address);



