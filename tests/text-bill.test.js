describe('The textBill function' , 
    function() {
        it ('should return "Please enter call or sms" for 800' , 
            function () {
                assert.deepEqual("Please enter call or sms", textBillFunc(800));
            }
        );

        it ('should return "Please enter call or sms" for "Mount Everest"' , 
            function () {
                assert.deepEqual("Please enter call or sms", textBillFunc("Mount Everest"));
            }
        );

        it ('should return R0.00 for ""' , 
            function () {
                assert.deepEqual(0, textBillFunc(""));
            }
        );

        it ('should return R4.25 for "sms"' , 
            function () {
                assert.deepEqual(4.25, textBillFunc("sms"));
            }
        );

        it ('should return R16.75 for inserted string' , 
            function () {
                var string = "call";
                assert.deepEqual(16.75, textBill(string));
            }
        );
        
    }
);