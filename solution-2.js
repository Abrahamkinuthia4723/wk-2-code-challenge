//A function that gives rise to an array of numbers between two given numbers (inclusive).
 
function crearearray(num1, num2) {
    // Initialize an empty array to store the result.
    const result= [];

    // Check if num1 is less than or equal to num2.
    if (num1 <= num2) {
      // Use array.from() method to create an array of numbers between num1 and num2 (inclusive).
      return Array.from({ length: num2 - num1 + 1 }, (_, i) => i + num1);
    } else {
      // Use array.from() method to create an array of numbers between num1 and num2 (inclusive) in descending order.
      return Array.from({ length: num1 - num2 + 1 }, (_, i) => num1 - i);
    }

  }
  
  // Test cases.
  console.log(crearearray(4, 7)); // Output: [4, 5, 6, 7]
  console.log(crearearray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]