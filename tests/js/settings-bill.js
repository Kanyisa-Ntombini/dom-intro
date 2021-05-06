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
        if (!criticalLevelReached()) {
            totalCallCost += theCallCost;
        }
    }

    function getTotalCallCost() {
        return totalCallCost;
    }

    function sendSms() {
        if (!criticalLevelReached()) {
            totalSmsCost += theSmsCost;
        }
    }

    function getTotalSmsCost() {
        return totalSmsCost;
    }

    function getTotalCost() {
        return totalSmsCost + totalCallCost;
    }

    function criticalLevelReached () {
        return getTotalCost() >= getCriticalLevel();
    }

    function getClassTotal() {
        if (criticalLevelReached()) {
            return 'danger';
        }

        if (getTotalCost() > getWarningLevel()) {
            return 'warning';
        }
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
        getTotalCost,
        getClassTotal,
        criticalLevelReached
    }
}
