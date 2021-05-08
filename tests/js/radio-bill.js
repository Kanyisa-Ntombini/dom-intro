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
var calcRadioBill = RadioBillFunc();

function calcRadioBillEvent() {
    var inputBillType = document.querySelector(".billItemTypeRadio:checked");
    
    //making calls or sending texts
    if (inputBillType.value === 'call') {
        calcRadioBill.makeCall();
    } else if (inputBillType.value === 'sms') {
        calcRadioBill.sendText();
    }

    //outputs
    var callOut = document.querySelector('.callTotalTwo');
    var smsOut = document.querySelector('.smsTotalTwo');
    var phoneOut = document.querySelector('.totalTwo');

    callOut.innerHTML = calcRadioBill.getTotalCallCost().toFixed(2);
    smsOut.innerHTML = calcRadioBill.getTotalSmsCost().toFixed(2);
    phoneOut.innerHTML = calcRadioBill.getTotalCost().toFixed(2);

    //warning and critical levels
    phoneOut.classList.remove('warning');
    phoneOut.classList.remove('danger');
    if (calcRadioBill.getTotalCost() >= 30 && calcRadioBill.getTotalCost() < 50) {
        phoneOut.classList.add('warning');
    } else if (calcRadioBill.getTotalCost() >= 50) {
        phoneOut.classList.add('danger');
    }
}

radioAddBtn.addEventListener("click", calcRadioBillEvent);