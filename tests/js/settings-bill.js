function SettingsBillFunc() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    //OUTPUTS
    var totalCallCost = 0;
    var totalSmsCost = 0;

    //SETTERS 
    function setCallCost(callCost) {
        theCallCost = parseFloat(callCost);
    }

    function setSmsCost(smsCost) {
        theSmsCost = parseFloat(smsCost);
    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    //GETTERS
    function getSmsCost() {
        return theSmsCost;
    }

    function getCallCost() {
        return theCallCost;
    }

    function getWarningLevel() {
        return theWarningLevel;
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

    function sendSms() {
        if (!criticalLevelReached()) {
            totalSmsCost += theSmsCost;
        }
    }

    //GET TOTAL COSTS
    function getTotalCallCost() {
        return totalCallCost;
    }

    function getTotalSmsCost() {
        return totalSmsCost;
    }

    function getTotalCost() {
        return totalSmsCost + totalCallCost;
    }

    //WARNING AND CRITICAL LEVEL
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

var settingsObj = SettingsBillFunc();
const updateSettingsBtn = document.querySelector('.updateSettings');
const addButtonSettings = document.querySelector('.addButton');
//outputs
var smsOut = document.querySelector('.smsTotalSettings');
var callOut = document.querySelector('.callTotalSettings');
var phoneOut = document.querySelector('.totalSettings');

function updateSettingsEvent () {
    //settings 
    var callCostSetting = document.querySelector('.callCostSetting').value;
    var smsCostSetting = document.querySelector('.smsCostSetting').value;
    var warningLevelSetting = document.querySelector('.warningLevelSetting').value;
    var criticalLevelSetting = document.querySelector('.criticalLevelSetting').value;

    //make objects and initialise
    settingsObj.setCallCost(callCostSetting);
    settingsObj.setSmsCost(smsCostSetting);
    settingsObj.setWarningLevel(warningLevelSetting);
    settingsObj.setCriticalLevel(criticalLevelSetting);

    //warning and critical levels
    phoneOut.classList.remove('warning');
    phoneOut.classList.remove('danger');
}

function SettingsCalcEvent() {
    var billTypeSettings = document.querySelector(".billItemTypeWithSettings:checked").value;
    
    if (billTypeSettings === 'call') {
        settingsObj.makeCall();
    } else if (billTypeSettings === 'sms') {
        settingsObj.sendSms();
    }

    smsOut.innerHTML = settingsObj.getTotalSmsCost().toFixed(2);
    callOut.innerHTML = settingsObj.getTotalCallCost().toFixed(2);
    phoneOut.innerHTML = settingsObj.getTotalCost().toFixed(2);

    //warning and critical levels
    if (settingsObj.getClassTotal() === 'warning') {
        phoneOut.classList.add('warning');
    } else if (settingsObj.getClassTotal() === 'danger') {
        phoneOut.classList.add('danger');
    }
}

updateSettingsBtn.addEventListener('click', updateSettingsEvent);
addButtonSettings.addEventListener('click', SettingsCalcEvent);