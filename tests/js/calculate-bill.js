function CalculateBill() {
	var trimList = [];
	var theTextString = "";
	var totalCostSms = 0;
	var totalCostCall = 0;
	var totalCost = 0;
	var stringAnswer = "ans";

	function checkString(textString) {
		if ((typeof textString) !== 'string') {
			return "Please only type 'call' or 'sms'";
		} else {
			theTextString = textString;
		}
	}

	function getTrimList() {
		var textList = theTextString.split(",")
		for (var i=0; i<textList.length; i++) {
			var item = textList[i].trim();
			trimList.push(item);
		}
		return trimList;
	}

	function calcStringBill() {
		for (var i=0; i<trimList.length; i++){
			var item = trimList[i];

			if (item === 'sms') {
				totalCostSms += 0.75;
				totalCost += 0.75;
			} else if (item === 'call') {
				totalCostCall += 2.75;
				totalCost += 2.75;
			} else if (item === '') {
				totalCostSms += 0;
				totalCostCall += 0;
				totalCost += 0;
			} else {
				stringAnswer += "Please only type 'call' or 'sms'";
			}
		}
	}

	function getStringAns () {
		return stringAnswer;
	}

	function getCallTotalAmount() {
		return totalCostCall;
	}

	return {
		checkString,
		getTrimList,
		calcStringBill,
		getStringAns,
		getCallTotalAmount
	}
}