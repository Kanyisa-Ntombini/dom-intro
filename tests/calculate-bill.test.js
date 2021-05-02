describe('The totalPhoneBill function' , 
    function() {
        it ('should return "Please enter a string" for 800' , 
            function () {
                assert.deepEqual("Please enter a string", totalPhoneBill(800));
            }
        );

        it ('should return "Please only type call or sms" for "Mount Everest"' , 
            function () {
                assert.deepEqual("Please only type call or sms", totalPhoneBill("Mount Everest"));
            }
        );

        it ('should return R0.00 for ""' , 
            function () {
                assert.deepEqual(0, totalPhoneBill(""));
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
        
    }
);