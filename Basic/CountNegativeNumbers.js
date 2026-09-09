

let array = [-2,-5,7,-6,5,7,9,5,-2,35,-8];

let answer = negative(array);

function negative(array){

  let count = 0;
  for(let i=0;i<array.length;i++){
  // if number is less than 0 it will be negative 

  if(array[i]<0){
    count++;
  }

  }

  return count; // returning the count of negative numbers here
}

console.log(answer);

