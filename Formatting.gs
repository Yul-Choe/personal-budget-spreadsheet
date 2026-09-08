function addFrequencyPerDepartment() {
    
}

/**
 * @customfunction
 */
function IS_IN_CYCLE(dateString, monthString, frequencyString) {
	const month = convertMonthStringToNumber(monthString);
	const frequency = CONVERT_FREQUENCY_TO_NUMBER(frequencyString);
	const date = new Date(dateString);
	const year = date.getFullYear();

	const firstMonthOfCycle = month - month % frequency

	const startDate = new Date(year, firstMonthOfCycle, 1);
	const endDate = new Date(year, firstMonthOfCycle + frequency, 0);

	return date >= startDate && date <= endDate;
}

/**
 * @customfunction
 */
function CONVERT_FREQUENCY_TO_NUMBER(frequencyString) {
  switch (frequencyString) {
    case "Monthly":
      return 1;
    case "Quarterly":
      return 3;
    case "Bi-Yearly":
      return 6;
    case "Yearly":
      return 12;
  }
}

function convertMonthStringToNumber(monthString) {
	switch (monthString) {
		case "Jan":
			return 0;
		case "Feb":
			return 1;
		case "Mar":
			return 2;
		case "Apr":
			return 3;
		case "May":
			return 4;
		case "Jun":
			return 5;
		case "Jul":
			return 6;
		case "Aug":
			return 7;
		case "Sep":
			return 8;
		case "Oct":
			return 9;
		case "Nov":
			return 10;
		case "Dec":
			return 11;
	}
}