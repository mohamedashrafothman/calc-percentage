const {percentage} = require('../percent');
const assert = require('assert');

describe('Test Percentage library', ()=> {
	it('Infinity value', ()=> {
		assert.equal(percentage("Infinity"), "∞%");
	});
	it('Convert Positive numbers', ()=> {
		assert.equal(percentage(0.01), "1%");
		assert.equal(percentage(0.10), "10%");
		assert.equal(percentage(0.100), "10%");
		assert.equal(percentage(0.12), "12%");
		assert.equal(percentage(1), "100%");
		assert.equal(percentage(4.2), "420%");
	});
	it('Convert Negative Numbers', ()=> {
		assert.equal(percentage(-0.01), "-1%");
		assert.equal(percentage(-0.10), "-10%");
		assert.equal(percentage(-0.100), "-10%");
		assert.equal(percentage(-0.12), "-12%");
		assert.equal(percentage(-1), "-100%");
		assert.equal(percentage(-4.2), "-420%");
	});
	it('Take 2 params', ()=> {
		assert.equal(percentage(1, 100), "1");
		assert.equal(percentage(20, 100), "20");
		assert.equal(percentage(45, 50), "90");
		assert.equal(percentage(100, 50), "200");
		assert.equal(percentage(-1, 100), "-1");
		assert.equal(percentage(-20, 100), "-20");
		assert.equal(percentage(-45, 50), "-90");
		assert.equal(percentage(-100, 50), "-200");
	});
	it('Take 2 params with percentage sign option', () => {
		assert.equal(percentage(1, 100, {percSign: true}), "1%");
		assert.equal(percentage(20, 100, {percSign: true}), "20%");
		assert.equal(percentage(45, 50, {percSign: true}), "90%");
		assert.equal(percentage(100, 50, {percSign: true}), "200%");
		assert.equal(percentage(-1, 100, {percSign: true}), "-1%");
		assert.equal(percentage(-20, 100, {percSign: true}), "-20%");
		assert.equal(percentage(-45, 50, {percSign: true}), "-90%");
		assert.equal(percentage(-100, 50, {percSign: true}), "-200%");
	});
	it('Take 2 params with Desimal option', () => {
		assert.equal(percentage(1, 100, { decimal: 0 }), "1");
		assert.equal(percentage(20, 100, { decimal: 1 }), "20.0");
		assert.equal(percentage(45, 50, { decimal: 2 }), "90.00");
		assert.equal(percentage(100, 50, { decimal: 3 }), "200.000");
		assert.equal(percentage(-1, 100, { decimal: 0 }), "-1");
		assert.equal(percentage(-20, 100, { decimal: 1 }), "-20.0");
		assert.equal(percentage(-45, 50, { decimal: 2 }), "-90.00");
		assert.equal(percentage(-100, 50, { decimal: 3 }), "-200.000");
	});
	it('Take 2 params with Desimal and percentage sign options', () => {
		assert.equal(percentage(1, 100, { decimal: 0, percSign: true}), "1%");
		assert.equal(percentage(20, 100, { decimal: 1, percSign: true}), "20.0%");
		assert.equal(percentage(45, 50, { decimal: 2, percSign: true}), "90.00%");
		assert.equal(percentage(100, 50, { decimal: 3, percSign: true}), "200.000%");
		assert.equal(percentage(-1, 100, { decimal: 0, percSign: true}), "-1%");
		assert.equal(percentage(-20, 100, { decimal: 1, percSign: true}), "-20.0%");
		assert.equal(percentage(-45, 50, { decimal: 2, percSign: true}), "-90.00%");
		assert.equal(percentage(-100, 50, { decimal: 3, percSign: true}), "-200.000%");
	});

});