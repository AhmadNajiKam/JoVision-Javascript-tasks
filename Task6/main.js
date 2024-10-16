
const btn1=document.querySelector("#btn1");
function fillNumbers(num1,num2){
    const nums =[];
for(let i=num1;i<=num2;i++)
    nums.push(i);
return nums;
}
function removeDivByThree(){
let nums = fillNumbers(0,100);
for(let i=0;i<=100;i++){
    if((nums[i]%3)==0)nums.splice(i,1);
}
console.log(nums);
}

btn1.addEventListener("click",removeDivByThree);