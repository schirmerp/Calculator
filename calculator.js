var displayValue = 0;
var tempValue = 0;
var finalValue = 0;
var mode;
var lastMath = 0;
var modeSign;
var oldMath = _e('lastMath').innerHTML
var sheet = document.getElementById('link');



function _e(id) {
    return document.getElementById(id);
 };
 _e('theme').onclick = function() {
     if(sheet.getAttribute('href') == 'style.css') {
         sheet.setAttribute('href' , 'style1.css');
     }else {
         sheet.setAttribute('href', 'style.css');
     }
 };
 
_e('clear').onclick = function() {
    _e('numbers').innerHTML = "";
    _e('lastMath').innerHTML = "";
    displayValue = 0; 
    tempValue = 0;
    finalValue = 0;
};
_e('plus').onclick = function() {
    tempValue = parseInt(_e('numbers').innerHTML);
    _e('numbers').innerHTML = "";
   // _e('lastMath').innerHTML += `${tempValue}`;
    _e('lastMath').innerHTML += " + ";
    mode = add;
    modeSign = "+";
    return tempValue;
};
_e('minus').onclick = function() {
    tempValue = parseInt(_e('numbers').innerHTML);
    _e('numbers').innerHTML = "";
    _e('LastMath').innerHTML += " - ";
    mode = subtract;
    modeSign = "-";
    return tempValue;
};
_e('multiply').onclick = function() {
    tempValue = parseInt(_e('numbers').innerHTML);
    _e('numbers').innerHTML = "";
    _e('lastMath').innerHTML += " x ";
    mode = multiply;
    modeSign = "x";
    return tempValue;
};
_e('divide').onclick = function() {
    tempValue = parseInt(_e('numbers').innerHTML);
    _e('numbers').innerHTML = "";
    _e('lastMath').innerHTML += " / ";
    mode = divide;
    modeSign = "/";
    return tempValue;
};
_e('math').onclick = function() {
    if(_e('lastMath').innerHTML != '') {
    displayValue= parseInt(_e('numbers').innerHTML);
    //_e('lastMath').innerHTML = `${displayValue}`;
   // oldMath = (` ${parseInt(tempValue)} ${modeSign} ${parseInt(displayValue)}`);
    _e('numbers').innerHTML = operator(mode, tempValue, displayValue);
    finalValue = parseInt(_e('numbers').innerHTML);
    _e('lastMath').innerHTML = finalValue;
    return finalValue;
    };    
};
//number buttons
_e('1').onclick = function() {
    _e('numbers').innerHTML += 1;
   _e('lastMath').innerHTML += 1;
};
_e('2').onclick = function() {
    _e('numbers').innerHTML += 2;
    _e('lastMath').innerHTML += 2;
};
_e('3').onclick = function() {
    _e('numbers').innerHTML += 3;
    _e('lastMath').innerHTML += 3;
};
_e('4').onclick = function() {
    _e('numbers').innerHTML += 4;
    _e('lastMath').innerHTML += 4;
};
_e('5').onclick = function() {
    _e('numbers').innerHTML += 5;
    _e('lastMath').innerHTML += 5;
};
_e('6').onclick = function() {
    _e('numbers').innerHTML += 6;
    _e('lastMath').innerHTML += 6;
};
    _e('7').onclick = function() {
    _e('numbers').innerHTML +=  7;
    _e('lastMath').innerHTML += 7;
};
    _e('8').onclick = function() {
    _e('numbers').innerHTML += 8;
    _e('lastMath').innerHTML += 8;
};
    _e('9').onclick = function() {
    _e('numbers').innerHTML += 9;
    _e('lastMath').innerHTML += 9;
};
    _e('0').onclick = function() {
    _e('numbers').innerHTML += 0;
    _e('lastMath').innerHTML += 0;
};

//modes
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};


const divide = function(a, b) {
    return (a / b);
};


const operator = function(mode, c, d) {
    
    switch (mode) {
        case add:
            displayValue = add(c,d);
            return displayValue
            break;
        case subtract:
            displayValue = subtract(c,d);
            return displayValue;
            break;
        case multiply:
            displayValue = multiply(c,d);
            return displayValue;
            break;
        case divide:
            displayValue = divide(c,d);
            return displayValue;
            break;
}

}