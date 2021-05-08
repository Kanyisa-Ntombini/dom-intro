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
var callTot = 0;
var smsTot = 0;
var phoneTot = 0;

function textBillEventFunc() {
    var inputString = document.querySelector('.billTypeText');
    var calcBillObj = TextBillFunc();

    //calculating amounts
	if (inputString.value === 'sms') {
        calcBillObj.sendSms();
    } else if (inputString.value === 'call') {
        calcBillObj.makeCall();
    }

    smsTot += calcBillObj.getTotalSmsCost();
    callTot += calcBillObj.getTotalCallCost();
    phoneTot = smsTot + callTot;

    //the outputs
    var callOut = document.querySelector('.callTotalOne');
    var smsOut = document.querySelector('.smsTotalOne');
    var phoneOut = document.querySelector('.totalOne');

    callOut.innerHTML = callTot.toFixed(2);
    smsOut.innerHTML = smsTot.toFixed(2);
    phoneOut.innerHTML = phoneTot.toFixed(2);

    //warning and critical levels
    phoneOut.classList.remove('warning');
    phoneOut.classList.remove('danger');
    if (phoneTot >= 30 && phoneTot < 50) {
        phoneOut.classList.add('warning');
    } else if (phoneTot >= 50) {
        phoneOut.classList.add('danger');
    }
}

addBtn.addEventListener("click", textBillEventFunc);