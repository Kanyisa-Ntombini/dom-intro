function TextBillFunc () {
    var totalCall = 0;
    var totalSms = 0;
    var totalAmount = 0;
    
    function makeCall() {
        totalCall += 2.75;
    }

    function sendSms() {
        totalSms += 0.75;
    }

    function getTotalCallCost() {
        return totalCall;
    }

    function getTotalSmsCost() {
        return totalSms;
    }

    function getTotalCost() {
        return totalCall + totalSms;
    }

    return {
        makeCall,
        sendSms,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost
    }
}


//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var textBillFunc =  function (text) {
    //create a variable that will keep track of the total bill
    var totalCall = 0;
    var totalSms = 0;
    var totalAmount = 0;

    switch (text) {
        case 'sms':
            totalSms += 0.75;
            totalAmount += 0.75;
            break;
        case 'call':
            totalCall += 2.75;
            totalAmount += 2.75;
            break;
        case '':
            totalCall += 0;
            totalAmount += 0;
            break;
        default:
            return "Please enter call or sms";
    }

    return {
        sms: totalSms,
        call: totalCall,
        total: totalAmount
    }
};

// get a reference to the textbox where the bill type is to be entered
const billTypeInput = document.querySelector(".billTypeText");

/* === EVENT LISTENER FUNCTION === */
function textBillEvent () {
    //CREATE OBJECTS
    var text = billTypeInput.value;
    var textBillObj = textBillFunc(text);

    //THE OUTPUTS
    let callTotalOne = document.querySelector(".callTotalOne");
    let smsTotalOne = document.querySelector(".smsTotalOne");
    let totalOne = document.querySelector(".totalOne");

    callTotalOne.innerHTML = textBillObj.call.toFixed(2);
    smsTotalOne.innerHTML = textBillObj.sms.toFixed(2);
    totalOne.innerHTML = textBillObj.total.toFixed(2);

    /*totalOne.classList.remove("warning");
    totalOne.classList.remove("danger");
    if (textBillObj.total > 30 && textBillObj.total <= 50) {
        totalOne.classList.add("warning");
    } else if (textBillObj.total > 50) {
        totalOne.classList.add("danger");
    }*/
}

//add an event listener for when the add button is pressed
addToBillBtn.addEventListener("click", textBillEvent);