// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 8;
var passwordUpper = true;
var passwordLower = true;
var passwordNumber = true;
var passwordSpecial = true;

var text
var alertText

// acceptable character sets
var upperCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCharSet = 'abcdefghijklmnopqrstuvwxyz'
var numCharSet = '0123456789'
var specialCharSet = " \"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// approved character set
var approvedCharSet = ''
var charLength

var password = ''

// create array ref for crypto.getRandomValues
const myArray = new Int32Array(1)



// Retrieves values of user inputs
function getValues(){
  passwordLength = lengthTxt.value;
  passwordUpper = upperChk.checked;
  passwordLower = lowerChk.checked;
  passwordNumber = numberChk.checked;
  passwordSpecial = specialChk.checked;
}

// Character set validation
function charCheck() {
  getValues();
  if(!(passwordUpper || passwordLower || passwordNumber || passwordSpecial)){
    alertText = 'Please select at least one set of characters'
    return
  } else {
    alertText = ''
  }
    document.getElementById('error').innerText = alertText
}

// text box validation
function textValidation() {
  // checks if text box has valid input
  if (!document.getElementById('lengthTxt').checkValidity()){
    // changes text in p tag to display error message if not valid
    text = 'Please input value between 8 and 128'
    return
  } else {
    text = ''
  }
  document.getElementById('errorTxt').innerText = text  
};

// make password
function constructPassword(){

// check for user approved character types and valid password length
textValidation()
charCheck()

// reset approved char set
approvedCharSet = ''

// concat approved character sets
if (passwordUpper){
  approvedCharSet += upperCharSet
}
if (passwordLower){
  approvedCharSet += lowerCharSet
}
if (passwordNumber){
  approvedCharSet += numCharSet
}
if (passwordSpecial){
  approvedCharSet += specialCharSet
}
charLength = approvedCharSet.length

// generate random number
function generateNumber() { random = crypto.getRandomValues(myArray)
var mappedNumber = Math.floor((charLength) * (random - -2147483647) / (2147483647 - -2147483647));
return mappedNumber
}

// loop: select random char(based on random number) in concat set to the specified length
password = ''

while(password.length < passwordLength){
  // add selected char to new password
  password += approvedCharSet.charAt(generateNumber())
}

// display password
// Write password to the #password input
var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
}

// add event listeners to checkboxes
document.querySelector('#upperChk').addEventListener('click', charCheck)
document.querySelector('#lowerChk').addEventListener('click', charCheck)
document.querySelector('#numberChk').addEventListener('click', charCheck)
document.querySelector('#specialChk').addEventListener('click', charCheck)
// adds event listener to password length text box
document.getElementById('lengthTxt').addEventListener("blur", textValidation)

