// document.querySelector('.box').addEventListener('click', function(){
//     //parameter : event, function
//     document.querySelector('.box').style.background = 'red';
// });

const box = document.querySelector('.box');

box.addEventListener('mouseenter', function(){
    //parameter : event, function
    this.style.background = 'red';
});

box.addEventListener('mouseleave', abs);
box.addEventListener('click', xyz);

function abs(){
    box.style.background = 'purple';
    box.style.border = '10px solid red';
}

function xyz(){
    box.removeEventListener('mouseleave', abs);
}