function ageCalculator() {
	//get input date
	var inputDate = document.getElementById("DOB").value;
	var dob = new Date(inputDate);
	//check input date
	if(inputDate==null || inputDate==''){
		alert("Please choose a valid date!");
		return false;
	}
	else {
		//extract from input date
		var dobYear = dob.getYear();
		var dobMonth = dob.getMonth();
		var dobDate = dob.getDate();
		//get current date
		var now = new Date();
		//extract from current date
		var currentYear = now.getYear();
		var currentMonth = now.getMonth();
		var currentDate = now.getDate();
		//get years
		yearAge = currentYear - dobYear;
		//get months
		if (currentMonth >= dobMonth)
			var monthAge = currentMonth - dobMonth;
		else {
			yearAge--;
			var monthAge = 12 + currentMonth - dobMonth;
		}
		//get days
		if (currentDate >= dobDate)
			var dateAge = currentDate - dobDate;
		else {
			monthAge--;
			var dateAge = 31 + currentDate - dobDate;
			if (monthAge < 0) {
				monthAge = 11;
				yearAge--;
			}
		}
		document.getElementById("mmYear").innerHTML = yearAge;
		document.getElementById("mmMonth").innerHTML = monthAge;
		document.getElementById("mmDay").innerHTML = dateAge;
		document.querySelector('.age-calc').classList.add('expand');
	}
}
