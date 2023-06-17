console.log("jQuery");
console.log($());
var heading=document.getElementById("heading");
console.log(heading);

//ex1
var heading1=$("#heading");
console.log(heading1)

//Ex
var para=document.getElementsByClassName("myPara");
var para1=$(".myPara");
console.log(para1);

//ex
var para2=document.getElementsByTagName("span")
var para3=$("span");
console.log(para3);

//Get /update the content of the element
console.log(heading.innerText);
heading.innerText="This is jQuery"
//text()
console.log(heading1.text());
heading1.text("Im learning jQuery");

//Get/update element
var mySpan=document.getElementById("heading")
console.log(mySpan.innerHTML);
mySpan.innerHTML=`<h2>Hi All</h2>`
console.log(mySpan.innerHTML);

//html()

heading1.html(`<span class="mySpan">This my Jquery File</span>`)
console.log(heading1.html())
//Modify the styles of an element
var newPara=document.getElementById("newPara");
// newPara.style.color="red"
 var myPara=$("#newPara")
 myPara.css("color","blue")
// newPara.css("color","blue")

myPara.css("display","block");

var btn=$("#btn")
// /btn.addEventListener("click",onBtnclick)
// btn.on("click",function(e){
    //alert("hiiii");
    // mydisplay="block";
    // if(mydisplay=="none"){
    //     $("#newPara").show();
    // }else{
    //     $("#newPara").hide();  
    // }
   // $("#newPara").toggleClass('hide');

//Ajax in JS
//    btn.on("click",function(e){
//    var ajax = new XMLHttpRequest();
//         ajax.open("GET", "https://jsonplaceholder.typicode.com/todos");
//         ajax.send();
//         ajax.addEventListener("readystatechange", onReadyStateChange);

// })

// function onReadyStateChange(e) {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//               // var data = JSON.parse(e.target.responseText);
              
//               console.log(e.target.responseText);
//             }
//           }
//Ajax in jQuery

// btn.on("click",function(e){
// $.ajax({
//     url:"https://jsonplaceholder.typicode.com/todos",
//     method:"GET",
//     success:function(data){
//         console.log(data)
//     },
//     error:function(error){
//         alert("error");
//     }
// })
// })
/*
var product=[{"name":"Abc", address:"xsdw",[{streetname:"tyr"}]},{name"Afre"}]

*/ 
//post Method
// btn.on("click",function(e){
//     var postData={
//         id:123,
//         title:"Goto Market"
//     };
//     $.ajax({
//         url:"https://jsonplaceholder.typicode.com/todos",
//         method:"POST",
//         data:JSON.stringify(postData),
//         headers:{
//             "Content-Type":"application/JSON"
//         },
//         success:function(data){
// console.log(data)
//         },
//         error:function(errr){
// alert("error");
//         }
//     })

// })

var office = {
    name: 'ABC',
    city: 'Bangalore',
    weekdays: ['sun','mon','tue','wed','thu','fri','sat']
  };

for(let i=0;i<7;i++){
let week=office.weekdays
console.log(week[i]);

}

//Fetch API

$("#btn").on("click",async function(e){
const response=await fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz")
 const data=await response.json();
console.log(data);
// var len=data.options
for(var i=0;i<4;i++){
    for(var j=0;j<3;j++){
    // console.log(data[i].questions[i])
 console.log(data[i].options[j]);
    }
}
})