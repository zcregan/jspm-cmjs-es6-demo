var _ = require('lodash');

function addOne (numbers) {
	return _.map(numbers, number => number + 1);
}

module.exports = addOne;
