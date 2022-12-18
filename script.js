// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 8;
var passwordUpper = true;
var passwordLower = true;
var passwordNumber = true;
var passwordSpecial = true;

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
  console.log(lengthTxt.value);

  passwordUpper = upperChk.checked;
  console.log(upperChk.checked);

  passwordLower = lowerChk.checked;
  console.log(lowerChk.checked);

  passwordNumber = numberChk.checked;
  console.log(numberChk.checked);
  
  passwordSpecial = specialChk.checked;
  console.log(specialChk.checked);
}

// make password
function constructPassword(valueLow, valueHigh){

// check for user approved character types
  getValues()

// check that at least one character set is selected
  if(passwordUpper || passwordLower || passwordNumber || passwordSpecial){
    console.log('thanks')
  } else {
    console.log('please select at least one character set')
    return
  }
  
// check that password length is set between 8-128
if (passwordLength < 8 || passwordLength > 128) {
  console.log('please select a password length between 8 and 128')
  return
}

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

console.log(approvedCharSet)

// generate random number
function generateNumber() { random = crypto.getRandomValues(myArray)
var mappedNumber = Math.floor((charLength) * (random - -2147483647) / (2147483647 - -2147483647));
console.log('random number: ' + random)
console.log('mapped number: ' + mappedNumber)
return mappedNumber
}
// loop: select random char(based on random number) in concat set to the specified length
password = ''

while(password.length < passwordLength){
  // add selected char to new password
  password += approvedCharSet.charAt(generateNumber())
}

console.log(password)
// display password

// Write password to the #password input
// Add event listener to generate button
var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
}