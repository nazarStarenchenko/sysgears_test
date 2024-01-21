const {readFileSync} = require('fs')

class Utils {
	static isObject(obj) {
    	return typeof obj === 'object' && obj !== null;
  	}

  	static isObjectEmpty(obj) {
    	return Object.keys(obj).length === 0;
	}

	static getDataFromJSONFile(filePath) {
		return JSON.parse(readFileSync(filePath, {encoding: 'utf8'}));
	}
}


module.exports = Utils;