const Utils = require("./Utils");

class InputValidator {
	
	isObjectValid (objToCheck) {

		// check if we passed not empty obj
		if (Utils.isObject(objToCheck) && 
			Utils.isObjectEmpty(objToCheck)) {
			return false;
		}

		// check if question array is there, and valid and not empty
		if (!("questions" in objToCheck) || 
			!Array.isArray(objToCheck.questions) ||
			objToCheck.questions.length === 0) return false;


		//chech if all required question and answer fields are present
		const questionRequiredFields = ["id", "questionText", "answers"]
		const answerRequiredFields = ["answer", "nextQuestionID"]

		for (const questionObj of objToCheck.questions) {
			if (!this._checkRequiredFields(questionObj, questionRequiredFields)) {
				return false;
			}

			for (const answerObj of questionObj.answers) {
				if (!this._checkRequiredFields(answerObj, answerRequiredFields)) {
					return false;
				}
			}
		}

		return true;
	}	

	_checkRequiredFields(objToCheck, requiredFields) {
	  for (const field of requiredFields) {
	    if (!(field in objToCheck)) {
	      return false; 
	    }
	  }
	  return true; 
	}
}

module.exports = InputValidator;