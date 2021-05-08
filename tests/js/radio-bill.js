function RadioBillFunc () {
    var totalCallRadio = 0;
    var totalSmsRadio = 0;

    function makeCall() {
        totalCallRadio += 2.75;
    }

    function sendText() {
        totalSmsRadio += 0.75
    }

    function getTotalCallCost() {
        return totalCallRadio;
    }

    function getTotalSmsCost() {
        return totalSmsRadio;
    }

    function getTotalCost() {
        return totalCallRadio + totalSmsRadio;
    }

    function getClassName() {
        if (getTotalCost() >= 6 && getTotalCost() < 12) {
            return 'warning';
        }
        
        else if (getTotalCost() >= 12) {
            return 'danger';
        }
        
    }

    return {
        makeCall,
        sendText,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        getClassName
    }
}

var radioAddBtn = document.querySelector('.radioBillAddBtn');
var smsTot = 0;
var callTot = 0;
var phoneTot = 0;

function calcRadioBillEvent() {
    var inputBillType = document.querySelector(".billItemTypeRadio:checked");
    var calcRadioBill = RadioBillFunc();

    //making calls or sending texts
    if (inputBillType.value === 'call') {
        calcRadioBill.makeCall();
    } else if (inputBillType.value === 'sms') {
        calcRadioBill.sendText();
    }
    
    //calcilating total amounts
    smsTot += calcRadioBill.getTotalSmsCost();
    callTot += calcRadioBill.getTotalCallCost();
    phoneTot += calcRadioBill.getTotalCost();

    //outputs
    var callOut = document.querySelector('.callTotalTwo');
    var smsOut = document.querySelector('.smsTotalTwo');
    var phoneOut = document.querySelector('.totalTwo');

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

radioAddBtn.addEventListener("click", calcRadioBillEvent);