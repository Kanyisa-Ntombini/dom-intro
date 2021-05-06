describe('the TextBill function:' , 
    function() {
        it ('should check if makeCall functions work', 
            function () {
                let textBill = TextBillFunc();
                textBill.makeCall();
                textBill.makeCall();
                textBill.makeCall();

                assert.deepEqual(8.25, textBill.getTotalCallCost());
            }
        );

        it ('should check if sendSms functions work', 
            function () {
                let textBill = TextBillFunc();
                textBill.sendSms();
                textBill.sendSms();

                assert.deepEqual(1.50, textBill.getTotalSmsCost());
            }
        );

        it ('should check if gettotalCost function works', 
            function () {
                let textBill = TextBillFunc();

                assert.deepEqual(0.00, textBill.getTotalCost());
            }
        );

        it ('should calculate call cost for two calls at R2.75 each', 
            function () {
                let textBill = TextBillFunc();
                textBill.makeCall();
                textBill.makeCall();

                assert.deepEqual(5.50, textBill.getTotalCallCost());
                assert.deepEqual(0.00, textBill.getTotalSmsCost());
                assert.deepEqual(5.50, textBill.getTotalCost());
            }
        );

        it ('should calculate sms cost for four smses at R0.75 each', 
            function () {
                let textBill = TextBillFunc();

                textBill.sendSms();
                textBill.sendSms();
                textBill.sendSms();
                textBill.sendSms();

                assert.deepEqual(0.00, textBill.getTotalCallCost());
                assert.deepEqual(3.00, textBill.getTotalSmsCost());
                assert.deepEqual(3.00, textBill.getTotalCost());
            }
        );

        it ('should calculate 2 smses (R0.75 each) and three calls R(2.75 each)', 
            function () {
                let textBill = TextBillFunc();

                textBill.sendSms();
                textBill.sendSms();
                textBill.makeCall();
                textBill.makeCall();
                textBill.makeCall();

                assert.deepEqual(8.25, textBill.getTotalCallCost());
                assert.deepEqual(1.50, textBill.getTotalSmsCost());
                assert.deepEqual(9.75, textBill.getTotalCost());
            }
        );

        it ('should check if the warning level works', 
            function () {
                let textBill = TextBillFunc();
                textBill.makeCall();
                textBill.makeCall();
                textBill.sendSms();
                textBill.sendSms();

                assert.deepEqual('warning', textBill.getTotalClassName());
            }
        );

        it ('should check if the danger level works', 
            function () {
                let textBill = TextBillFunc();
                textBill.makeCall();
                textBill.makeCall();
                textBill.makeCall();
                textBill.makeCall();
                textBill.makeCall();
                textBill.sendSms();
                textBill.sendSms();
                textBill.sendSms();
                textBill.sendSms();

                assert.deepEqual('danger', textBill.getTotalClassName());
            }
        );
    }
);