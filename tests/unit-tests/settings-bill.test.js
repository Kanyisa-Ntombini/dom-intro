describe('The SettingsBill function',
    function () {
        it('should check if set and get functions work for the call costs',
            function () {
                let settingsBill = SettingsBillFunc();
                settingsBill.setCallCost(2);
                assert.deepEqual(2, settingsBill.getCallCost());

                let settingsBill2 = SettingsBillFunc();
                settingsBill2.setCallCost(3);
                assert.deepEqual(3, settingsBill2.getCallCost());
            }
        );

        it('should check if set and get functions work for the sms costs',
            function () {
                let settingsBill = SettingsBillFunc();
                settingsBill.setSmsCost(0.55);
                assert.deepEqual(0.55, settingsBill.getSmsCost());

                let settingsBill2 = SettingsBillFunc();
                settingsBill2.setSmsCost(1.25);
                assert.deepEqual(1.25, settingsBill2.getSmsCost());
            }
        );

        it('should check if set and get functions work for the warning levels',
            function () {
                let settingsBill = SettingsBillFunc();
                settingsBill.setWarningLevel(25);
                assert.deepEqual(25, settingsBill.getWarningLevel());

                let settingsBill2 = SettingsBillFunc();
                settingsBill2.setWarningLevel(15);
                assert.deepEqual(15, settingsBill2.getWarningLevel());
            }
        );

        it('should check if set and get functions work for the critical levels',
            function () {
                let settingsBill = SettingsBillFunc();
                settingsBill.setCriticalLevel(35);
                assert.deepEqual(35, settingsBill.getCriticalLevel());

                let settingsBill2 = SettingsBillFunc();
                settingsBill2.setCriticalLevel(50);
                assert.deepEqual(50, settingsBill2.getCriticalLevel());
            }
        );

        it('should calculate the total call cost for 2 calls at R2.10 each',
            function () {
                let settingsBill = SettingsBillFunc();
                settingsBill.setCallCost(2.10);

                settingsBill.makeCall();
                settingsBill.makeCall();

                assert.deepEqual(4.20, settingsBill.getTotalCallCost());
                assert.deepEqual(0.00, settingsBill.getTotalSmsCost());
                assert.deepEqual(4.20, settingsBill.getTotalCost());
            }
        );

        it('should calculate the total cost for 4 smses at R0.95 each',
            function () {
                let settingsBill = SettingsBillFunc();
                settingsBill.setSmsCost(0.95);

                settingsBill.sendSms();
                settingsBill.sendSms();
                settingsBill.sendSms();
                settingsBill.sendSms();

                assert.deepEqual(3.80, settingsBill.getTotalSmsCost());
                assert.deepEqual(0.00, settingsBill.getTotalCallCost());
                assert.deepEqual(3.80, settingsBill.getTotalCost());
            }
        );

        it('should calculate the total cost for 1 sms (R1.50 each) and 3 calls (R3.35 each)',
            function () {
                let settingsBill = SettingsBillFunc();
                settingsBill.setSmsCost(0.95);
                settingsBill.setCallCost(3.35);

                settingsBill.sendSms();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();

                assert.deepEqual(0.95, settingsBill.getTotalSmsCost());
                assert.deepEqual(10.05, settingsBill.getTotalCallCost());
                assert.deepEqual(11.00, settingsBill.getTotalCost());
            }
        );
    }
)