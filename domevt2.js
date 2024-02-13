const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');

outer.addEventListener('click', ()=>{
    alert('Hello there!!!');
}, true);// order change of aleret massage



inner.addEventListener('click', ()=>{
    alert('What are u doing??');
}, true);