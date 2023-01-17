var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var css = document.querySelector('h3');
var button = document.querySelector('button');

css.innerHTML = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

function setGradient() {
    var gradient = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    document.body.style.background = gradient;
    css.innerHTML = gradient;
}

function getRandom() {
    var randomcolor1 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    var randomcolor2 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    var randomgradient = 'linear-gradient(to right, ' + randomcolor1 + ', ' + randomcolor2 + ')';
    document.body.style.background = randomgradient;
    css.innerHTML = randomgradient;
}

var num = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
console.log(num);

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
button.addEventListener('click', getRandom);
