// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
const addBtn = document.querySelector(".addButton");

//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var settings;

// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var totalAmount = 0;

///references to the totals
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings")

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function billCalc () {
    // get a reference to the sms or call radio buttons
    const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings:checked");
    
    if (billItemTypeWithSettings === "sms") {
        smsTotal += smsCostSetting.value;
        totalAmount += smsCostSetting.value;
    } else if (billItemTypeWithSettings === "call") {
        callTotal += callCostSetting.value;
        totalAmount += callCostSetting.value;
    } else {
        smsTotal += 0;
        callTotal += 0;
        totalAmount += 0;
    }

    callTotalSettings.innerHTML = callTotal.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal.toFixed(2);
    totalSettings.innerHTML = totalAmount.toFixed(2);

    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");
    if (totalAmount>warningLevelSetting && totalAmount<=warningLevelSetting) {
        totalSettings.classList.add("warning");
    } else if (totalAmount > criticalLevelSetting) {
        totalSettings.classList.add("danger");
    }
}

//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener("click", billCalc);

//add an event listener for when the add button is pressed
addBtn.addEventListener("click", billCalc);