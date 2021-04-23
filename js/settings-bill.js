//get a reference to the add button
const addBtnSet = document.querySelector(".addButton");

//get a reference to the 'Update settings' button
const updateSetBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callPrice = 0;
var smsPrice = 0;
var warningPrice = 0;
var dangerPrice = 0;

// create a variables that will keep track of all three totals. (these will increase)
var callTotalSet = 0;
var smsTotalSet = 0;
var totalSet = 0;

///references to the totals (what will be changed)
var callTotalSetOut = document.querySelector(".callTotalSettings");
var smsTotalSetOut = document.querySelector(".smsTotalSettings");
var totalSetOut = document.querySelector(".totalSettings")

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function billSettings () {
    // get refences to all the settings fields (what will be changed)
    const callCostSetInput = document.querySelector(".callCostSetting");
    const smsCostSetInput = document.querySelector(".smsCostSetting");
    const warningLevelSetInput = document.querySelector(".warningLevelSetting");
    const dangerLevelSetInput = document.querySelector(".criticalLevelSetting");

    callPrice = parseInt(callCostSetInput.value);
    smsPrice = parseInt(smsCostSetInput.value);
    warningPrice = parseInt(warningLevelSetInput.value);
    dangerPrice = parseInt(dangerLevelSetInput.value);
}

function calcSettingBill() {
    const billTypeRadioSet = document.querySelector(".billItemTypeWithSettings:checked")
   
    if (billTypeRadioSet.value === 'sms') {
        smsTotalSet += smsPrice;
        totalSet += smsPrice;
    } else if (billTypeRadioSet.value === 'call') {
        callTotalSet += callPrice;
        totalSet += callPrice;
    }

    callTotalSetOut.innerHTML = callTotalSet.toFixed(2);
    smsTotalSetOut.innerHTML = smsTotalSet.toFixed(2);
    totalSetOut.innerHTML = totalSet.toFixed(2);

    //callTotalSetOut.classList.remove("warning");
    //callTotalSetOut.classList.remove("danger");
    if (totalSet>warningPrice && totalSet<=dangerPrice) {
        totalSetOut.classList.add("warning");
    } else if (totalSet>dangerPrice) {
        totalSetOut.classList.add("danger");
    }
}
//add an event listener for when the 'Update settings' button is pressed
updateSetBtn.addEventListener("click", billSettings);

//add an event listener for when the add button is pressed
addBtnSet.addEventListener("click", calcSettingBill);