// select element

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const circle = document.querySelector('.circle');

// real time color select

const getBGColor = (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

const redColorElement = getBGColor(red);
const greenColorElement = getBGColor(green);
const blueColorElement = getBGColor(blue);

//red.addEventListener('mouseenter',()=>{
    //circle.style.backgroundColor = redColorElement;

//});


//green.addEventListener('mouseenter',()=>{
    //circle.style.backgroundColor = greenColorElement;

///});


//blue.addEventListener('mouseenter',()=>{
  //  circle.style.backgroundColor = blueColorElement;

//});


const magicColor = (element,color)=>{
    return element.addEventListener('mouseenter',()=>{
        circle.style.backgroundColor = color;
    });
};

magicColor(red,redColorElement);
magicColor(green,greenColorElement);
magicColor(blue,blueColorElement);