// Define the input string
const input = 'The Quick Brown Fox';

// Call the alternateCase function with the input string and store the result in the output variable
const output = alternateCase(input);

// Output the result
console.log(output);

// Function to alternate the case of each character in the input string
function alternateCase(inputString) {
  // Check if the input is a string, if it's not, log an error message to the console
  if (typeof inputString !== 'string') {
    console.log('Input must be a string');
    return ''; // Return an empty string if the input is not a string
  }

  // Return an empty string if the input string is empty
  if (inputString.length === 0) {
    return '';
  }

  // Initialize an empty array to store the resulting characters
  const resultArray = [];

  // Iterate over each character in the input string
  for (let i = 0; i < inputString.length; i++) {
    // Get the current character
    const char = inputString[i];

    // If the character is uppercase, convert it to lowercase and add it to the result array
    // If the character is lowercase, convert it to uppercase and add it to the result array
    resultArray.push(char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
  }

  // Join the resulting characters into a string and return it
  return resultArray.join('');
}

