let arr = [1,8,27,58,6,2,4,62,45,6];

let max = 0;

for(let i = 0;i<arr.length;i++){
  // if my current index is greater than the max i will update my max 
  if(arr[i]>max){
    max = arr[i]; 
  }
}

console.log(max);

