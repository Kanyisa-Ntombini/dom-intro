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

const updateSettingsBtn = document.querySelector('.updateSettings');
const addButtonSettings = document.querySelector('.addButton');
//settings
var callSet = 0;
var smsSet = 0;
var warningSet = 0;
var criticalSet = 0;

function UpdateSettingsEvent () {
    //settings 
    var callCostSetting = document.querySelector('.callCostSetting').value;
    var smsCostSetting = document.querySelector('.smsCostSetting').value;
    var warningLevelSetting = document.querySelector('.warningLevelSetting').value;
    var criticalLevelSetting = document.querySelector('.criticalLevelSetting').value;

    //make objects and initialise
    var settingsObj = SettingsBillFunc();
    settingsObj.setCallCost(callCostSetting);
    settingsObj.setSmsCost(smsCostSetting);
    settingsObj.setWarningLevel(warningLevelSetting);
    settingsObj.setCriticalLevel(criticalLevelSetting);

    callSet = settingsObj.getCallCost();
    smsSet = settingsObj.getSmsCost();
    warningSet = settingsObj.getWarningLevel();
    criticalSet = settingsObj.getCriticalLevel();
}

function SettingsBillEvent() {
    //radio bill settings
    var settingsRadioBtn = document.querySelector('.billItemTypeWithSettings:checked').value;
    console.log(settingsRadioBtn);

    var settingsBillObj = SettingsBillFunc();

}

updateSettingsBtn.addEventListener('click', UpdateSettingsEvent);
addButtonSettings.addEventListener('click', SettingsBillEvent);