var _ = require('lodash');

function addTwo (numbers) {
	var addOne = _.map(numbers, function (number) { return number + 1 });
	var addAnotherOne = [];

	for (number of addOne) {
		addAnotherOne.push(number + 1);
	}

	return addAnotherOne;
}

module.exports = addTwo;
