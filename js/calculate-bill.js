//get a reference to the calculate button
const calculateButton = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal");

//get a reference to the billString
const billString = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function totalPhoneBill () {
    var phoneRecord = billString.value;

	if ((typeof phoneRecord) === 'string') {
		var phoneRecordList = phoneRecord.split(',');
		var cost = 0;

		for (var i = 0; i < phoneRecordList.length; i++) {
			var item = phoneRecordList[i].trim();

			if (item === 'call') {
			  cost += 2.75;
			}
			else if (item === 'sms') {
			  cost += 0.75;
			}
		 }
		
        var roundedCost = cost.toFixed(2);
        
	} 
	else {
		return "Please enter a string";
	}
    billTotal.innerHTML = roundedCost;

    //Displaying the total bill
    billTotal.classList.remove("warning");
    billTotal.classList.remove("danger");
    if (roundedCost>20.00 && roundedCost<=30.00) {
        billTotal.classList.add("warning");
    } else if (roundedCost > 30.00) {
        billTotal.classList.add("danger");
    }
}

//link the function to a click event on the calculate button
calculateButton.addEventListener("click", totalPhoneBill);