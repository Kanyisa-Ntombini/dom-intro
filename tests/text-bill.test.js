describe('The textBill function' , 
    function() {
        it ('should check if functions work', 
            function () {
                let textBill = TextBillFunc();
                textBill.makeCall();
                textBill.makeCall();
                textBill.makeCall();

                assert.deepEqual(8.25, textBill.getTotalCallCost());
                assert.deepEqual(0.00, textBill.getTotalSmsCost());
                assert.deepEqual(8.25, textBill.getTotalCost());
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
    }
);