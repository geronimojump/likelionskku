const startbtn = document.querySelector('#start');
const resetbtn = document.querySelector('#reset');

let timeElaps = 0;

let stopwatchFunction = function(){
timeElaps+=1;
let minute = Math.floor(timeElaps/60);
let second = timeElaps%60;
if(minute<10){minute='0'+minute};
if(second<10){second='0'+second};
let timer = document.querySelector('#w_stopwatch h1');
timer.textContent = minute + ':' + second;
}

let a;
startbtn.onclick = function(){
    let curstate=document.querySelector('#start').textContent;
    if(curstate==='start'){
    document.querySelector('#start').textContent = 'stop';
    a = setInterval(stopwatchFunction,1000);
    } else{
        document.querySelector('#start').textContent='start';
        clearInterval(a);
    }
}

resetbtn.onclick = function(){
    timeElaps=0;
    let timer = document.querySelector('#w_stopwatch h1');
timer.textContent = '00:00';

}

