let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 900;
    if (offset > 10800) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 900;
    if (offset < 0) {
        offset = 900;
    }
    sliderLine.style.left = -offset + 'px';
});

const button1 = document.getElementById('button1');
const inputField = document.getElementById('inputField');

button1.addEventListener('focus', function() {
    button1.classList.add('change-on-focusb1');
   
    inputField.classList.add('change-on-focus');
});

button1.addEventListener('blur', function() {
    button1.classList.remove('change-on-focusb1');
    
    inputField.classList.remove('change-on-focus');
});

const button2 = document.getElementById('button2');
const inputField2 = document.getElementById('inputField2');

button2.addEventListener('focus', function() {
    button2.classList.add('change-on-focusb1');
   
    inputField2.classList.add('change-on-focus2');
});

button2.addEventListener('blur', function() {
    button2.classList.remove('change-on-focusb1');
    
    inputField2.classList.remove('change-on-focus2');
});

const button3 = document.getElementById('button3');
const inputField3 = document.getElementById('inputField3');

button3.addEventListener('focus', function() {
    button3.classList.add('change-on-focusb1');
   
    inputField3.classList.add('change-on-focus3');
});

button3.addEventListener('blur', function() {
    button3.classList.remove('change-on-focusb1');
    
    inputField3.classList.remove('change-on-focus3');
});



//ебейшое задание от вовы ебать 
const changeStyleBtn = document.getElementById('changeStyleBtn');
const resetStyleBtn = document.getElementById('resetStyleBtn');
const elementToStyle = document.getElementById('elementToStyle');

changeStyleBtn.addEventListener('click', function() {
    elementToStyle.classList = 'change-on-focus0';
});
resetStyleBtn.addEventListener('click', function() {
    elementToStyle.classList = 'passvord';
});

burgerOpen.addEventListener("click", function() {
    burgerMenu.style.right="0%"
});
burgerClose.addEventListener("click", function() {
    burgerMenu.style.right="-30%"
});