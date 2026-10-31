// Dictionary of all important cell positions
const cellPositionDict = {
	firstDepartment: logPosition("Settings", "A3"),
	firstSource: logPosition("Settings", "F3"),
	topLeftSummary: logPosition("Summary", "B3"),
	firstPeriod: logPosition("Plan", "B3"),
  firstAllocationDepartment: logPosition("Plan", "A3")
}

// Log a cell position into a dictionary
function logPosition(sheet, cell) {
  return {
   	sheet: sheet,
	  cell: cell
  }
}//logPosition()

function pullCellPosition(cellName) {
	return {
		sheet: cellPositionDict[cellName]["sheet"],
		column: cellPositionDict[cellName]["cell"].charCodeAt(0) - 64,
		row: Number(cellPositionDict[cellName]["cell"].substring(1))
	}
}//pullCellPosition()