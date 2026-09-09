
let s = "   fly me   to   the moon  ";

// trimming leading and trailing spaces and splitting
let cleanArray = s.trim().split(" "); 

// we need to get the last word in the cleanArray
let lastWord = cleanArray[cleanArray.length -1];

// lastWord length will be our answer
console.log(lastWord.length);




