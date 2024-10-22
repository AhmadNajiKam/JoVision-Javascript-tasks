"use strict"
const btn = document.querySelector("button");
const Age = document.querySelector("#Age");
const Name = document.querySelector("#Name");
function printData(){
    const data ={};
    
    data.name=Name.value;
    data.age=Age.value;
    Age.value='';
    Name.value='';
    data.time=Date();
    alert(`Your name is: ${data.name}, Your age is: ${data.age},time is ${data.time}`);
}

btn.addEventListener("click",printData);