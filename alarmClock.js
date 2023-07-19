// set alaram ringtone
var alarmRingtone = new Audio('./assets/alarm-clock-short-6402.mp3');
alarmRingtone.loop = true;



// set current Time
var h2 = document.getElementById('current_time');

// set greeting
var h1 = document.getElementById('greetings');

var currentTime = setInterval(function () {
    var now = new Date();

    var hours = (now.getHours());
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "";
    h1.textContent = getGreetings(hours);

}, 1000);

//set formatting
function addZero(time) {
    return (time < 10) ? "0" + time : time;
}

function getGreetings(hours) {
    let greeting = 'Sleep Tight'
    if (hours) {
        if (5 <= hours && hours < 12) {
            greeting = 'Good Morning';
        } else if (12 <= hours && hours < 18) {
            greeting = 'Good Afternoon';
        } else if (18 <= hours && hours < 24) {
            greeting = 'Good Evening';
        }
    }

    return greeting
}

//setting alarm

//set hour
function setHourAlarm() {

    var select = document.getElementById('hour_set');
    var hrs = 24

    for (i = 1; i <= hrs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

    }
}
setHourAlarm();


//set mins
function setMinAlarm() {

    var select = document.getElementById('min_set');
    var min = 59;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
setMinAlarm();

// set Alarm clock ringing logic
function alarmSet() {
    setInterval(function () {

        var date = new Date();

        var hours = (date.getHours());
        var minutes = date.getMinutes();

        var hour = document.getElementById('hour_set');
        var min = document.getElementById('min_set');

        var selectedHour = hour.options[hour.selectedIndex].value;
        var selectedMin = min.options[min.selectedIndex].value;

        document.getElementById('hour_set').disabled = true;
        document.getElementById('min_set').disabled = true;

        if (selectedHour == hours && selectedMin == minutes) {
            alarmRingtone.play();
        }

    }, 1000);

}

// clear the alram 
function alarmClr() {

    document.getElementById('hour_set').disabled = false;
    document.getElementById('min_set').disabled = false;
    document.getElementById('hour_set').value = null;
    document.getElementById('min_set').value = null;
    alarmRingtone.pause();
}