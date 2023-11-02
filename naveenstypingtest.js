let timing = document.getElementById("timer");
let submit = document.getElementById("submitBtn");
let reset = document.getElementById("resetBtn");
let display = document.getElementById("quoteDisplay");
let text = document.getElementById("quoteInput");
let result = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");

let intervalId;

function timestart() {
    let counter = 0
    intervalId = setInterval(function() {
        counter = counter + 1;
        timing.textContent = counter + " seconds";
    }, 1000)
}

timestart()


function cleartimer() {
    clearInterval(intervalId);
}

function getquate() {

    let options = {
        method: "get",
    }

    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            display.textContent = data.content;
        })
}

getquate()

reset.addEventListener("click", function() {
    getquate();
    clearInterval(intervalId);
    timestart()

})


submit.addEventListener("click", function() {
    spinnerEl.classList.remove("d-none");
    if (display.textContent === text) {
        clearInterval(intervalId);
        spinnerEl.classList.add("d-none");
        result.textContent = "you typed in " + timing.textContent;
    } else {
        spinnerEl.classList.add("d-none");
        result.textContent = "You typed incorect sentence";
    }
})