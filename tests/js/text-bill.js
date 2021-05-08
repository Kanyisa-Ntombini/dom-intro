function TextBillFunc () {
    var totalCall = 0;
    var totalSms = 0;

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

    function getTotalClassName() {
        if (getTotalCost() >= 30 && getTotalCost() < 50) {
            return 'warning';
        }

        else if (getTotalCost() >= 50) {
            return 'danger';
        }
    }

    return {
        makeCall,
        sendSms,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        getTotalClassName
    }
}

const addBtn = document.querySelector('.addToBillBtn');
var calcBillObj = TextBillFunc();

function textBillEventFunc() {
    var inputString = document.querySelector('.billTypeText');

    //calculating amounts
	if (inputString.value === 'sms') {
        calcBillObj.sendSms();
    } else if (inputString.value === 'call') {
        calcBillObj.makeCall();
    }

    //the outputs
    var callOut = document.querySelector('.callTotalOne');
    var smsOut = document.querySelector('.smsTotalOne');
    var phoneOut = document.querySelector('.totalOne');

    callOut.innerHTML = calcBillObj.getTotalCallCost().toFixed(2);
    smsOut.innerHTML = calcBillObj.getTotalSmsCost().toFixed(2);
    phoneOut.innerHTML = calcBillObj.getTotalCost().toFixed(2);

    //warning and critical levels
    phoneOut.classList.remove('warning');
    phoneOut.classList.remove('danger');
    if (calcBillObj.getTotalCost() >= 30 && calcBillObj.getTotalCost() < 50) {
        phoneOut.classList.add('warning');
    } else if (calcBillObj.getTotalCost() >= 50) {
        phoneOut.classList.add('danger');
    }
}

addBtn.addEventListener("click", textBillEventFunc);