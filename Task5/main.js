const btn = document.querySelector("button");
const nums =[];
function fillNumbers(num1,num2){
for(let i=num1;i<=num2;i++)
    nums.push(i);
}
function calculateArraySum(){
    fillNumbers(0,100);
    let sum=0;
    for(let i=0;i<=100;i++)if(!(nums[i]%2))sum+=nums[i];
    return sum;
} 
function printArraySum(){
    console.log(calculateArraySum());
}
btn.addEventListener("click",printArraySum);