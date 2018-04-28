'use strict';

/**
 * Percentage Function that takes two parameter and return persentage
 * By: Mohamed Ashraf Othman
 * @param {Number} val A part number of a whole that is needed to be in percentage format.
 * @param {Number} total The whole number.
 * @param {Object} opts Two oprions, first is desimal and second is percentage sign
 * @return {String} Example: "20.0%".
 */
module.exports.percentage = (val, total, opts = {decimal: 0,percSign: false}) => {
	if (typeof val == 'number') {
		if (total) {
			if (typeof total == 'number' && total === parseInt(total)) {
				return `${(val / total * 100).toFixed(opts.decimal)}${(opts.percSign === true) ? "%" : ""}`;
			} else {
				return false;
			}
		} else {
			return `${(Number(val) * 100).toFixed(opts.decimal)}%`;
		}
	} else if (typeof val === 'string' && val.toLowerCase() === "infinity") {
		return "∞%";
	} else {
		return false;
	}
};