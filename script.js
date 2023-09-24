const clock = document.getElementById('clock');
const status_msg = document.getElementById('status_msg');
const ringtone = document.getElementById('ringtone');
let alarmTime, alarminterval, time;

const frunt = document.getElementById("frunt");
frunt.style.fontSize = "3em";
frunt.style.textShadow = "5px 5px 10px red";
frunt.style.color = "hotpink";
frunt.style.backgroundColor = "none";
status_msg.style.color = "white";
status_msg.style.fontSize = "2em";
status_msg.style.fontWeight = "bold";
clock.style.fontSize = "100px";
clock.style.color = "green";
clock.style.textShadow = "1px 0px 5px aqua";
clock.style.fontWeight = "bold";
clock.style.backgroundColor = "silver";
clock.style.width = "600px";
clock.style.borderRadius = "20px";
clock.style.boxShadow = "0px 10px 50px red inset,40px 50px 0px orange inset,60px 70px 0px yellow inset,100px 91px 0px orange inset,130px 150px 0px silver inset,0px 0px 10px green ,0px 0px 20px yellow ,0px 0px 30px orange ";
const butt = document.getElementById("butt");
butt.style.color = "white";
butt.style.fontSize = "20px";
butt.style.fontWeight = "bold";
butt.style.border = "none";
butt.style.borderRadius = "20px";
const btn = document.getElementById("btn");
btn.style.color = "white";
btn.style.fontSize = "20px";
btn.style.fontWeight = "bold";
btn.style.border = "none";
btn.style.borderRadius = "20px";
const lab = document.getElementById("lab");
lab.style.fontSize = "2em";
lab.style.fontWeight = "bold";
lab.style.color = "aqua";
const Time = document.getElementById('alarm_time');
Time.style.fontSize = "2em";
Time.style.fontWeight = "bold";


function displayTime() {
    const now = new Date();
    const hh = now.getHours().toString().padStart(2, '0');
    const mm = now.getMinutes().toString().padStart(2, '0');
    const ss = now.getSeconds().toString().padStart(2, '0');

    time = `${hh}:${mm}`;
    clock.innerHTML = `${hh}:${mm}:${ss}`;
}
setInterval("displayTime()", 1000);

function checkAlarm() {
    if (time === alarmTime) {
        ringtone.play();
        status_msg.innerHTML = "Alarm Activate & Play!";
        clearInterval(alarminterval);
    }
}

function activateAlarm() {
    alarmTime = document.getElementById('alarm_time').value;
    status_msg.innerHTML = "Alarm is set for " + alarmTime + " And activated";
    alarminterval = setInterval("checkAlarm()", 1000);
}

function stopAlarm() {
    ringtone.pause();
    status_msg.innerHTML = "Alarm is Aborted by user!!";
}