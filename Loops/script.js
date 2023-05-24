console.log("Loops");

var users=["John","Alice","Julie","Doe","Ann","Peter","Joseph"];
console.log(users);

//splice=>mutable

// users.splice(4,2);
// console.log(users);

//slice(no of items to delete)//immutable

// var newuser=users.slice(2);
// console.log(newuser);
console.log(users);
//I It will return a subarray from the original array
var newuser=users.slice(2,6);//slice(start index,position starts from 1)
console.log(newuser);

//constant arrays

var Fruits=["Apple","Mango","Cherry"];
console.log(Fruits)
var Fruits=["PineApple"];
console.log(Fruits);

//

// const Fruits=["Apple","Mango","Cherry"];
//  console.log(Fruits);
//  const Fruits=["Pineapple"];
 //console.log(Fruits);

 //Loops=>Repeating something in a particular manner

//  console.log("hi There");
//  console.log("hi There");
//  console.log("hi There");console.log("hi There");console.log("hi There");
//  console.log("hi There");
//  console.log("hi There");
//  console.log("hi There");
//  console.log("hi There");
//  console.log("hi There");
//  console.log("hi There");

 //Types of Loops
 //1.while loop
 //2.for loop

 /*
 SYNTAX FOR WHILE LOOP
 while(condition){
    logic for repeat
    optional:increment/decrement
 }
 */
var num=1;
while(num<=100){//101<=100

console.log("Hi there");
num++;//num=num+1
}

// Q print values 1 to 100 using while loop

// var num1=1;
// while(num1<=100){
//     console.log(num1);
//     num1++;//increment
// }
//Q print values 100 to 1 using while loop

// var num1=100;
// while(num1>=0){
//     console.log(num1);
//     num1--;//decrement operator
// }

//Q print all even numbers with in 100

var count=1;
while(count<=100){
    if(count % 2==0){
        console.log("Even Numbers",count);
    }else{
        console.log("Odd numbers:",count);
    }
    count++;

    }// 2,4,6,8,10.....even numbers

// var num=0;
// while(num<=100){
//     console.log(num);
//     num=num++;
// }

//

//Exercise
// Q write a multiplication table for 5 upto 10
// 1x5=5;
// 2x5=10;
// 3x5=15..10x5=50

//2.For loop
//Syntax 

//for(intialization;Condition;increment/decrement operator){
    //logic
//}

//Q print values 1 to 100 using for loop

for(var num1=1;num1<=100;num1++){
    console.log(num1);
 }

 ////Q print values 100 to 1 using for loop

 for(var num1=100;num1>=1;num1--){
    console.log(num1);
 }

 //Q print all even numbers with in 100

 for(var counter=1;counter<=100;counter++){
    if(counter%2==0){//4%2==0
        console.log("Even",counter);
    }
 }

 //Array Iteration

 var users=["John","Alice","Julie","Doe","Ann","Peter","Joseph","Robin"];
// Hi John
// Hi Alice
//console.log(users[2]);

for(var i=0;i<users.length;i++){
    console.log("Hi"+" ",users[i]);
}

//break
for(var i=1;i<=50;i++){
    
if(i>20){//i=21>20
    break;//stop execution
}
console.log(i);
}
//Q.check if the user Doe is present in our array and print index of that
//var users=["John","Alice","Julie","Doe","Ann","Peter","Joseph","Rob"]

// users[0]==John
// users[1]==Alice
for(var i=0;i<users.length;i++){
    if(users[i]=='Doe'){
        console.log("Index is",i,users[i]);
        break;
    }
    console.log(users[i]);
}

//continue=>skip an item
for(var i=1;i<=100;i++){
   
    if((i>60) && (i<70)){
        continue;//skip the item
    }
    console.log(i);
}