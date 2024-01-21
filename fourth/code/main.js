const BranchProcessor = require('./BranchProcessor');
const InputValidator = require("./InputValidator");
const Utils = require("./Utils");

const jsonData = Utils.getDataFromJSONFile("../static/test.json")
const objectValidator = new InputValidator()

if (objectValidator.isObjectValid(jsonData)) {
	const branchProcessor = new BranchProcessor(jsonData.questions)
	const formattedRes = branchProcessor.getFormattedResult();

	console.log(JSON.stringify(formattedRes, null, 2));
}
