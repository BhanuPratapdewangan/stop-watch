
var hour = 0;
var minute = 0;
var second = 0;
var mili = 0;
var interval;

var appendHour = document.getElementById('hour');
var appendMinute = document.getElementById('minute');
var appendSecond = document.getElementById('second');
var appendMili = document.querySelector('#mili');

var btnStart = document.querySelector('#start');
var btnStop = document.getElementById('stop');
var btnReset = document.getElementById('reset');



const handleStart = () => {
    clearInterval(interval);
    interval = setInterval(StartTimer, 10);
    console.log(interval);
    console.log('Clicked');
}

const StartTimer = () => {
    mili++;
    if(mili == 100){
        second++;
        mili = 0;
    } 
    if(second == 60){
        minute++;
        second = 0;
    }
    if(minute == 60){
        hour++;
        minute = 0;
        second = 0;
    }

    updateDisplay();
}

const handleStop = () => {
    clearInterval(interval);
}

const handleReset = () => { 
    clearInterval(interval);
    hour = 0;
    minute = 0;
    second = 0;
    mili = 0;

    updateDisplay();
}

const updateDisplay = () => {

    appendHour.innerHTML = hour < 10 ? '0' + hour + ' :' : hour + ' :',
    appendMinute.innerHTML = minute < 10 ? '0' +  minute + ' :' : minute + ' :',
    appendSecond.innerHTML = second < 10 ? '0' +  second + ' :' : second + ' :',
    appendMili.innerHTML = mili < 10 ? '0' + mili : mili
}

btnStart.addEventListener('click', handleStart);
btnStop.addEventListener('click', handleStop);
btnReset.addEventListener('click', handleReset);