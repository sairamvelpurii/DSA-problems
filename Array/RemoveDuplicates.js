

let array = [0,0,1,1,1,2,2,3,3,4,5,6,77];

let x = 0;

for(let i=1;i<array.length;i++){

  if(array[i]!=array[x]){ // here i am checking new element 
    array[++x] = array[i]; // increasing x and updating the unique value
  }

}

console.log(array.slice(0,x+1));
