// Default value
function rollDice(numSides = 6){ // Return a value between 1 and numSides
return Math.floor(Math.random()*numSides) + 1;
}