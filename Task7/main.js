

function printTime(){
    const time = new Date();
    console.log(time.getHours().toString()+":"+time.getMinutes().toString()+":"+time.getSeconds().toString());
}
setInterval(printTime,1000);
