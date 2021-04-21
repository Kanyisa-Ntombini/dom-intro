// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings:checked");

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

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener("click", somefunc);

//add an event listener for when the add button is pressed
addBtn.addEventListener("click", anotherfunc);