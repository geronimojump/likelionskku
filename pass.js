function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
    while (testV < 3) {
    if (!pass1)
    history.go(-1);
    if (pass1.toLowerCase() == "likelion") {
    alert('You Got it Right!');
    window.open('3.html');
    break;
    }
    
    var pass1 =
    prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3)
    history.go(-1);
    return " ";
    }

    function nightDayHandler(self){
        var target = document.querySelector('body');
        var h11 = document.querySelector('h1');
        var h22 = document.querySelector('h2');
        var titlee = document.querySelector('#title');
        if(self.value === 'night'){
          target.style.backgroundColor = 'black';
          target.style.color = 'white';
          h22.style.color='white';
          h11.style.color='yellow';
          self.value = 'day';
          var alist = document.querySelectorAll('a');
          var i = 0;
          while(i < alist.length){
            alist[i].style.color = 'white';
            i = i + 1;
          }
        } else {
          target.style.backgroundColor = 'beige';
          target.style.color = 'black';
          h22.style.color='black';
          self.value = 'night';
          var alist = document.querySelectorAll('a');
          var i = 0;
          while(i < alist.length){
            alist[i].style.color = 'black';
            i = i + 1;
          }
        }
        titlee.style.color='yellow';
        
      }