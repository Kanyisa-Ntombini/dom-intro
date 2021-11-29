/* === FACTORY FUNCTION === */
function SettingsBillFunc() {
    //Inputs
    let theCallCost = 0;
    let theSmsCost = 0;
    let theWarningLevel = 0;
    let theCriticalLevel = 0;

    //Outputs
    let totalCallCost = 0;
    let totalSmsCost = 0;

    //Setters
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

/* === THE DOM CODE === */
const settingsObj = SettingsBillFunc();
const updateSettingsBtn = document.querySelector('.updateSettings');
const addButtonSettings = document.querySelector('.addButton');

function updateSettingsEvent () {
    //settings 
    const callCostSetting = document.querySelector('.callCostSetting').value;
    const smsCostSetting = document.querySelector('.smsCostSetting').value;
    const warningLevelSetting = document.querySelector('.warningLevelSetting').value;
    const criticalLevelSetting = document.querySelector('.criticalLevelSetting').value;

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
    const billTypeSettings = document.querySelector(".billItemTypeWithSettings:checked").value;
    
    //outputs
    const smsOut = document.querySelector('.smsTotalSettings');
    const callOut = document.querySelector('.callTotalSettings');
    const phoneOut = document.querySelector('.totalSettings');

    /*Need to fix the code below!! I need to be able to check if the update
    settings button was clicked!!! */

    if (updateSettingsBtn.clicked === true) {
        console.log('true!!');
        alert('Type in the settings and do not forget to press "Update Settings"!');
    } else {
        console.log('false!!');
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
}

updateSettingsBtn.addEventListener('click', updateSettingsEvent);
addButtonSettings.addEventListener('click', SettingsCalcEvent);