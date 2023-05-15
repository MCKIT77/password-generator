// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['!', ' ', '"', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '{', '}', '`', '|', '~'];

var charCapped = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Y', 'Z'];

var charLower = charCapped.map(function (v) {
  return v.toLowerCase();
});

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']







function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );





  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters, cap letters, lower letters, and numbers
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasCapitalLetters = confirm(
    'Click OK to confirm including capital letters.'
  );

  var hasLowerCaseLetters = confirm(
    'Click OK to confirm including lower case letters.'
  );

  var hasNumbers = confirm(
    'Click OK to confirm including numbers.'
  );

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasCapitalLetters: hasCapitalLetters,
    hasLowerCaseLetters: hasLowerCaseLetters,
    hasNumbers: hasNumbers

    // add more properties and values here
  }

  console.log(passwordOptions)
  return passwordOptions;
}




// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];



  // Check if an options object exists, if not exit the function
  if (!options) return null;

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasCapitalLetters) {
    possibleCharacters = possibleCharacters.concat(charCapped);
    guaranteedCharacters.push(getRandom(charCapped));
  }

  if (options.hasLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(charLower);
    guaranteedCharacters.push(getRandom(charLower));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  var lengthRest = +options.length - +guaranteedCharacters.length;
  console.log(lengthRest);
  //at this point, the possibleCharacters array is ready to be randomized based on the length - guaranteedCharacters.length
  // console.log(possibleCharacters);


  // getting rest of password
  for (i = 0; i < lengthRest; i++) {
    result.push(getRandom(possibleCharacters));
    // console.log(result);

  }


  endResult = result.concat(guaranteedCharacters);

  //need to connect to writePassword

  // Transform the result into a string and pass into writePassword
  // console.log(guaranteedCharacters);

  return endResult.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
