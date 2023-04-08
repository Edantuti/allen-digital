let hoursMain = (new Date()).getHours();
    if (hoursMain>=13) {
        let hourMain = hoursMain-12;
        let meridianMain = 'PM';
        let minsMain = (new Date()).getMinutes();
        if (minsMain<=9) {
            let minMain = `0${minsMain}`;
            document.getElementById('timex').innerHTML = `${hourMain}:${minMain} ${meridianMain}`;
        } else {
            let minMain = minsMain;
            document.getElementById('timex').innerHTML = `${hourMain}:${minMain} ${meridianMain}`;
        }
    } else {
        let hourMain = hoursMain;
        let meridianMain = 'AM';
        let minsMain = (new Date()).getMinutes();
        if (minsMain<=9) {
            let minMain = `0${minsMain}`;
            document.getElementById('timex').innerHTML = `${hourMain}:${minMain} ${meridianMain}`;
        } else {
            let minMain = minsMain;
            document.getElementById('timex').innerHTML = `${hourMain}:${minMain} ${meridianMain}`;
        }
    }

setInterval(() => {
    let hours = (new Date()).getHours();
    if (hours>=13) {
        let hour = hours-12;
        let meridian = 'PM';
        let mins = (new Date()).getMinutes();
        if (mins<=9) {
            let min = `0${mins}`;
            document.getElementById('timex').innerHTML = `${hour}:${min} ${meridian}`;
        } else {
            let min = mins;
            document.getElementById('timex').innerHTML = `${hour}:${min} ${meridian}`;
        }
    } else {
        let hour = hours;
        let meridian = 'AM';
        let mins = (new Date()).getMinutes();
        if (mins<=9) {
            let min = `0${mins}`;
            document.getElementById('timex').innerHTML = `${hour}:${min} ${meridian}`;
        } else {
            let min = mins;
            document.getElementById('timex').innerHTML = `${hour}:${min} ${meridian}`;
        }
    }
}, 1000);

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
splitDate = (date.split("-"))
const monthList = ["ignoreMe", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.getElementById("date").innerHTML = splitDate[2] + " " + monthList[(parseInt(splitDate[1]))] + " " + splitDate[0];