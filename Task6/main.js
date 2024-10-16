
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
const btn5=document.querySelector("#btn5");

function fillNumbers(num1,num2){
    const nums =[];
for(let i=num1;i<=num2;i++)
    nums.push(i);
return nums;
}
function removeDivByThree(){
let nums = fillNumbers(0,99);
for(let i=0;i<100;i++){
    if((nums[i]%3)==0)nums.splice(i,1);
}
console.log(nums);
}
function addNumsToArray(){
let nums = fillNumbers(0,99);
for (let i=100;i<150;i++)nums.push(i);
console.log(nums);
}
function addThreeToArrayElements(){
    let nums= fillNumbers(0,99);
    for(let i=0;i<100;i++)nums[i]+=3;
    console.log(nums);
}
btn1.addEventListener("click",removeDivByThree);
btn2.addEventListener("click",addNumsToArray);
btn3.addEventListener("click",addThreeToArrayElements);