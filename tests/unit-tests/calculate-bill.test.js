describe('The totalPhoneBill function' , 
    function() {
        it ('should check if a string is entered' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString(800);
            
                assert.deepEqual("Please enter 'sms' or 'call'", calculateBill.checkString());
            }
        );

        it ('should check if a trimmed list of the string is produced' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString('sms, sms, sms');
            
                assert.deepEqual(['sms','sms', 'sms'], calculateBill.getTrimList());
            }
        );

        it ('should check if total bill for smses can be calculated' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString('sms, sms, sms');
                calculateBill.calcBill();
            
                assert.deepEqual(2.25, calculateBill.getSmsTotal());
            }
        );

        it ('should check if total bill for calls can be calculated' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString('call, call, call');
                calculateBill.calcBill();
            
                assert.deepEqual(8.25, calculateBill.getCallsTotal());
            }
        );

        it ('should check if total bill for calls, smses and total bill can be calculated' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString('call, call, call, sms');
                calculateBill.calcBill();
            
                assert.deepEqual(8.25, calculateBill.getCallsTotal());
                assert.deepEqual(0.75, calculateBill.getSmsTotal());
                assert.deepEqual(9.00, calculateBill.getTotal());
            }
        );

        it ('should check if an empty string is entered' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString('');
                calculateBill.calcBill();
            
                assert.deepEqual(0.00, calculateBill.getCallsTotal());
                assert.deepEqual(0.00, calculateBill.getSmsTotal());
                assert.deepEqual(0.00, calculateBill.getTotal());
            }
        );

        it ('should check if a random word(s) is entered' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString('mount everest, calcium');
                calculateBill.calcBill();
            
                assert.deepEqual("Please enter call or sms", calculateBill.getAns());
            }
        );

        it ('should check if warning level works' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString('call, call, call, sms, sms');
                calculateBill.calcBill();
            
                assert.deepEqual("warning", calculateBill.getClassTotal());
            }
        );

        it ('should check if danger level works' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString('call, call, call, sms, sms, sms, sms, sms');
                calculateBill.calcBill();
            
                assert.deepEqual("danger", calculateBill.getClassTotal());
            }
        );
    }
);