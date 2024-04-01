//note:
const input = 'The Quick Brown Fox';

//Also:
  const output = alternateCase(input);

// This function takes an input string and returns a new string with the case of each letter alternated.

  function alternateCase(inputString) {
    // Check if the input is a string, if it's not,it logs an error message to the console.
    if (typeof inputString!== 'string') {
      console.log('Input must be a string');
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
      resultArray.push((char === char.toUpperCase())? char.toLowerCase() : char.toUpperCase());
    }
  
    // Join the resulting characters into a string and return it
    return resultArray.join('');
  }
  
  // Test the function
  console.log(output); // Output: tHE qUICK bROWN fOX.