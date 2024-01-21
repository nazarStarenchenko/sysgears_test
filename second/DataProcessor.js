class DataProcessor {

	getFilteredData(arrOfObjectsToFilter, conditions, mode="include")  {

		try {
			const resultArr = arrOfObjectsToFilter.filter((obj) => 
									this._checkFilterConditions(obj, conditions, mode));	

			return {"result": resultArr}

		} catch (err) {
			console.log(err)
		}

	}

	_checkFilterConditions(obj, conditions, mode="include") {
		if (!(mode in conditions)) {
			throw new Error("there is no such mode of work")
		}

		const filteringConditions = conditions[mode];

		const resultArrOfBooleans = []
		for (const conditionObj of filteringConditions) {

			const tempArrOfBooleans = []
			for (let key in conditionObj) {

				if (obj.hasOwnProperty(key)) {

					if (conditionObj[key] !== obj[key]) {
						tempArrOfBooleans.push(false); 

					} else if (conditionObj[key] === obj[key]) {
						tempArrOfBooleans.push(true); 
					}
				} else {
					tempArrOfBooleans.push(false);
				}	
			}	

			if (tempArrOfBooleans.every((elem) => elem === true)) {
				resultArrOfBooleans.push(true);
			} else {
				resultArrOfBooleans.push(false);
			}
		}

		if (resultArrOfBooleans.some((elem) => elem === true)) {
			return mode === "include" ? true : false;
		} else {
			return mode === "include" ? false : true;
		} 
	}

	getSortedData(arrOfObjectsToSort, keysToSortBy) {
		return arrOfObjectsToSort.sort((a, b) => {
			return this._compareElements(a, b, keysToSortBy)
		});
	}

	//sorting by multile keys
	_compareElements(leftElem, rightElem, keysToSortBy) {

		for (let key of keysToSortBy) {
			let comparationResult;

			if (typeof leftElem[key] === 'string') {
				comparationResult = leftElem[key].localeCompare(rightElem[key]) 
			} else if (typeof leftElem[key] === 'number') {
				comparationResult = leftElem[key] - rightElem[key]
			}

			if (comparationResult !== 0) return comparationResult;
			else continue;
		}
		return 0;
	}
}


module.exports = DataProcessor;