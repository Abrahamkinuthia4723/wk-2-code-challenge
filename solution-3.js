// Function to locate and determine if a number is prime
function locateprimenumbers(num, i = 2) {
    // Check if 'num' is less than 2
    if (num < 2) {
        // Return false if 'num' is less than 2
        // Prime numbers are greater than or equal to 2
        return false;
    }

    // Check if 'i' is greater than the square root of 'num'
    if (i > Math.sqrt(num)) {
        // Return true if 'i' is greater than the square root of 'num'
        // This implies that 'num' is a prime number
        return true;
    }

    // Check if 'num' is divisible by 'i' with no remainder
    if (num % i === 0) {
        // Return false if 'num' is divisible by 'i' with no remainder
        // This implies that 'num' is not a prime number
        return false;
    }

    // Recursive call to the same function, computing the value of 'i' by 1
    return locateprimenumbers(num, i + 1);
}