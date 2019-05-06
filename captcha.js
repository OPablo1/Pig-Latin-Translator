"use strict";

var generateCaptcha = function()
{
    // This is where I am storing the text names for each number
    var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    // generates two random numbers 
    var rand1 = Math.floor((Math.random() * 10)), rand2 = Math.floor((Math.random() * 10));
    
    var string = "<strong>Verify that you are human:</strong><br>What is " + numbers[rand1] + " plus " + numbers[rand2] + "?";
    
    document.getElementById("captcha_label").innerHTML = string;
    
    return(rand1 + rand2);
};

var verifyCaptcha = function(captcha)
{
    if (document.getElementById("captcha").value == captcha) return true;
    else return false;
};
