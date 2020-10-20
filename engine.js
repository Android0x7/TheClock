var hours = 7;
var minutes = 15;
var seconds = 0;

//var clock = document.getElementById('clock');

function init() {
 //console.log('engine init');
 //alert();
 //$('*[class^="layer"]').hide();

 setInterval(showTime, 1000);

}


function showTime() {
    var now = new Date();
    var hour = now.getHours();
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

    $('.clock').removeClass('hours'+hours);

    hours = 'hours'+hour+'-'+hourPart;
    
    $('.clock').addClass(hours);

    console.log(hours);

}


$(() => {
    init();
});