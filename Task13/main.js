"use strict"
const btn = document.querySelector("button");
const Name = document.querySelector("#Name");


function handleError(error) {
    console.error('Error fetching age');
}

function handleResponse(response) {
    return response.json(); // Parse the response as plain text
}

// Main function to make the request
function getAge(data) {
   let promise= fetch(`https://api.agify.io?name=${data.name}`) // Request the IP in plain text
        .then(handleResponse)     
        .then(printData)               
        .catch(handleError);

}
function printData(response){
    const data ={};
    
    data.name=Name.value;
    
    alert(`Your name is: ${data.name}, Your age is: ${response.age}`);
}

btn.addEventListener("click",getAge);