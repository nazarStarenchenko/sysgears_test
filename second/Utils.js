class Utils {
	
	static isValidObj(objToCheck) {
		if (!Utils.isObject(objToCheck) && 
			Utils.isObjectEmpty(objToCheck)) return false;

		return true;
	}

	static isObject(obj) {
    	return typeof obj === 'object' && obj !== null;
  	}

  	static isObjectEmpty(obj) {
    	return Object.keys(obj).length === 0;
	}

}


module.exports = Utils;