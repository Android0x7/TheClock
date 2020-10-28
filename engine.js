var hours = 7;
var minutes = 12;
var seconds = 0;
var currentTheme = 2;
var themes = ['Standard','CuteDigital','Blocky'];

function fnChangeClock(){

    //alert('there you go !');
    currentTheme++;
    if(currentTheme >= themes.length) currentTheme = 0;

    $("#mainCss").attr('href','Clock/'+ themes[currentTheme] +'/main.css');
    $("#hoursCss").attr('href','Clock/'+ themes[currentTheme] +'/hours.css');
    $("#minutesCss").attr('href','Clock/'+ themes[currentTheme] +'/minutes.css');
    $("#secondsCss").attr('href','Clock/'+ themes[currentTheme] +'/seconds.css');

}

function init() {
 //console.log('engine init');
 //alert();
 //$('*[class^="layer"]').hide();

 setInterval(showTime, 1000);

}


function showTime() {
    var now = new Date();    
    var hour = now.getHours();

    hour = hour % 12;
    hour = hour ? hour : 12;

    //hour = hour + 1;

    var minute = now.getMinutes();
    var second = now.getSeconds();

    setTimeout(() => {
        showSecondHandAt(second);
        seconds = second;
    }, 0); 


    //If the minute changes, change the hands 
    if(minute != minutes){
        console.log('changed');

        setTimeout(() => {
            showMinutesHandAt(minute);
            minutes = minute;
        }, 0); 


        setTimeout(() => {
            showHoursHandAt(hour,minute);
        }, 0);

       
    }

}

function showSecondHandAt(second) {
    
    $('.clock').removeClass('seconds'+seconds).addClass('seconds'+second);

    
}

function showMinutesHandAt(minute) {
    
    $('.clock').removeClass('minutes'+minutes).addClass('minutes'+minute);

    minutes = minute;
}


function showHoursHandAt(hour,minute) {

    var hourPart = Math.floor(minute / 12);

    $('.clock').removeClass(hours);

    hours = 'hours'+hour+'-'+hourPart;
    
    $('.clock').addClass(hours);

    console.log(hours);

}


$(() => {
    init();
});
