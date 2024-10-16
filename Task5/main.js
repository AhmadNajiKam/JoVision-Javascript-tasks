const btn = document.querySelector("button");

function fillNumbers(num1,num2){
    const nums =[];
for(let i=num1;i<=num2;i++)
    nums.push(i);
return nums;
}
function calculateArraySum(){
    const nums =  fillNumbers(0,99);
    let sum=0;
    for(let i=0;i<100;i++)if(!(nums[i]%2))sum+=nums[i];
    return sum;
} 
function printArraySum(){
    console.log(calculateArraySum());
}
btn.addEventListener("click",printArraySum);