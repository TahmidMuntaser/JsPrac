 console.log(document.head);
 console.log(document.title);

 //getElementById

const hd1 = document.getElementById('heading1');
hd1.innerHTML = 'Changed header'; // it changes the content of the element with id heading1

// document.getElementById('heading1').innerHTML = 'Changed'; // it changes the content of the element with id heading1

document.getElementById('para1').innerHTML = "Changed Paragraph"; // it changes the content of the element with paragraph 1

// change tag name
// if i got elements, i have to change the array position
document.getElementsByTagName('h1')[1].innerHTML = 'Tag changed'; 
 // i have to choose array pos

//get element by class name
document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('.p2');
    if(element) {
        element.innerHTML = 'class changed';
    }
});

// hd1.remove();
hd1.style.background = 'red';
hd1.style.color = 'white';


const heading = document.getElementsByTagName('h1');
heading[1].style.color = 'blue';
heading[1].innerHTML ='This is heading 2';
// heading[1].remove();

// querySelector

const btn1 = document.querySelector('.clk');
// console.log(document.querySelector('.clk'));
btn1.style.color = 'blue';

const pp1 = document.querySelector('#para1');
// console.log(document.querySelector('#para1'));
pp1.textContent = "OMG!!!";

// document.querySelector('button'); // with tag

document.querySelector('.item');
console.log(document.querySelectorAll('.item'));
// querySelectorAll it shows all item


const ul = document.querySelector('.items');
ul.firstElementChild.style.color = 'Green';
ul.lastElementChild.style.background = 'red';
ul.children[2].textContent = 'Text Item';
ul.children[1].remove();
 