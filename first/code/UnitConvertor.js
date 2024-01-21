const Utils = require('./Utils');

class UnitConvertor {
	constructor () {
		this.convertionTable = {
			// needed to convert some unit to meter
			toMeter: {
	            "m": 1.0,     
	            "cm": 0.01,  
	            "in": 0.0254,  
	            "ft": 0.3048,
			},

			// needed to convert meter to some unit
			fromMeter: {
				"m": 1.0,     
	            "cm": 100.0,  
	            "in": 39.37,  
	            "ft": 3.281,
			}
		}
	}

	convertMetricToImperial (JSONInput)  {
		try {
			const parsedObject = JSON.parse(JSONInput)
			if (Utils.isObject(parsedObject) && 
				!Utils.isObjectEmpty(parsedObject)) {

				const unitConvertingTo = parsedObject?.convertTo
				const unitConvertingFrom = parsedObject?.distance?.unit
				const distance = parsedObject?.distance?.value

				if (unitConvertingTo in this.convertionTable.fromMeter && 
					unitConvertingFrom in this.convertionTable.toMeter && 
					Utils.isNumber(distance)) {

					// first convert to meter then convert to needed unit 
			        const convertedValue = distance * 
			    							this.convertionTable.toMeter[unitConvertingFrom] * 
			        						this.convertionTable.fromMeter[unitConvertingTo];

			        // Round to two decimal places
			        const roundedValue = Math.round(convertedValue * 100) / 100;

					return JSON.stringify({"unit": unitConvertingTo, "value": roundedValue})	

				} else {
					return "data you provided was not valid"
				}
			} else {
				return "object is not valid, either empty or not an object"
			}
		} catch (err) {
			console.log(`error parsing: ${err}`)
		}
	}

	addUnitsToConvertionTable (unitData) {
		this.convertionTable.toMeter = {...this.convertionTable.toMeter, ...unitData.toMeter}
		this.convertionTable.fromMeter = {...this.convertionTable.fromMeter, ...unitData.fromMeter}
	}


}

module.exports = UnitConvertor;