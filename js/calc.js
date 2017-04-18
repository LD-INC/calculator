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
        if (operator) {
            i3.setAttribute("value", res2 += "6");
        } else {
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
        if (operator) {
            i3.setAttribute("value", res2 += "7");
        } else {
            i1.setAttribute("value", res += "7");
        }
    }

    var btn7 = document.getElementById("btn_7");
    btn7.addEventListener("click", seven);


    function eight() {
        if (operator) {
            i3.setAttribute("value", res2 += "8");
        } else {
            i1.setAttribute("value", res += "8");
        }
    }

    var btn8 = document.getElementById("btn_8");
    btn8.addEventListener("click", eight);


    function nine() {
        if (operator) {
            i3.setAttribute("value", res2 += "9");
        } else {
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
        if (operator) {
            i3.setAttribute("value", res2 += "0");
        } else {
            i1.setAttribute("value", res += "0");
        }
    }

    var btn0 = document.getElementById("btn_0");
    btn0.addEventListener("click", zero);


    function equals() {
        var value1 = parseFloat(res);
        var value2 = parseFloat(res2);
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
        if (answer === undefined) {
            alert("Please enter values before pressing equals.");
            answer = "";
        } else if (answer === Infinity) {
            answer = 0;
        }

        res2 = "";
        res = answer;
        i1.setAttribute("value", answer);
        i3.setAttribute("value", "");


    }
    function rotateAnimation() {
        btnequal.setAttribute("class", "animate");
        setTimeout(function(){
            btnequal.removeAttribute("class");
        }, 3000);
    }


    var btnequal = document.getElementById("btn_eq");
    btnequal.addEventListener("click", function () {
        equals();
        rotateAnimation();
    });


    function divide() {
        i2.setAttribute("value", operator = "/");
        return operator;
    }

    var btnDiv = document.getElementById("btn_/");
    btnDiv.addEventListener("click", divide);


    function decimal() {
        var dec1 = res.includes(".");
        var dec2 = res2.includes(".");
        if (operator) {
            if (!dec2) {
                i3.setAttribute("value", res2 += ".");
            }
        }else {
            if (!dec1) {
                i1.setAttribute("value", res += ".");
            }
        }
    }
    var btnDec = document.getElementById("btn_dec");
    btnDec.addEventListener("click", decimal);


    function negative() {
        if (operator) {
            if (res2 > 0){
                res2 = "-"+res2;
            }else{
                res2 = res2 - (res2 * 2);
            }
            i3.setAttribute("value", res2);
        } else {
            if (res > 0){
                res = "-"+res;
            }else{
                res = res - (res * 2);
            }
            i1.setAttribute("value", res);
        }
    }
    var btnNeg = document.getElementById("btn_neg");
    btnNeg.addEventListener("click", negative);


    function percent() {
        if (operator) {
            res2 = res2/100;
            i3.setAttribute("value", res2);

        } else {
            res= res/100;
            i1.setAttribute("value", res);
            res2= "";
        }
    }

    var btnPer = document.getElementById("btn_percent");
    btnPer.addEventListener("click", percent);

    function squared() {
        if (operator) {
            res2 = Math.pow(res2, 2);
            i3.setAttribute("value", res2);
        } else {
            res = Math.pow(res, 2);
            i1.setAttribute("value", res);
        }
    }

    var btnSquared = document.getElementById("btn_squared");
    btnSquared.addEventListener("click", squared);


})();