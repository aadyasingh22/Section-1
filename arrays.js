const nums = ['war','pathaan','thor','flash','ice age','k3g'];

console.log(typeof nums);
console.log(nums.length);

nums.push('ddlj'); //adds new element at ending of the array
console.log(nums);

nums.unshift('3 idiots'); //adds new element at starting of the array
console.log(nums); 

console.log([...nums, 'spiderverse']); //... makes print an array as string

nums.pop(); //removes last element of array
console.log(nums);

nums.shift(); //removes first element of the array
console.log(nums);

console.log(nums[3]); //indexing
console.log(nums.at(-2)); //negative indexing

console.log(nums.slice(1,3)); //slicing

nums.splice(3,2);
console.log(nums); //removes element in specified index

nums.splice(3,2,'batman','toy story'); //adds elements in the specified indxes
console.log(nums);