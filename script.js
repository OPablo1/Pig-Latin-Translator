"use strict";
var $ = function(id) { return document.getElementById(id); };

var createCaptcha; // global in scope


var translatePigLatin = function(str)
{
  
    // array of vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result = str.split('');
    
    if (vowels.includes(str.charAt(0))) { //0 first letter of string. Checks if first letter is a vowel
        return str += 'way'; // if it is a vowel 'way' is added to end of word
    } else {
        for (var i = 0; i < str.length; i++) { // for loop to check if word has constanant or constant cluster
            if (!vowels.includes(str[i])) { // checks constanant first letter if letter is not a vowel 
                result.push(result.shift()); // removes first letter then shifts it to the end
            } else {
                result.push('ay'); // adds ay to end of word
                return result.join('') // stops loop returns string
            }
        }
    }
    
    
    $("textarea2").value = str;
    
    var verify  = verifyCaptcha(createCaptcha);
    if (verify !== true)
    {
      alert("Please check your math.");
      document.getElementById("captcha").focus();
      return;
    };
};

var getInput = document.getElementById('translate');

{
    var inputText = document.getElementById('textarea1').value;
    var outputText = document.getElementById('textarea2').value = translatePigLatin(inputText);
    
};


//console.log(translatePigLatin(str));

window.onload = function() 
{
    $('translate').onclick = function()
    createCaptcha = generateCaptcha();
    
    localStorage.getItem("textarea2");
    localStorage.setItem("textarea2");
};