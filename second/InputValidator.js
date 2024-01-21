const Utils = require("./Utils")

class InputValidator {
	
	isDataArrValid (data) {
		if (!Array.isArray(data) || data.length === 0) return false;

		for (let row in data) {
			if (!Utils.isValidObj(row)) return false;
		}

		return true;
	}


	checkRequiredFields(objToCheck, requiredFields) {
	  for (const field of requiredFields) {
	    if (!(field in objToCheck)) {
	      return false; 
	    }
	  }
	  return true; 
	}
}

module.exports = InputValidator;