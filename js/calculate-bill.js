/* === Factory Function === */ 
function CalculateBill() {
	let theBillString;
	let totalAmountSms = 0;
	let totalAmountCall = 0;

	function checkString(theString) {
		if (typeof theString !== 'string') {
			alert("Please enter 'sms' or 'call'");
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
		let errorCalculator = 0;

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
				errorCalculator ++;
			}
		}

		if (errorCalculator > 0) {
			alert("Please enter call or sms");
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
		getClassTotal
	}
}

/* === Code for DOM === */
const calcButton = document.querySelector(".calculateBtn");

function calcBillEventFunc() {
	const billString = document.querySelector(".billString");

	//calculating amounts
	const calcBillObj = CalculateBill();
	calcBillObj.checkString(billString.value);
	calcBillObj.calcBill();

	//the totals output
	const totalOutput = document.querySelector('.billTotal');
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