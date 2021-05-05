function SettingsBillFunc() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    //OUTPUTS
    var totalCallCost = 0;
    var totalSmsCost = 0;

    //SETTERS AND GETTERS
    function setCallCost(callCost) {
        theCallCost = callCost;
    }
    
    function getCallCost() {
        return theCallCost;
    }

    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }
    
    function getSmsCost() {
        return theSmsCost;
    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel;
    }

    //USING CODE
    function makeCall() {
        totalCallCost += theCallCost;
    }

    function getTotalCallCost() {
        return totalCallCost;
    }

    function sendSms() {
        totalSmsCost += theSmsCost;
    }

    function getTotalSmsCost() {
        return totalSmsCost;
    }

    function getTotalCost() {
        return totalSmsCost + totalCallCost;
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCallCost,
        sendSms,
        getTotalSmsCost,
        getTotalCost
    }
}
