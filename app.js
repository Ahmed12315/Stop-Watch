var minute_html= document.getElementById("minute");
var second_html = document.getElementById("second");
var milisecond_html = document.getElementById("milisecond");

var reset = document.getElementById("reset");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

var watchinterval; 
var minute = 0;
var seconds = 0;
var miliseconds = 0;


function Start(){
watchinterval = setInterval(function() {
        miliseconds++
        start.style.display = "none"
        stop.style.display = "block"
        if(miliseconds >= 99){
            seconds++
            miliseconds = 0
        }
        if(seconds >=59){
            minute++
            seconds = 0
        }
    
        milisecond_html.innerText = miliseconds
        second_html.innerText = seconds < 10 ? "0" + seconds : seconds
        minute_html.innerText = minute < 10 ? "0" + minute : minute
    }, 10);
}

function Stop() {
    clearInterval(watchinterval)
    start.style.display = "block"
    stop.style.display = "none"
}

function Reset(params) {
    clearInterval(watchinterval)
    minute = 0;
    seconds = 0;
    miliseconds = 0;
    milisecond_html.innerText = 0;
    second_html.innerText = 0;
    minute_html.innerText = 0;

    start.style.display = "block"
    stop.style.display = "none"
}