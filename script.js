/* 
Password Generator V1.1
Author: Matt Kelly
Submitted 05/01/2024
*/

var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseString = lowercaseString.toUpperCase();
var numericString = "0123456789";
var specialString = "!@#$%^&*-+";
var password = "";
var availableChars = "";

function generatePassword() {
  // Prompt the user for password length and repeat until valid input is provided or user cancels.
  var passwordLength = -1;
  var loopCount = 0;
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    if (loopCount++ > 0) {
      alert("Invalid Input: Please enter a value between 8 and 128");
    }
    passwordLength = prompt("How many characters would you like your password to be?");
    if (passwordLength == null) {
      return null;
    }
  }
  console.log("Password length is " + passwordLength + " characters");

  if (confirm("Do you want to include lowercase characters?")) {
    availableChars = availableChars + lowercaseString;
  }

  if (confirm("Do you want to include uppercase characters?")) {
    availableChars = availableChars + uppercaseString;
  }

  if (confirm("Do you want to include numeric characters?")) {
    availableChars = availableChars + numericString;
  }

  if (confirm("Do you want to include special characters?")) {
    availableChars = availableChars + specialString;
  }

  if (availableChars == "") {
    alert("Please choose at least 1 character type to include in the password");
    return(null);
  }
  console.log("Available characters: " + availableChars);

  // Select a random character from all available characters and append to password string. Repeat for each character in users chosen password length. 
  for (var i = 0; i < (passwordLength); i++) {
    var select = Math.floor(Math.random() * availableChars.length);
    var selectChar = availableChars[select];
    password = password + selectChar;
  }
  console.log("Generated Password: " + password);
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password == null) {
    return;
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
