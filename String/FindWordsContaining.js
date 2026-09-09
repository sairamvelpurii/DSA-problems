
let words = ["abc","bcd","aaaa","cbc"] , x = "a" ;

let result = [];

for(let i=0;i<words.length;i++){

  //  checking if x is present in each element in array
  if(words[i].includes(x)){
    result.push(i);
  }

}

console.log(result);
