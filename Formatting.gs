function mergeMonthsByPeriod() {
	const periodCell = pullCellPosition("firstPeriod");
	const mergeCell = pullCellPosition("topLeftSummary");

	const departments = countItems("firstDepartment");
	const periods = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(periodCell["sheet"]).getRange(periodCell["row"], periodCell["column"], departments,1).getValues()
	SpreadsheetApp.getActiveSpreadsheet().getSheetByName(mergeCell["sheet"]).getRange(mergeCell["row"], mergeCell["column"], departments, 12).breakApart()

	for (let row = 0; row < departments; row++) {
		period = periodDict[periods[row][0]]

		for (let i = 0; i < 12 / period; i++) {
			const head = mergeCell["column"] + i * period;
			SpreadsheetApp.getActiveSpreadsheet().getSheetByName(mergeCell["sheet"]).getRange(mergeCell["row"] + row, head, 1, period).merge()
		}//for
	}//for
}//mergeMonthsByPeriod()

function countItems(cellName) {
	const currentCell = pullCellPosition(cellName);
	let count = 0;

	columnValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(currentCell["sheet"]).getRange(currentCell["row"], currentCell["column"],30,1).getValues()

	while (columnValues[count][0]) {
		count++;
	}//while

	return count;
}//countItems()

const periodDict = {
    "Monthly": 1,
    "Quarterly": 3,
    "Bi-yearly": 6,
	"Yearly": 12
}