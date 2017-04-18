/**
 * Created by DelMonroe on 4/17/17.
 */
(function () {
"use strict";

var i2 = document.getElementById("I-2");
var operator = i2.getAttribute("value");
var i1 = document.getElementById("I-1");
var res = i1.getAttribute("value");
var i3 = document.getElementById("I-3");
var res2 = i3.getAttribute("value");


function one() {
    if (operator) {
        i3.setAttribute("value", res2 += "1");
    } else {
        i1.setAttribute("value", res += "1");
    }
}

var btn1 = document.getElementById("btn_1");
btn1.addEventListener("click", one);


function two() {
    if (operator) {
        i3.setAttribute("value", res2 += "2");
    } else {
        i1.setAttribute("value", res += "2");
    }

}
var btn2 = document.getElementById("btn_2");
btn2.addEventListener("click", two);


function three() {
    if (operator) {
        i3.setAttribute("value", res2 += "3");
    } else {
        i1.setAttribute("value", res += "3");
    }
}
var btn3 = document.getElementById("btn_3");
btn3.addEventListener("click", three);


function Add() {

    i2.setAttribute("value", operator = "+");
    return operator;
}

var btnPlus = document.getElementById("btn_+");
btnPlus.addEventListener("click", Add);



function four() {
    if (operator) {
        i3.setAttribute("value", res2 += "4");
    } else {
        i1.setAttribute("value", res += "4");
    }

}
var btn4 = document.getElementById("btn_4");
btn4.addEventListener("click", four);


function five() {
if (operator) {
    i3.setAttribute("value", res2 += "5");
} else {
    i1.setAttribute("value", res += "5");
}

}
var btn5 = document.getElementById("btn_5");
btn5.addEventListener("click", five);


function six() {
    if(operator){
        i3.setAttribute("value", res2 += "6");
    }else {
        i1.setAttribute("value", res += "6");
    }
}
var btn6 = document.getElementById("btn_6");
btn6.addEventListener("click", six);


function subtract() {
    i2.setAttribute("value", operator = "-");
    return operator;
}
var btnSub = document.getElementById("btn_-");
btnSub.addEventListener("click", subtract);


function seven() {
    if(operator){
        i3.setAttribute("value", res2 += "7");
    }else {
        i1.setAttribute("value", res += "7");
    }
}
var btn7 = document.getElementById("btn_7");
btn7.addEventListener("click", seven);


function eight() {
    if(operator){
        i3.setAttribute("value", res2 += "8");
    }else {
        i1.setAttribute("value", res += "8");
    }
}
var btn8 = document.getElementById("btn_8");
btn8.addEventListener("click", eight);


function nine() {
    if(operator){
        i3.setAttribute("value", res2 += "9");
    }else {
        i1.setAttribute("value", res += "9");
    }

}
var btn9 = document.getElementById("btn_9");
btn9.addEventListener("click", nine);


function multiply() {
    i2.setAttribute("value", operator = "*");
    return operator;

}
var btnMul = document.getElementById("btn_*");
btnMul.addEventListener("click", multiply);


function clear() {
    res = "";
    res2 = "";
    operator = "";
    i1.setAttribute("value", "");
    i2.setAttribute("value", "");
    i3.setAttribute("value", "");
}
var btnC = document.getElementById("btn_C");
btnC.addEventListener("click", clear);


function zero() {
    if(operator){
        i3.setAttribute("value", res2 += "0");
    }else {
        i1.setAttribute("value", res += "0");
    }
}
var btn0 = document.getElementById("btn_0");
btn0.addEventListener("click", zero);


function equals() {
    var value1 = parseInt(res);
    var value2 = parseInt(res2);
    var answer;


    switch (operator) {
        case "+":
            answer = value1 + value2;
            break;
        case "-":
            answer = value1 - value2;
            break;
        case "*":
            answer = value1 * value2;
            break;
        case "/":
            answer = value1 / value2;
            break;
    }
    if (answer === undefined){
        alert("Please enter values before pressing equals.");
        answer = "";
    }else if (answer === Infinity){
        answer = 0;
    }

        res2 = "";
        res = answer;
        i1.setAttribute("value", answer);
        i3.setAttribute("value", "");


}
var btnequal = document.getElementById("btn_=");
btnequal.addEventListener("click", equals);


function divide() {
    i2.setAttribute("value", operator = "/");
    return operator;
}
var btnDiv = document.getElementById("btn_/");
btnDiv.addEventListener("click", divide);

})();