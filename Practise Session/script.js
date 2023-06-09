    
console.log("Practise session");
var btn=document.getElementById("btn")

// btn.addEventListener("click",test);
//btn.addEventListener("click",login);

// btn.onclick=test()
//btn.onclick=login()

let person={
    "name":"Ann",
    "Age":20
}
person.name="John";
person["name"]="xyz"

var person2=person;
console.log(person2);
person2.name="Doe";
console.log(person)

//reference chaining

//BOM
//Browser object Model

// window->window.alert,prompt
// 1.document->DOM
// 2.history->History of the browser
// 3.location->current url
// 4.screen->screen size
// 5.navigator->device specification


// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.createElement("div")
// Element.remove();

//CRUD
//Create Read Update Delete
//JSON->Javascript Object notation
/*
name: Alex
mobile:13214325
Dob:23/01/1976

name: Doe
mobile:13214325
Dob:20/11/1965


*/ 
//Array of objects
PersonDetails=[{
    "name": "Alex",
"mobile":"13214325",
"Dob":"23/01/1976"

},
{"name": "Doe",
"mobile":"13214325",
"Dob":"20/11/1965"
}]

var student=[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }]

    for(var i=0;i<student.length;i++){
        console.log(student[i].userId) 
    }
// PersonDetails[0].name
// array=[1,2,3,4]

//Ajax=>Asynchronos jS and XML
//=>Update a web page without reloading the page
//Request data from a server - after the page has loaded
// Receive data from a server - after the page has loaded
// Send data to a server - in the background
//XML=>Extensible Markup Language

{/* <user>
<userId>1</userId>
<id>3</id>.
<title>fugiat veniam minus</title>
</user> */}
//Http=>htoertext transfer protocol
//method- 
//Get->to send the req
//post->to send data to server
//patch->update data
//delete->delete

//Status code
//1xx-----5xx
//200-success
//400->client side error
//500->server error

//Ajax
/*
1.instanciate class xmlHttpRequest
var ajax=new XMLHttpRequest();
2.use open method on it and pass method and endpoint
ajax.open(method,end-point);
3.send the request
ajax.send()
4.add Event listener to onReadyStateChange
ajax.addEventListener("readyStatechange",onReadyStateChange);
-------------------------------
5.After receiving the response you have to check following
1.ready state should be 4
2.status code-200

NOTE:
//string to JSON=>JSON.parse(string)
//JSON to string=>JSON.stringify(JSON)

*/
//Ajax call
// 1.endpoint=https://jsonplaceholder.typicode.com/todos
// 2.method:Get

// var btn=getElementById("btn");
var btn = document.getElementById("btn");
  //   console.log(btn);
  var ul = document.getElementById("myList");

function onBtnClick() {
      var ajax = new XMLHttpRequest();
      ajax.open("GET", "https://jsonplaceholder.typicode.com/todos");
      ajax.send();
      ajax.addEventListener("readystatechange", onReadyStateChange);
    }

function onReadyStateChange(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        var data = JSON.parse(e.target.responseText);
        for (var i = 0; i < data.length; i++) {
          var toDo = data[i];
          var li = document.createElement("li");
          li.innerText = toDo.title;
          ul.append(li);
        }
      }
    }

btn.addEventListener("click", onBtnClick);

//Post Method
var feedback;
var inputField = document.getElementById('feedback');
var submitBtn = document.getElementById('submitBtn');

function onSubmit() {
    try {
        var ajax = new XMLHttpRequest();
        ajax.open('POST','https://jsonplaceholder.typicode.com/todos',true);
        var data = {
            feedbackMessage : feedback
        };
        var dataToSend = JSON.stringify(data);
        ajax.send(dataToSend);
        //
    } catch (err) {
        alert("Oops! Something went wrong, please try again");
        console.log("Network err", err);
    }
}


submitBtn.addEventListener('click',onSubmit);















