const DataProcessor = require('./DataProcessor');
const InputValidator = require('./InputValidator');
const Utils = require("./Utils")

const conditions = {
	"condition": {
		"include": [{"name": "John"}, {"email": "jane@mail.com"}], 
		"exclude": [{"name": "John", "email":"john2@mail.com"}],
		"sortBy": ["name", "id"]
	}
}

const jsonObj = {
	"data": [
		{"name": "Zeta", "email": "jane@mail.com", "id": 4},
		{"name": "John", "email": "john2@mail.com", "id": 1},
		{"name": "Johnathan", "email": "john1@mail.com", "id": 2},
		{"name": "John", "email": "john1@mail.com", "id": 8},
		{"name": "Jane", "email": "jane@mail.com", "id": 0},
		{"name": "Alex", "email": "jane@mail.com", "id": 7}
	]
}

const inputValidator = new InputValidator();

if (Utils.isValidObj(jsonObj) &&
	inputValidator.checkRequiredFields(jsonObj, ['data']) &&
	inputValidator.isDataArrValid(jsonObj.data))  {

	if (Utils.isValidObj(conditions) &&
		inputValidator.checkRequiredFields(conditions, ['condition'])) {

		const filterAndSorter = new DataProcessor();
		
		console.log(filterAndSorter.getSortedData(jsonObj.data, conditions.condition.sortBy))
		console.log(filterAndSorter.getFilteredData(jsonObj.data, conditions.condition, 'include'))
		console.log(filterAndSorter.getFilteredData(jsonObj.data, conditions.condition, 'exclude'))

	} else {
		console.log("conditions you provided are not valid")
	}

} else {
	console.log("data you provided are not valid")
}



