function clock(){

let secDots =document.getElementById('secDots');
let minDots =document.getElementById('minDots');
let hrDots  =document.getElementById('hrDots');

var date = new Date();
var hours = date.getHours() % 12 
var amPm = date.getHours() >= 12 ? 'PM' : 'AM';
hours = hours === 0 ? 12 : hours;
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var secondsDots = '';
for(var i = 1; i <61; i++){
  var rotation = i * 6;
   if (i === seconds){
    secondsDots += '<div class="dot active"style="transform: rotate('+rotation+'deg)"></div>';
   }
   else{
    secondsDots += '<div class="dot"style="transform: rotate('+rotation+'deg)"></div>';
   
   }
}


var hoursDots = '';
for(var i = 1; i <13; i++){
  var rotation = i * 30;
   if (i === hours){
    hoursDots += '<div class="dot active"style="transform: rotate('+rotation+'deg)"></div>';
   }
   else{
    hoursDots += '<div class="dot"style="transform: rotate('+rotation+'deg)"></div>';
   
   }
}

var minutDots = '';
for(var i = 1; i <61; i++){
  var rotation = i * 6;
   if (i === minutes){
    minutDots  += '<div class="dot active"style="transform: rotate('+rotation+'deg)"></div>';
   }
   else{
    minutDots += '<div class="dot"style="transform: rotate('+rotation+'deg)"></div>';
   
   }
}


secDots.innerHTML = secondsDots + '<b>' + amPm + '</b>' + '<h2>' + zero(seconds) +'<br><span>Segundos</span></h2>';
minDots.innerHTML = minutDots + '<h2>'+ zero(minutes) +'<br><span>Minutos</span></h2>';
hrDots .innerHTML = hoursDots+'<h2>' + zero(hours) +'<br><span>Horas</span></h2>';

}

function zero(number){
  if (number < 10){
    return'0' + number;
  }
  return number;
}

setInterval(clock,);


