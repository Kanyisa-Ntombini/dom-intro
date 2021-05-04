describe('The radioBill function' , 
    function() {
        it ('should check if functions work', 
            function () {
                let radioBill = RadioBillFunc();
                radioBill.makeCall();
                radioBill.makeCall();
                radioBill.sendText();
                radioBill.sendText();

                assert.deepEqual(5.50, radioBill.getTotalCallCost());
                assert.deepEqual(1.50, radioBill.getTotalSmsCost());
                assert.deepEqual(7.00, radioBill.getTotalCost());
            }
        ); 
        
        it ('should check total amount if 5 calls are made at R2.75 each', 
            function () {
                let radioBill = RadioBillFunc();
                radioBill.makeCall();
                radioBill.makeCall();
                radioBill.makeCall();
                radioBill.makeCall();
                radioBill.makeCall();

                assert.deepEqual(13.75, radioBill.getTotalCallCost());
                assert.deepEqual(0.00, radioBill.getTotalSmsCost());
                assert.deepEqual(13.75, radioBill.getTotalCost());
            }
        );   

        it('should check total amount if 3 smses are sent at R0.75 each',
            function () {
                let radioBill = RadioBillFunc();
                radioBill.sendText();
                radioBill.sendText();
                radioBill.sendText();

                assert.deepEqual(0.00, radioBill.getTotalCallCost());
                assert.deepEqual(2.25, radioBill.getTotalSmsCost());
                assert.deepEqual(2.25, radioBill.getTotalCost());
            }
        );

        it('should check total amount if 2 smses (R0.75 each) and 1 call (R2.75 each) are made',
            function () {
                let radioBill = RadioBillFunc();
                radioBill.sendText();
                radioBill.sendText();
                radioBill.makeCall();

                assert.deepEqual(2.75, radioBill.getTotalCallCost());
                assert.deepEqual(1.50, radioBill.getTotalSmsCost());
                assert.deepEqual(4.25, radioBill.getTotalCost());
            }
        );
    }
);