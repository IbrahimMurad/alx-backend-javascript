const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe('calculateNumber', () => {
  it('adds two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('adds one integer with one decimal rounded up', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('adds one integer with one decimal rounded down', () => {
    assert.strictEqual(calculateNumber(1, 3.3), 4);
  });
  it('adds two decimals rounded up', () => {
    assert.strictEqual(calculateNumber(1.6, 3.7), 6);
  });
  it('adds two decimals rounded down', () => {
    assert.strictEqual(calculateNumber(1.2, 3.4), 4);
  });
  it('adds two decimals with 5 after the decimal point', () => {
    assert.strictEqual(calculateNumber(2.5, 3.5), 7);
  });
  it('adds two decimals less than one rounded to one', () => {
    assert.strictEqual(calculateNumber(0.8, 0.6), 2);
  });
  it('adds two decimals less than one rounded to zero', () => {
    assert.strictEqual(calculateNumber(0.4, 0.2), 0);
  });
  it('adds two negative integers', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });
  it('adds one negative integer with one decimal rounded up', () => {
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
  });
  it('adds one negative integer with one decimal rounded down', () => {
    assert.strictEqual(calculateNumber(-1, -3.3), -4);
  });
  it('adds two negative decimals rounded up', () => {
    assert.strictEqual(calculateNumber(-1.6, -3.7), -6);
  });
  it('adds two negative decimals rounded down', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.4), -4);
  });
  it('adds two negative decimals with 5 after the decimal point', () => {
    assert.strictEqual(calculateNumber(-2.5, -3.5), -5);
  });
  it('adds two negative decimals less than one rounded to one', () => {
    assert.strictEqual(calculateNumber(-0.8, -0.6), -2);
  });
  it('adds two negative decimals less than one rounded to zero', () => {
    assert.strictEqual(calculateNumber(-0.4, -0.2), -0);
  });
  it('adds a negative integer and a positive integer', () => {
    assert.strictEqual(calculateNumber(-1, 3), 2);
  });
  it('adds a negative integer and a positive decimal rounded up', () => {
    assert.strictEqual(calculateNumber(-1, 3.7), 3);
  });
  it('adds a negative integer and a positive decimal rounded down', () => {
    assert.strictEqual(calculateNumber(-1, 3.3), 2);
  });
  it('adds a negative decimal and a positive decimal rounded up', () => {
    assert.strictEqual(calculateNumber(-1.6, 3.7), 2);
  });
  it('adds a negative decimal and a positive decimal rounded down', () => {
    assert.strictEqual(calculateNumber(-1.2, 3.4), 2);
  });
  it('adds a negative decimal and a positive decimal with 5 after the decimal point', () => {
    assert.strictEqual(calculateNumber(-2.5, 3.5), 2);
  });
  it('adds a negative decimal and a positive decimal less than one rounded to one', () => {
    assert.strictEqual(calculateNumber(-0.8, 0.6), 0);
  });
  it('adds a negative decimal and a positive decimal less than one rounded to zero', () => {
    assert.strictEqual(calculateNumber(-0.4, 0.2), 0);
  });
  it('adds a positive integer and a negative integer', () => {
    assert.strictEqual(calculateNumber(1, -3), -2);
  });
  it('adds a positive integer and a negative decimal rounded up', () => {
    assert.strictEqual(calculateNumber(1, -3.7), -3);
  });
  it('adds a positive integer and a negative decimal rounded down', () => {
    assert.strictEqual(calculateNumber(1, -3.3), -2);
  });
  it('adds a positive decimal and a negative decimal rounded up', () => {
    assert.strictEqual(calculateNumber(1.6, -3.7), -2);
  });
  it('adds a positive decimal and a negative decimal rounded down', () => {
    assert.strictEqual(calculateNumber(1.2, -3.4), -2);
  });
  it('adds a positive decimal and a negative decimal with 5 after the decimal point', () => {
    assert.strictEqual(calculateNumber(2.5, -3.5), 0);
  });
  it('adds a positive decimal and a negative decimal less than one rounded to one', () => {
    assert.strictEqual(calculateNumber(0.8, -0.6), 0);
  });
  it('adds a positive decimal and a negative decimal less than one rounded to zero', () => {
    assert.strictEqual(calculateNumber(0.4, -0.2), 0);
  });
  it('adds two zeros', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('adds a positive integer and zero', () => {
    assert.strictEqual(calculateNumber(1, 0), 1);
  });
  it('adds a negative integer and zero', () => {
    assert.strictEqual(calculateNumber(-1, 0), -1);
  });
  it('adds zero and a positive integer', () => {
    assert.strictEqual(calculateNumber(0, 1), 1);
  });
  it('adds zero and a negative integer', () => {
    assert.strictEqual(calculateNumber(0, -1), -1);
  });
  it('adds a positive decimal and zero', () => {
    assert.strictEqual(calculateNumber(1.5, 0), 2);
  });
  it('adds a negative decimal and zero', () => {
    assert.strictEqual(calculateNumber(-1.5, 0), -1);
  });
  it('adds zero and a positive decimal', () => {
    assert.strictEqual(calculateNumber(0, 1.5), 2);
  });
  it('adds zero and a negative decimal', () => {
    assert.strictEqual(calculateNumber(0, -1.5), -1);
  });
});
