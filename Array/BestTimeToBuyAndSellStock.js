
let prices = [7,1,5,3,6,4];

let minPrice = Number.MAX_VALUE;
let maxAmount = 0;

for(let i=0;i<prices.length;i++){

    if(minPrice>prices[i]){
        minPrice = prices[i]; // updating min price 
      }
    else{
        let temp = prices[i]-minPrice; // checking best day 
        maxAmount = Math.max(maxAmount,temp);
    }

}        

console.log(maxAmount);