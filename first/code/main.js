const UnitConvertor = require('./UnitConvertor');
const Utils = require('./Utils');

input = {"distance": {"unit": "cm", "value": 182}, "convertTo": "ft"}
JSONInput = JSON.stringify(input)

const converter = new UnitConvertor()
converter.addUnitsToConvertionTable(Utils.getDataFromJSONFile('../static/test.json'))
console.log(converter.convertMetricToImperial(JSONInput))