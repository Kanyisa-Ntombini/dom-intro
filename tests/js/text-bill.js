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
        if (getTotalCost() >= 6 && getTotalCost() < 12) {
            return 'warning';
        }

        else if (getTotalCost() >= 12) {
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

function textBillEventFunc() {
    var inputString = document.querySelector('.billTypeText');
    console.log(inputString.value);

    //calculating amounts
	var calcBillObj = TextBillFunc();
	if (inputString.value === 'call') {
        calcBillObj.makeCall();
    } else if (inputString.value === 'sms') {
        calcBillObj.sendSms();
    }

   //the totals output
	var totalOutput = document.querySelector('.totalOne');
    var totalCallOutput = document.querySelector('.callTotalOne');
    var totalSmsOutput = document.querySelector('.smsTotalOne');

	totalOutput.innerHTML = calcBillObj.getTotalCost();
    totalCallOutput.innerHTML = calcBillObj.getTotalCallCost();
    totalSmsOutput.innerHTML = calcBillObj.getTotalSmsCost();
}

addBtn.addEventListener("click", textBillEventFunc);