function mergeMonthsByPeriod() {
	const periodCell = pullCellPosition("firstPeriod");
	const mergeCell = pullCellPosition("topLeftSummary");

	const departments = countDepartments();

	for (let row = 0; row < departments; row++) {
		period = CONVERT_PERIOD_TO_NUMBER(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(periodCell["sheet"]).getRange(periodCell["row"] + row, periodCell["column"]).getValue())

		for (let i = 0; i < 12 / period; i++) {
			const head = mergeCell["column"] + i * period;
			SpreadsheetApp.getActiveSpreadsheet().getSheetByName(mergeCell["sheet"]).getRange(mergeCell["row"] + row, head, 1, period).merge()
		}
	}
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

function insertRow() {
	
}
/**
function IS_IN_CYCLE(dateInput, monthString, periodString) {
	dates = Array.isArray(dateInput) ? dateInput : [[dateInput]]
	const month = convertMonthStringToNumber(monthString);
	const period = CONVERT_PERIOD_TO_NUMBER(periodString);
	const year = new Date(dates[0][0]).getFullYear();

	result = []

	for (let i = 0; i < dates[0].length; i++) {
		if (dates[0][i] === "-" || !dates[0][i]) {
			result.push(false);
		} else{
			const date = new Date(dates[0][i]);

			const firstMonthOfCycle = month - month % period;
			const startDate = new Date(year, firstMonthOfCycle, 1, 0, 0, 0, 0);
			const endDate = new Date(year, firstMonthOfCycle + period, 0, 23, 59, 59, 999);

			result.push(date >= startDate && date <= endDate);
		}
	}

	return result;
}


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
*/