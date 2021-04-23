//create varriables for the items that will be changed
const callOutput = document.querySelector(".callTotalTwo");
const smsOutput = document.querySelector(".smsTotalTwo");
const totalOutput = document.querySelector(".totalTwo");

//get a reference to the add button
const addBtnRadio = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill (these values will increase)
var totalRadio = 0;
var totalCallRadio = 0;
var totalSmsRadio = 0;

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function calcRadioBill() {
    // get a reference to the sms or call radio buttons
    const billItemRadioInput = document.querySelector(".billItemTypeRadio:checked");

    if (billItemRadioInput.value === 'sms') {
        totalSmsRadio += 0.75;
        totalRadio += 0.75;
    } else if (billItemRadioInput.value === 'call') {
        totalCallRadio += 2.75;
        totalRadio += 2.75;
    }

    callOutput.innerHTML = totalCallRadio.toFixed(2);
    smsOutput.innerHTML = totalSmsRadio.toFixed(2);
    totalOutput.innerHTML = totalRadio.toFixed(2);

    totalOutput.classList.remove("warning");
    totalOutput.classList.remove("danger");
    if (totalRadio>30 && totalRadio<=50) {
        totalOutput.classList.add("warning");
    } else if (totalRadio>50) {
        totalOutput.classList.add("danger");
    }
}

//add an event listener for when the add button is pressed
addBtnRadio.addEventListener("click", calcRadioBill);