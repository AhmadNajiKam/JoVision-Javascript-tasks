
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
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

}
btn1.addEventListener("click",removeDivByThree);