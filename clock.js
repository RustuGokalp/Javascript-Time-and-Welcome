let userName = document.querySelector(".user-name");
let clock = document.querySelector(".clock");

let user = prompt("Adınız Nedir?");

if (user.length >= 1 && user.length <= 15) {
    userName.innerHTML = `Merhaba, <strong> ${user}! </strong> Hoş geldin!` 
}
else {
    userName.innerHTML = `Merhaba, <strong> Guest! </strong> Hoş geldin!` 
}

function startTime(){
    let today = new Date();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getDay();

    switch (day){
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
    };
    
    function checkTime(i){
        if (i < 10) {i = '0' + i};
        return i;
    };

    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);

    clock.innerHTML = `${hour}:${minute}:${second} ${day}`;
    
    let t = setTimeout(startTime,500);

}

