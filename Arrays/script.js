console.log("Arrays");

var user=[];

// John, Alice, Julie, Doe, Ann

var name1="John";
var name2="Alice";
var name3="Julie";

console.log(name1,name2,name3);

var names=["John","Alice","Julie","Doe","Ann"];// Array of strings

// console.log(names);

var Age=[25,45,34,67,78];//Array of numbers

var isChecked=[true,false.true,true];//Array of boolean values

var product={
    name:"Mobile",
    Price:20000,
    isFarbished:true

}
//Object is a heterogenous data types

var product=[
    {"name":"Mobile","Price":20000},
    {"name":"laptop","Price":50000} // Arrays of Objects
]

var users=["John","Alice","Julie","Doe","Ann","Peter"];
console.log(users);

//index starts from 0 goes to n-1, where n is the number of items

console.log(users[1]);
console.log(users[4]);
console.log(users[5]);

console.log(users[6]);


//Adding an item into an array at end

users[6]="Tony";
console.log(users);

users[8]="Joe";
console.log(users);

console.log(users[7]);

//String.length

console.log(users.length);
users[users.length]="Julie"
console.log(users);
users[users.length]="Abc";
console.log(users);

//push
users.push("Bcd");
console.log(users);
users.push("Dsa");
console.log(users);

//Delete an item from an array at end
//pop
users.pop();
console.log(users);
users.pop();
console.log(users);

//Insert an item at the beginning
//unshift->insert at beginning
users.unshift("Mongo");
console.log(users);

users.unshift("Xcs");
console.log(users);
//Remove an item from the beginning
//shift=>delete from beginning
users.shift();
console.log(users);

users.shift();
// console.log(users);
// users[3]="Benson"
// console.log(users);

//splice()=>it will allow us add an item at any specific position of an array

 users.splice(4,0,"Amen","Doe");
 console.log(users);

 users.splice(1,0,"Abc");
 console.log(users);

users.splice(7,0,"Joseph");
console.log(users);
 //Replace any item

 users.splice(1,1,"Ben","Anna");
 console.log(users);

 //delete an item

 users.splice(2,2);
 console.log(users);


 //Array Methods

 //sort=> Ascending order
//  users.sort();
//  console.log(users);

//  users.reverse();
//  console.log(users);

 users.sort().reverse();// chaining of methods

 console.log(users);

 //Merge two arrays
 var newUser=["A","B","C"];
 var newUser3=["D","E","F"];
 var user3=users.concat(newUser,newUser3);
 console.log(user3);

 var user3=newUser.concat(users);
 console.log(user3);

 console.log(typeof users);//object

 //isArray
 console.log(Array.isArray(users));

 var str=users.toString();
 console.log(str);

 var arr=str.split(",");
 console.log(arr);

