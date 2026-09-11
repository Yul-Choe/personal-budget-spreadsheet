function mergeMonthsByPeriod() {
	const periodCell = pullCellPosition("firstPeriod");
	const mergeCell = pullCellPosition("topLeftSummary");

	const departments = countDepartments();

	let count = 0;

	while (count < departments) {
		period = CONVERT_PERIOD_TO_NUMBER(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(periodCell["sheet"]).getRange(periodCell["row"] + count, periodCell["column"].getValue()))

		for (let i = 0; i < 12 / period; i++)
			SpreadsheetApp.getActiveSpreadsheet().getSheetByName(mergeCell["sheet"]).getRange(mergeCell["row"] + count, head, mergeCell["row"] + count, tail).merge()
		count++;
	}

	SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("P3:R3").merge()

}

function countDepartments() {
	const currentCell = pullCellPosition("firstDepartment");
	let count = 0;

	while (SpreadsheetApp.getActiveSpreadsheet().getSheetByName(currentCell["sheet"]).getRange(currentCell["row"], currentCell["column"]).getValue()) {
		count++;
		currentCell["row"]++;
	}

	return count;
}

/**
 * @customfunction
 */
function IS_IN_CYCLE(dateString, monthString, periodString) {
	if (Array.isArray(dateString)) {
		const returnArray = new Array();

		for (let row of dateString) {
			returnArray.push(IS_IN_CYCLE(row[0], monthString, periodString));
		}

		return returnArray;
	}
	
	if (dateString === "-" || !dateString) {
		return false;
	}

	const month = convertMonthStringToNumber(monthString);
	const period = CONVERT_PERIOD_TO_NUMBER(periodString);
	const date = new Date(dateString);
	const year = date.getFullYear();

	const firstMonthOfCycle = month - month % period;

	const startDate = new Date(year, firstMonthOfCycle, 1, 0, 0, 0, 0);
	const endDate = new Date(year, firstMonthOfCycle + period, 0, 23, 59, 59, 999);

	return date >= startDate && date <= endDate;
}

/**
 * @customfunction
 */
function CONVERT_PERIOD_TO_NUMBER(periodString) {
  switch (periodString) {
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