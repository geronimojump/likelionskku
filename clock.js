let clockFunction = function(){
let datenow = new Date();
let hour = datenow.getHours();
let minute = datenow.getMinutes();
let second = datenow.getSeconds();

if (minute<10){minute='0'+minute};
if (hour<10){hour='0'+hour};
if (second<10){second='0'+second};

let time = hour + ':' + minute + ':' + second;

let timeshown = document.querySelector('#w_clock h1');
timeshown.textContent = time;
}
setInterval(clockFunction, 1000);

