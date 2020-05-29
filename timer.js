const starttbtn = document.querySelector('#startt');
const resettbtn = document.querySelector('#resett');
let timeshow = document.querySelector('#w_timer h1');
let minute = 0;
let second = 0;
let timesum =0;


let b ;
starttbtn.onclick = function(){
    minute = Number(document.getElementById('m_timer').value);
    second = Number(document.getElementById('s_timer').value);
    timesum = minute*60 + second;
    let curstatee = document.querySelector('#startt').textContent;
    if (curstatee==='start'){
    document.querySelector('#startt').textContent = 'stop';
    b = setInterval(timer,1000);
    } else{
        document.querySelector('#startt').textContent = 'start';
        clearInterval(b);
    }
}

let timer = function(){
    
    let newmin = Math.floor(timesum/60);
    let newsec = timesum%60;
    if(newmin<10){newmin='0' + newmin}
    if(newsec<10){newsec = '0'+ newsec}
    timeshow.textContent = newmin +':' + newsec;
    if(timesum>0){
    timesum-=1;
}

}



resettbtn.onclick = function(){
    timesum=0;
    let timerr = document.querySelector('#w_timer h1');
timerr.textContent = '00:00';

}