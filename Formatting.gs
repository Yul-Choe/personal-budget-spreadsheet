function mergeMonthsByFrequency() {

}

function countDepartments() {
	const currentSheet = cellPositionDict["firstDepartment"]["sheet"];
	const currentCell = cellPositionDict["firstDepartment"]["cell"];

	const currentColumn = currentCell[0];
	let currentRow = Number(currentCell.substring(1));
	let count = 0;

	while (SpreadsheetApp.getActiveSpreadsheet().getSheetByName(currentSheet).getRange(currentCell).getValue()) {
		count++;
		currentRow++;
		currentCell = currentColumn + currentRow;
	}

	return count;
}

/**
 * @customfunction
 */
function IS_IN_CYCLE(dateString, monthString, frequencyString) {
	if (Array.isArray(dateString)) {
		const returnArray = new Array();

		for (let row of dateString) {
			returnArray.push(IS_IN_CYCLE(row[0], monthString, frequencyString));
		}

		return returnArray;
	}
	
	if (dateString === "-" || !dateString) {
		return false;
	}

	const month = convertMonthStringToNumber(monthString);
	const frequency = CONVERT_FREQUENCY_TO_NUMBER(frequencyString);
	const date = new Date(dateString);
	const year = date.getFullYear();

	const firstMonthOfCycle = month - month % frequency;

	const startDate = new Date(year, firstMonthOfCycle, 1, 0, 0, 0, 0);
	const endDate = new Date(year, firstMonthOfCycle + frequency, 0, 23, 59, 59, 999);

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
    case "Bi-yearly":
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