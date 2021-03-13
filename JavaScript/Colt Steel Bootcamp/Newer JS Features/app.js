// Default value
function rollDice(numSides = 6){ // Return a value between 1 and numSides
return Math.floor(Math.random()*numSides) + 1;
}

// Spread in function calls
const nums = [1, 2, 4, 65, 76, 5646];
Math.max(...nums); // output -  5646

console.log(...nums) // output - 1 2 4 65 76 5646