const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe, it } = require('node:test');

describe('calculateNumber', function() {
    it('Does not round integers', function() {
        result = calculateNumber(1, 3);
        assert.strictEqual(result, 4);
    });
    it('Rounds up second number correctly', function() {
        result = calculateNumber(1, 3.7);
        assert.strictEqual(result, 5);
    });
    it('Rounds down first and rounds up second number', function() {
        result = calculateNumber(1.2, 3.7);
        assert.strictEqual(result, 5);
    });
    it('Rounds up first and second number', function() {
        result = calculateNumber(1.5, 3.7);
        assert.strictEqual(result, 6);
    });
})