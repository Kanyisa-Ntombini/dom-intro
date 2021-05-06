describe('The totalPhoneBill function' , 
    function() {
        it ('should return "Please only type call or sms" for "Mount Everest"' , 
            function () {
                let calculateBill = CalculateBill();
            
                assert.deepEqual("Please only type 'call' or 'sms'", calculateBill.checkString(800));
            }
        );

        it ('should check if a string has been inserted' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString("sms, call, call");
                
                assert.deepEqual(["sms", "call", "call"], calculateBill.getTrimList());
            }
        );

        /*it ('should return \"Please only type \'call\' or \'sms\'" for "Mount Everest"' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString("hggjj");
                calculateBill.calcStringBill()

                assert.deepEqual("Please only type 'call' or 'sms'", calculateBill.getStringAns());
            }
        );

        it ('should return R4.25 for "sms, call, sms"' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString("call, call");

                assert.deepEqual(5.50, calculateBill.getCallTotalAmount());
            }
        );

        /*it ('should return Please only type \'call\' or \'sms\' for "Mount Everest"' , 
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString("aplle");
                calculateBill.calcStringBill();

                assert.deepEqual("Please only type 'call' or 'sms'", calculateBill.getStringAns());
            }
        );

        it ('should return R4.25 for "sms, call, sms"' , 
            function () {
                assert.deepEqual(4.25, totalPhoneBill("sms, call, sms"));
            }
        );

        it ('should return R16.75 for inserted string' , 
            function () {
                var string = "call, call, sms, call, sms, call, call, sms, sms";
                assert.deepEqual(16.75, totalPhoneBill(string));
            }
        );

        it('should check if the warning level works',
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString("call, call, sms, sms");
                calculateBill.calcStringBill();

                assert.deepEqual('warning', calculateBill.getClassName());
            }
        );

        it('should check if the danger level works',
            function () {
                let calculateBill = CalculateBill();
                calculateBill.checkString("call, call, call, sms, sms, sms");
                calculateBill.calcStringBill();

                assert.deepEqual('danger', calculateBill.getClassName());
            }
        );*/
        
    }
);