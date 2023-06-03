console.log("Events");


var btn=document.getElementById("btn-toggle");
var myDiv=document.getElementById("article");
// console.log(btn)
//Ways to register an Event
//1st way

// btn.onclick=onbtnClick;//->event listener

//element name.<event>=<function name>

function onbtnClick(){
    // alert("working");
   // myDiv.style.backgroundColor="blue";
//    if(myDiv.style.backgroundColor==="blue"){
//     myDiv.style.backgroundColor="white"
//    }else{
//     myDiv.style.backgroundColor="blue"
//    }

if(document.body.style.backgroundColor==="black"){
    document.body.style.backgroundColor="white";
    document.body.style.color="black"
}else{
    document.body.style.backgroundColor="black";
    document.body.style.color="white"
}
}

//way2
btn.addEventListener("click",onbtnClick);


// how to register an event
//step1: Get an element from html btn
//step2: create a function which will called a click of a button
//step3: regiter an event btn.addEventListener("click",onbtnClick);

var zoomIn=document.getElementById("zoomInBtn");
var zoomOut=document.getElementById("zoomOutBtn");
var paragraph=document.getElementById("para");

var fontSize=8;
function onZoomIn(){
// alert("onZoom")
fontSize+=3;//fontSize=fontSize+2=18px
paragraph.style.fontSize=fontSize + "px"//16px

}
function onZoomOut(){
    fontSize-=5;
    paragraph.style.fontSize=fontSize + "px";
}

//register an event

zoomIn.addEventListener("click",onZoomIn);
zoomOut.addEventListener("click",onZoomOut);

//Form related Events

//Q. write a form validation on form submission, where you validate following things

//1.email->it should only allow gmail
//2.password->password and confirm password should be same


//get elements
var emailfield=document.getElementById("email");
var password=document.getElementById("pwd");
var confirmpwd=document.getElementById("confirmpwd");
var form=document.getElementById("regForm");
var submitBtn=document.getElementById("submitBtn");
var email;
var pwd;
var confmPwd;

function onEmailKeyup(e){
email=e.target.value;
}
function onPasswordKeyup(e){
    pwd=e.target.value;  
}
function onConfirmPwdKeyup(e){
 confmPwd=e.target.value;
}
function onFormSubmission(e){
    e.preventDefault(); //prevent to reload a page
// console.log(email,pwd,confmPwd);
//perform validations
if(!email.endsWith('@gmail.com')){
    alert("Only Gmail Ids are allowed");
    emailfield.style.border="1px solid red";
}else if(pwd!==confmPwd){
    alert("Password and Confirm password does not match");
    password.style.border="1px solid red";
    confirmpwd.style.border="1px solid red";
}else{
    alert("Form Submitted successfully");
}

}
//Register an Event
emailfield.addEventListener("keyup",onEmailKeyup);
password.addEventListener("keyup",onPasswordKeyup);
confirmpwd.addEventListener("keyup",onConfirmPwdKeyup);

form.addEventListener('submit',onFormSubmission);





