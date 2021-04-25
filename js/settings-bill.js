// get refences to all the settings fields
var callPrice = 0;
var smsPrice = 0;
var warningPrice = 0;
var dangerPrice = 0;

//get a reference to the add button
const addBtnSet = document.querySelector(".addButton");

//get a reference to the 'Update settings' button
const updateSetBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callAmountInput = document.querySelector(".callCostSetting");
var smsAmountInput = document.querySelector(".smsCostSetting");
var warningAmountInput = document.querySelector(".warningLevelSetting");
var dangerAmountInput = document.querySelector(".criticalLevelSetting");

// create a variables that will keep track of all three totals.

var smsTotalSet = 0;
var callTotalSet = 0;
var totalSet = 0;

/* === total output spaces === */
var callSetOutput = document.querySelector(".callTotalSettings");
var smsSetOutput = document.querySelector(".smsTotalSettings");
var totalSetOutput = document.querySelector(".totalSettings");

/* === FUNCTIONS === */
function updateSet() {
    callPrice = 0;
    smsPrice = 0;
    warningPrice = 0;
    dangerPrice = 0;

    callPrice = parseInt(callAmountInput.value);
    smsPrice = parseInt(smsAmountInput.value);
    warningPrice = parseInt(warningAmountInput.value);
    dangerPrice = parseInt(dangerAmountInput.value);

    smsTotalSet = 0;
    callTotalSet = 0;
    totalSet = 0;

    totalSetOutput.classList.remove("warning");
    totalSetOutput.classList.remove("danger");
    callSetOutput.innerHTML = callTotalSet.toFixed(2);
    smsSetOutput.innerHTML = smsTotalSet.toFixed(2);
    totalSetOutput.innerHTML = totalSet.toFixed(2);

    console.log(callPrice);
    console.log(smsPrice);
    console.log(warningPrice);
    console.log(dangerPrice);
}

function settingsCalc () {
    // get a reference to the sms or call radio buttons
    const radioBtn = document.querySelector(".billItemTypeWithSettings:checked");

    if (totalSet <= dangerPrice) {
        if (radioBtn.value === 'sms') {
            smsTotalSet += smsPrice;
            totalSet += smsPrice;
        } else if (radioBtn.value === 'call') {
            callTotalSet += callPrice;
            totalSet += callPrice;
        }

    } else {
        smsTotalSet += 0;
        callTotalSet += 0;
        totalSet += 0;
    }

    callSetOutput.innerHTML = callTotalSet.toFixed(2);
    smsSetOutput.innerHTML = smsTotalSet.toFixed(2);
    totalSetOutput.innerHTML = totalSet.toFixed(2);

    totalSetOutput.classList.remove("warning");
    totalSetOutput.classList.remove("danger");
    if (totalSet > warningPrice && totalSet <= dangerPrice) {
        totalSetOutput.classList.add("warning");
    } else if (totalSet > dangerPrice) {
        totalSetOutput.classList.add("danger");
    }
}

//add an event listener for when the 'Update settings' button is pressed
updateSetBtn.addEventListener("click", updateSet);

//add an event listener for when the add button is pressed
addBtnSet.addEventListener("click", settingsCalc);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.