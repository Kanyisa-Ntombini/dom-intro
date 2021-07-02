function CalculateBill() {
	let theBillString;
	let totalAmountSms = 0;
	let totalAmountCall = 0;
	let answer;

	function checkString(theString) {
		if ((typeof theString) !== 'string') {
			return "Please enter 'sms' or 'call'";
		} else {
			theBillString = theString;
		}
	}

	function getTrimList() {
		let billStringList = theBillString.split(',');
		let trimList = [];
		for (let i = 0; i < billStringList.length; i++) {
			let item = billStringList[i].trim();
			trimList.push(item);
		}
		return trimList;
	}

	function calcBill() {
		for (let i = 0; i < getTrimList().length; i++) {
			let item = getTrimList()[i];
			if (item === 'sms') {
				totalAmountSms += 0.75;
			} else if (item === 'call') {
				totalAmountCall += 2.75;
			} else if (item === '') {
				totalAmountSms += 0;
				totalAmountCall += 0;
			} else {
				answer = "Please enter call or sms";
			}
		}
	}

	function getSmsTotal() {
		return totalAmountSms;
	}

	function getCallsTotal() {
		return totalAmountCall;
	}

	function getTotal() {
		return totalAmountCall + totalAmountSms;
	}

	function getAns() {
		return answer;
	}

	function getClassTotal() {
		if (getTotal() >= 20 && getTotal() < 30) {
			return 'warning';
		} else if (getTotal() >= 30) {
			return 'danger';
		}
	}

	return {
		checkString,
		getTrimList,
		calcBill,
		getSmsTotal,
		getCallsTotal,
		getTotal,
		getAns,
		getClassTotal
	}
}

/* === CALCULATE BUTTON === */
const calcButton = document.querySelector(".calculateBtn");

function calcBillEventFunc() {
	const billString = document.querySelector(".billString");

	//calculating amounts
	let calcBillObj = CalculateBill();
	calcBillObj.checkString(billString.value);
	calcBillObj.calcBill();

	//the totals output
	let totalOutput = document.querySelector('.billTotal');
	totalOutput.innerHTML = calcBillObj.getTotal().toFixed(2);

	//warning and critical levels
	totalOutput.classList.remove('warning');
	totalOutput.classList.remove('danger');
	if (calcBillObj.getClassTotal() === 'warning') {
		totalOutput.classList.add('warning');
	} else if (calcBillObj.getClassTotal() === 'danger') {
		totalOutput.classList.add('danger');
	}
}

calcButton.addEventListener("click", calcBillEventFunc);