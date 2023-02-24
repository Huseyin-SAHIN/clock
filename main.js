function GetTime() {
    let now = new Date;
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (year < 10) {
        year = "0" + year;
    }

    document.getElementById("clock-hour").innerText = hour;
    document.getElementById("clock-minute").innerText = minute;
    document.getElementById("clock-seconds").innerText = seconds;


    document.getElementById("date").innerText = day + " / " + month + " / " + year
}

GetTime();
setInterval(function () { GetTime(); }, 1000);
