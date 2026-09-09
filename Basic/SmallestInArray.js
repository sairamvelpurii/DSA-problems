let arr = [1,8,27,58,-6,2,4,-62,45,-61];

let SmallestNumber = Number.MAX_VALUE;

for(let i=0;i<arr.length;i++){

  if(SmallestNumber > arr[i]){
    SmallestNumber = arr[i];
  }
  
}

console.log(SmallestNumber);


