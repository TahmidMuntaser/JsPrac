 console.log(document.head);
 console.log(document.title);

 //getElementById


document.getElementById('heading1').innerHTML = 'Changed'; // it changes the content of the element with id heading1

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
