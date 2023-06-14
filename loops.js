for(let i=0; i<10; i++){
    console.log(i);
};

//prog to check if a number is prime or not

let num=15;
let isprime = true;

for(let i=2; i<num; i++){
    if(num%i == 0){
        console.log("Number is not prime.");
        isprime=false;
        break;
    }
};

if(isprime) console.log("Number is prime.");

for(let i=1; i<=100; i++){
    if(i%3 == 0 && i%6 != 0){
        console.log(i);
    }
}

//WAP to print all numbers not divisible by 7 as well as 11 from 1 to 1000

for(let i=1; i<=1000; i++){
    if(i%7 != 0 || i%11 != 0){
        console.log(i)
    }
}

const fruits = ["apple","mango","banana","grapes","orange"];

for(let fr of fruits){
    console.log(fr);
};