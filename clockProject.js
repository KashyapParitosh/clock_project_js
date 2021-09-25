// clock section start
const hoursUpdate = document.querySelector("#time-hour");
const minUpdate = document.querySelector("#time-min");
const secUpdate = document.querySelector("#time-sec");
const aMpMUpdate = document.querySelector(".bg-gradient");
const greet = document.getElementById("greetings");
const party = document.getElementById('party');
const mess = document.getElementById('textInHavingLunch');
const lunchimg = document.getElementById('having_lunch');

function concatZero(value) {
    return value < 10 ? '0'.concat(value) : value
}

function time_Update() {
    // takings data from our browser
    const tarik = new Date();
    const sec = tarik.getSeconds();
    const min = tarik.getMinutes();
    const hr = tarik.getHours();

    //    updating data on output 
    hoursUpdate.innerHTML = `${concatZero((hr % 12) || 12)}`
    minUpdate.innerHTML = `${concatZero(min)}`
    secUpdate.innerHTML = `${concatZero(sec)}`
    aMpMUpdate.innerHTML = `${hr > 12 ? 'PM' : 'AM'}`

}

// calling time_Update for clock as in running
setInterval(time_Update, 1000);
// clock section end



function realTimeUpdate() {
    const tarik = new Date();
    const sec = tarik.getSeconds();
    const min = tarik.getMinutes();
    const hr = tarik.getHours();
    if (hr >= 5 && hr < 12) {
        greet.innerHTML = "Good Morning !!";
        mess.innerText = "Wake up"
        lunchimg.style.backgroundImage = "url('./Sunny day-bro.svg')";
    }
    else if (hr >= 12 && hr < 18) {
        greet.innerHTML = "Good AfterNoon !!";
        mess.innerText = 'Lets Have Some Lunch !!'
        lunchimg.style.backgroundImage = "url('Pizza sharing-cuate.svg')";
    }
    else if (hr >= 20 && hr < 24) {
        greet.innerHTML = "Good Night Dear !!";
        mess.innerText = 'Nap Time !!';
        lunchimg.style.backgroundImage = "url('./Sleep analysis-cuate.svg')";
    }
    else {
        greet.innerText = "Have a Good Day";
        mess.innerText = "Chill Karo";
        lunchimg.style.backgroundImage = "url('./chill.svg')";
    }
}

realTimeUpdate();



// party button
// const partybtn = document.querySelector(".party-time");
let isParty = false;
party.addEventListener("click", () => {
    if (isParty) {
        party.innerHTML = "Lets Party";
        realTimeUpdate();
    } else {
        party.innerHTML = "End Party";
        lunchimg.style.backgroundImage = "url('./party2.svg')";
        // lunchimg.style.backgroundPositionY = "3px";
        greet.innerHTML = "Enjoy The Party";
        mess.innerHTML = "Humari Paawri Ohh Raii aae";
    }
    isParty =! isParty; 
});










