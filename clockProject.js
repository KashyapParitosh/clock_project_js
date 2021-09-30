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


const tarik = new Date();
const sec = tarik.getSeconds();
const min = tarik.getMinutes();
const hr = tarik.getHours();


// default function



// party function
let isParty = false;
party.addEventListener("click", () => {
    if (isParty) {
        party.innerHTML = "Lets Party";
        greet.innerText = "";
        mess.innerText = "Chill Karo";
        lunchimg.style.backgroundImage = "url('./chill.svg')";
        greet.style.display = "none";
    } else {
        party.innerHTML = "End Party";
        lunchimg.style.backgroundImage = "url('./party2.svg')";
        greet.innerHTML = "Enjoy The Party";
        mess.innerHTML = "Humari Paawri Ohh Rai aae";
        greet.style.display = "block";
    }
    isParty = !isParty;
});




// select time function
document.querySelector("#wake-up-timespan").addEventListener("change", function () {
    console.log(hr);
    console.log()
    if (this.value == hr) {
        wakeUp();
    } else {
        chillkaro();
    }
});

document.querySelector("#lunch-timespan").addEventListener("change", function () {
    if (this.value == hr) {
        haveLunch();
    } else {
        chillkaro();
    }
});

document.querySelector("#napTime").addEventListener("change", function () {
    if (this.value == hr) {
        sleep();
    } else {
        chillkaro();
    }
});


function wakeUp() {
    greet.innerHTML = "Good Morning !!";
    mess.innerText = "Wake up"
    lunchimg.style.backgroundImage = "url('./Sunny day-bro.svg')";
    greet.style.display = "block";
}
function haveLunch() {
    greet.innerHTML = "Good AfterNoon !!";
    mess.innerText = 'Lets Have Some Lunch !!'
    lunchimg.style.backgroundImage = "url('Pizza sharing-cuate.svg')";
    greet.style.display = "block";
}
function sleep() {
    greet.innerHTML = "Good Night Dear !!";
    mess.innerText = 'Nap Time !!';
    lunchimg.style.backgroundImage = "url('./Sleep analysis-cuate.svg')";
    greet.style.display = "block";
}

function chillkaro() {
    mess.innerText = "Chill Karo";
    lunchimg.style.backgroundImage = "url('./chill.svg')";
    greet.style.display = "none";
};
chillkaro();






// kachra below
// function realTimeUpdate() {
//     if (hr >= 5 && hr < 12) {
//         wakeUp();
//     }
//     else if (hr >= 12 && hr < 18) {
//         haveLunch();
//     }
//     else if (hr >= 20 && hr < 24) {
//         sleep();
//     }
//     else {
//         greet.innerText = "Have a Good Day";
//         mess.innerText = "Chill Karo";
//         lunchimg.style.backgroundImage = "url('./chill.svg')";
//     }
// }

// realTimeUpdate();




// let ids = document.querySelector("#AM11").value;
// console.log(ids);
// console.log(hr);
// console.log(time_Update);


// if(this.value === "select"){
    //     console.log(this.value);
    //     realTimeUpdate();
    // } else {
        //     wakeUp();
        // }