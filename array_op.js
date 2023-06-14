const nums = [4,8,29,35,252,395];
for(let i of nums){
    i=i*i;
    console.log(i);
}

const res = nums.map((i)=>{return i**2}); //to create a new array with given modification
console.log(res);

prices = [2345,2388,9993,7500,23567]; //find 10% of all elements and print array
const p = prices.map((i)=>{return i/10});
console.log(p);