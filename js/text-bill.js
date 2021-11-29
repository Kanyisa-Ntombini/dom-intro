/* === FACTORY FUNCTION === */
function TextBillFunc () {
    let totalCall = 0;
    let totalSms = 0;

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

/* === THE DOM CODE === */

const addBtn = document.querySelector('.addToBillBtn');

function textBillEventFunc() {
    const calcBillObj = TextBillFunc();
    const inputString = document.querySelector('.billTypeText');

    //calculating amounts
	if (inputString.value === 'sms') {
        calcBillObj.sendSms();
    } else if (inputString.value === 'call') {
        calcBillObj.makeCall();
    }

    //the outputs
    const callOut = document.querySelector('.callTotalOne');
    const smsOut = document.querySelector('.smsTotalOne');
    const phoneOut = document.querySelector('.totalOne');

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