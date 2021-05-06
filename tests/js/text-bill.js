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