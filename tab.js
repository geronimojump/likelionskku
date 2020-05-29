const selectClock = document.querySelector('#selectClock');
const selectTimer = document.querySelector('#selectTimer');
const selectStopwatch = document.querySelector('#selectStopwatch');

const w_clock = document.querySelector('#w_clock');
const w_timer = document.querySelector('#w_timer');
const w_stopwatch = document.querySelector('#w_stopwatch');

selectClock.onclick = function(){
    w_clock.style.display = 'block';
    w_timer.style.display = 'none';
    w_stopwatch.style.display = 'none';
}

selectTimer.onclick = function(){
    w_clock.style.display = 'none';
    w_timer.style.display = 'block';
    w_stopwatch.style.display = 'none';
}

selectStopwatch.onclick = function(){
    w_clock.style.display = 'none';
    w_timer.style.display = 'none';
    w_stopwatch.style.display = 'block';
}