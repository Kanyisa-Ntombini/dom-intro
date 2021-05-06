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


