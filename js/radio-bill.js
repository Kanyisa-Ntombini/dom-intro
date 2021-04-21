//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
var totalAmount = 0;
var totalCall = 0;
var totalSms = 0;
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo");

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function radioBill () {
    
    // get a reference to the sms or call radio buttons
    const billItemTypeRadio = document.querySelector(".billItemTypeRadio:checked");

    if (billItemTypeRadio.value === "sms") {
        totalSms += 0.75;
        totalAmount += 0.75;
    } else if (billItemTypeRadio.value === "call") {
        totalCall += 2.75;
        totalAmount += 2.75;
    }

    callTotalTwo.innerHTML = totalCall.toFixed(2);
    smsTotalTwo.innerHTML = totalSms.toFixed(2);
    totalTwo.innerHTML = totalAmount.toFixed(2);

    totalTwo.classList.remove("warning");
    totalTwo.classList.remove("danger");
    if (totalAmount>30 && totalAmount<=50) {
        totalTwo.classList.add("warning");
    } else if (totalAmount > 50) {
        totalTwo.classList.add("danger");
    }
}

//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", radioBill);