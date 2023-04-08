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
