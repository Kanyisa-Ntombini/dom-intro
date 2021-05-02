// get a reference to the textbox where the bill type is to be entered
const billTypeInput = document.querySelector(".billTypeText");

//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var totalCall = 0;
var totalSms = 0;
var totalAmount = 0;

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var textBillFunc =  function (billTypeInput) {
    switch (billTypeInput.value) {
        case 'sms':
            totalSms += 0.75;
            totalAmount += 0.75;
            break;
        case 'call':
            totalCall += 2.75;
            totalAmount += 2.75;
        case '':
            totalCall += 0;
            totalAmount += 0;
        default:
            return "Please enter call or sms";
    }

    return {
        sms: totalSms,
        call: totalCall,
        total: totalAmount
    }
};

/* === EVENT LISTENER FUNCTION === */
function textBillEvent () {
    var text = billTypeInput.value;
    var textBill = textBillFunc(text);

    let callTotalOne = document.querySelector(".callTotalOne");
    let smsTotalOne = document.querySelector(".smsTotalOne");
    let totalOne = document.querySelector(".totalOne");

    callTotalOne.innerHTML = textBill.totalCall.toFixed(2);
    smsTotalOne.innerHTML = textBill.totalSms.toFixed(2);
    totalOne.innerHTML = textBill.totalAmount.toFixed(2);

    totalOne.classList.remove("warning");
    totalOne.classList.remove("danger");
    if (textBill.totalAmount > 30 && textBill.totalAmount <= 50) {
        totalOne.classList.add("warning");
    } else if (textBill.totalAmount > 50) {
        totalOne.classList.add("danger");
    }
}

//add an event listener for when the add button is pressed
addToBillBtn.addEventListener("click", textBillEvent);