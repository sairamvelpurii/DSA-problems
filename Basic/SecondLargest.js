let arr = [1,8,27,58,6,2,4,62,45,61];

let maxNumber = 0;
let secondMaxNumber = 0;

for(let i=0;i<arr.length;i++){
  if(arr[i]>maxNumber){
    secondMaxNumber = maxNumber; // First Move the old largest number to second place so we dont loose the prev max
    maxNumber = arr[i];
  }
  // even if the current i is not greater than max and could be greater than second max 
  else if(arr[i]>secondMaxNumber && arr[i]<maxNumber){
    secondMaxNumber = arr[i]; 
  }
}

console.log(maxNumber);
console.log(secondMaxNumber);

