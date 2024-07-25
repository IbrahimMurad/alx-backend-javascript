const calculateNumber = require("./1-calcul");
const chai = require('chai');
const { expect } = chai;

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('adds two integers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('adds one integer with one decimal rounded up', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('adds one integer with one decimal rounded down', () => {
      expect(calculateNumber('SUM', 1, 3.3)).to.equal(4);
    });
    it('adds two decimals rounded up', () => {
      expect(calculateNumber('SUM', 1.6, 3.7)).to.equal(6);
    });
    it('adds two decimals rounded down', () => {
      expect(calculateNumber('SUM', 1.2, 3.4)).to.equal(4);
    });
    it('adds two decimals with 5 after the decimal point', () => {
      expect(calculateNumber('SUM', 2.5, 3.5)).to.equal(7);
    });
    it('adds two decimals less than one rounded to one', () => {
      expect(calculateNumber('SUM', 0.8, 0.6)).to.equal(2);
    });
    it('adds two decimals less than one rounded to zero', () => {
      expect(calculateNumber('SUM', 0.4, 0.2)).to.equal(0);
    });
    it('adds two negative integers', () => {
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });
    it('adds one negative integer with one decimal rounded up', () => {
      expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
    });
    it('adds one negative integer with one decimal rounded down', () => {
      expect(calculateNumber('SUM', -1, -3.3)).to.equal(-4);
    });
    it('adds two negative decimals rounded up', () => {
      expect(calculateNumber('SUM', -1.6, -3.7)).to.equal(-6);
    });
    it('adds two negative decimals rounded down', () => {
      expect(calculateNumber('SUM', -1.2, -3.4)).to.equal(-4);
    });
    it('adds two negative decimals with 5 after the decimal point', () => {
      expect(calculateNumber('SUM', -2.5, -3.5)).to.equal(-5);
    });
    it('adds two negative decimals less than one rounded to one', () => {
      expect(calculateNumber('SUM', -0.8, -0.6)).to.equal(-2);
    });
    it('adds two negative decimals less than one rounded to zero', () => {
      expect(calculateNumber('SUM', -0.4, -0.2)).to.equal(-0);
    });
    it('adds a negative integer and a positive integer', () => {
      expect(calculateNumber('SUM', -1, 3)).to.equal(2);
    });
    it('adds a negative integer and a positive decimal rounded up', () => {
      expect(calculateNumber('SUM', -1, 3.7)).to.equal(3);
    });
    it('adds a negative integer and a positive decimal rounded down', () => {
      expect(calculateNumber('SUM', -1, 3.3)).to.equal(2);
    });
    it('adds a negative decimal and a positive decimal rounded up', () => {
      expect(calculateNumber('SUM', -1.6, 3.7)).to.equal(2);
    });
    it('adds a negative decimal and a positive decimal rounded down', () => {
      expect(calculateNumber('SUM', -1.2, 3.4)).to.equal(2);
    });
    it('adds a negative decimal and a positive decimal with 5 after the decimal point', () => {
      expect(calculateNumber('SUM', -2.5, 3.5)).to.equal(2);
    });
    it('adds a negative decimal and a positive decimal less than one rounded to one', () => {
      expect(calculateNumber('SUM', -0.8, 0.6)).to.equal(0);
    });
    it('adds a negative decimal and a positive decimal less than one rounded to zero', () => {
      expect(calculateNumber('SUM', -0.4, 0.2)).to.equal(0);
    });
    it('adds a positive integer and a negative integer', () => {
      expect(calculateNumber('SUM', 1, -3)).to.equal(-2);
    });
    it('adds a positive integer and a negative decimal rounded up', () => {
      expect(calculateNumber('SUM', 1, -3.7)).to.equal(-3);
    });
    it('adds a positive integer and a negative decimal rounded down', () => {
      expect(calculateNumber('SUM', 1, -3.3)).to.equal(-2);
    });
    it('adds a positive decimal and a negative decimal rounded up', () => {
      expect(calculateNumber('SUM', 1.6, -3.7)).to.equal(-2);
    });
    it('adds a positive decimal and a negative decimal rounded down', () => {
      expect(calculateNumber('SUM', 1.2, -3.4)).to.equal(-2);
    });
    it('adds a positive decimal and a negative decimal with 5 after the decimal point', () => {
      expect(calculateNumber('SUM', 2.5, -3.5)).to.equal(0);
    });
    it('adds a positive decimal and a negative decimal less than one rounded to one', () => {
      expect(calculateNumber('SUM', 0.8, -0.6)).to.equal(0);
    });
    it('adds a positive decimal and a negative decimal less than one rounded to zero', () => {
      expect(calculateNumber('SUM', 0.4, -0.2)).to.equal(0);
    });
    it('adds two zeros', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
    it('adds a positive integer and zero', () => {
      expect(calculateNumber('SUM', 1, 0)).to.equal(1);
    });
    it('adds a negative integer and zero', () => {
      expect(calculateNumber('SUM', -1, 0)).to.equal(-1);
    });
    it('adds zero and a positive integer', () => {
      expect(calculateNumber('SUM', 0, 1)).to.equal(1);
    });
    it('adds zero and a negative integer', () => {
      expect(calculateNumber('SUM', 0, -1)).to.equal(-1);
    });
    it('adds a positive decimal and zero', () => {
      expect(calculateNumber('SUM', 1.5, 0)).to.equal(2);
    });
    it('adds a negative decimal and zero', () => {
      expect(calculateNumber('SUM', -1.5, 0)).to.equal(-1);
    });
    it('adds zero and a positive decimal', () => {
      expect(calculateNumber('SUM', 0, 1.5)).to.equal(2);
    });
    it('adds zero and a negative decimal', () => {
      expect(calculateNumber('SUM', 0, -1.5)).to.equal(-1);
    });
  });
  describe('SUBTRACT', () => {
    it('subtracts two positive integers', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });
    it('subtracts one integer with one decimal rounded up', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
    });
    it('subtracts one integer with one decimal rounded down', () => {
      expect(calculateNumber('SUBTRACT', 3.3, 1)).to.equal(2);
    });
    it('subtracts two decimals rounded up', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1.6)).to.equal(2);
    });
    it('subtracts two decimals rounded down', () => {
      expect(calculateNumber('SUBTRACT', 3.4, 1.2)).to.equal(2);
    });
    it('subtracts two decimals with 5 after the decimal point', () => {
      expect(calculateNumber('SUBTRACT', 3.5, 2.5)).to.equal(1);
    });
    it('subtracts two decimals less than one rounded to one', () => {
      expect(calculateNumber('SUBTRACT', 0.6, 0.8)).to.equal(0);
    });
    it('subtracts two decimals less than one rounded to zero', () => {
      expect(calculateNumber('SUBTRACT', 0.2, 0.4)).to.equal(0);
    });
    it('subtracts two negative integers', () => {
      expect(calculateNumber('SUBTRACT', -3, -1)).to.equal(-2);
    });
    it('subtracts one negative integer with one decimal rounded up', () => {
      expect(calculateNumber('SUBTRACT', -3.7, -1)).to.equal(-3);
    });
    it('subtracts one negative integer with one decimal rounded down', () => {
      expect(calculateNumber('SUBTRACT', -3.3, -1)).to.equal(-2);
    });
    it('subtracts two negative decimals rounded up', () => {
      expect(calculateNumber('SUBTRACT', -3.7, -1.6)).to.equal(-2);
    });
    it('subtracts two negative decimals rounded down', () => {
      expect(calculateNumber('SUBTRACT', -3.4, -1.2)).to.equal(-2);
    });
    it('subtracts two negative decimals with 5 after the decimal point', () => {
      expect(calculateNumber('SUBTRACT', -3.5, -2.5)).to.equal(-1);
    });
    it('subtracts two negative decimals less than one rounded to one', () => {
      expect(calculateNumber('SUBTRACT', -0.6, -0.8)).to.equal(0);
    });
    it('subtracts two negative decimals less than one rounded to zero', () => {
      expect(calculateNumber('SUBTRACT', -0.2, -0.4)).to.equal(0);
    });
    it('subtracts a negative integer from a positive integer', () => {
      expect(calculateNumber('SUBTRACT', 3, -1)).to.equal(4);
    });
    it('subtracts a negative integer from a positive decimal rounded up', () => {
      expect(calculateNumber('SUBTRACT', 3.7, -1)).to.equal(5);
    });
    it('subtracts a negative integer from a positive decimal rounded down', () => {
      expect(calculateNumber('SUBTRACT', 3.3, -1)).to.equal(4);
    });
    it('subtracts a negative decimal from a positive decimal rounded up', () => {
      expect(calculateNumber('SUBTRACT', 3.7, -1.6)).to.equal(6);
    });
    it('subtracts a negative decimal from a positive decimal rounded down', () => {
      expect(calculateNumber('SUBTRACT', 3.4, -1.2)).to.equal(4);
    });
    it('subtracts a negative decimal from a positive decimal with 5 after the decimal point', () => {
      expect(calculateNumber('SUBTRACT', 3.5, -2.5)).to.equal(6);
    });
    it('subtracts a negative decimal from a positive decimal less than one rounded to one', () => {
      expect(calculateNumber('SUBTRACT', 0.6, -0.8)).to.equal(2);
    });
    it('subtracts a negative decimal from a positive decimal less than one rounded to zero', () => {
      expect(calculateNumber('SUBTRACT', 0.2, -0.4)).to.equal(0);
    });
    it('subtracts one positive rounded up and one negative rounded down', () => {
      expect(calculateNumber('SUBTRACT', 0.6, -0.4)).to.equal(1);
    });
    it('subtracts one positive rounded up and one negative up', () => {
      expect(calculateNumber('SUBTRACT', 0.6, -0.6)).to.equal(2);
    });
    it('subtracts a positive integer from a negative integer', () => {
      expect(calculateNumber('SUBTRACT', -3, 1)).to.equal(-4);
    });
    it('subtracts a positive integer from a negative decimal rounded up', () => {
      expect(calculateNumber('SUBTRACT', -3.7, 1)).to.equal(-5);
    });
    it('subtracts a positive integer from a negative decimal rounded down', () => {
      expect(calculateNumber('SUBTRACT', -3.3, 1)).to.equal(-4);
    });
    it('subtracts a positive decimal from a negative decimal rounded up', () => {
      expect(calculateNumber('SUBTRACT', -3.7, 1.6)).to.equal(-6);
    });
    it('subtracts a positive decimal from a negative decimal rounded down', () => {
      expect(calculateNumber('SUBTRACT', -3.4, 1.2)).to.equal(-4);
    });
    it('subtracts a positive decimal from a negative decimal with 5 after the decimal point', () => {
      expect(calculateNumber('SUBTRACT', -3.5, 2.5)).to.equal(-6);
    });
    it('subtracts a positive decimal from a negative decimal less than one rounded to one', () => {
      expect(calculateNumber('SUBTRACT', -0.6, 0.8)).to.equal(-2);
    });
    it('subtracts a positive decimal from a negative decimal less than one rounded to zero', () => {
      expect(calculateNumber('SUBTRACT', -0.2, 0.4)).to.equal(-0);
    });
    it('subtracts two zeros', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
    it('subtracts a positive integer from zero', () => {
      expect(calculateNumber('SUBTRACT', 0, 1)).to.equal(-1);
    });
    it('subtracts a negative integer from zero', () => {
      expect(calculateNumber('SUBTRACT', 0, -1)).to.equal(1);
    });
    it('subtracts zero from a positive integer', () => {
      expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
    });
    it('subtracts zero from a negative integer', () => {
      expect(calculateNumber('SUBTRACT', -1, 0)).to.equal(-1);
    });
    it('subtracts a positive decimal from zero', () => {
      expect(calculateNumber('SUBTRACT', 0, 1.5)).to.equal(-2);
    });
    it('subtracts a negative decimal from zero', () => {
      expect(calculateNumber('SUBTRACT', 0, -1.5)).to.equal(1);
    });
    it('subtracts zero from a positive decimal', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 0)).to.equal(2);
    });
    it('subtracts zero from a negative decimal', () => {
      expect(calculateNumber('SUBTRACT', -1.5, 0)).to.equal(-1);
    });
  });
  describe('DIVIDE', () => {
    it('divides two positive  divisable integers', () => {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });
    it('divides one integer with one decimal rounded up (divisable)', () => {
      expect(calculateNumber('DIVIDE', 5.7, 3)).to.equal(2);
    });
    it('divides one integer with one decimal rounded down (divisable)', () => {
      expect(calculateNumber('DIVIDE', 6.3, 3)).to.equal(2);
    });
    it('divides one integer with one decimal with 5 after the decimal (divisable)', () => {
      expect(calculateNumber('DIVIDE', 5.5, 3)).to.equal(2);
    });
    it('divies one decimal rounded up with one integer (divisable)', () => {
      expect(calculateNumber('DIVIDE', 6, 2.7)).to.equal(2);
    });
    it('divies one decimal rounded down with one integer (divisable)', () => {
      expect(calculateNumber('DIVIDE', 6, 3.3)).to.equal(2);
    });
    it('divides one decimal with 5 after the decimal with one integer (divisable)', () => {
      expect(calculateNumber('DIVIDE', 6, 2.5)).to.equal(2);
    });
    it('diviedes two decimals rounded up (divisable)', () => {
      expect(calculateNumber('DIVIDE', 5.7, 2.7)).to.equal(2);
    });
    it('diviedes two decimals rounded down (divisable)', () => {
      expect(calculateNumber('DIVIDE', 6.3, 3.3)).to.equal(2);
    });
    it('divides two decimals with 5 after the decimal point (divisable)', () => {
      expect(calculateNumber('DIVIDE', 5.5, 2.5)).to.equal(2);
    });
    it('divides two negative integers (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6, -3)).to.equal(2);
    });
    it('divides one negative integer with one decimal rounded up (divisable)', () => {
      expect(calculateNumber('DIVIDE', -5.7, -3)).to.equal(2);
    });
    it('divides one negative integer with one decimal rounded down (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6.3, -3)).to.equal(2);
    });
    it('divides one negative integer with one decimal with 5 after the decimal (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6.5, -3)).to.equal(2);
    });
    it('divies one negative decimal rounded up with one integer (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6, -2.7)).to.equal(2);
    });
    it('divies one negative decimal rounded down with one integer (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6, -3.3)).to.equal(2);
    });
    it('divides one negative decimal with 5 after the decimal with one integer (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6, -3.5)).to.equal(2);
    });
    it('diviedes two negative decimals rounded up (divisable)', () => {
      expect(calculateNumber('DIVIDE', -5.7, -2.7)).to.equal(2);
    });
    it('diviedes two negative decimals rounded down (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6.3, -3.3)).to.equal(2);
    });
    it('divides two negative decimals with 5 after the decimal point (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6.5, -3.5)).to.equal(2);
    });
    it('divides a negative integer by a positive integer (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6, 3)).to.equal(-2);
    });
    it('divides a negative integer by a positive decimal rounded up (divisable)', () => {
      expect(calculateNumber('DIVIDE', -5.7, 3)).to.equal(-2);
    });
    it('divides a negative integer by a positive decimal rounded down (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6.3, 3)).to.equal(-2);
    });
    it('divides one positive integer with one decimal with 5 after the decimal (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6.5, 3)).to.equal(-2);
    });
    it('divides a negative decimal by a positive decimal rounded up (divisable)', () => {
      expect(calculateNumber('DIVIDE', -5.7, 2.7)).to.equal(-2);
    });
    it('divides a negative decimal by a positive decimal rounded down (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6.3, 3.3)).to.equal(-2);
    });
    it('divides a negative decimal by a positive decimal with 5 after the decimal point (divisable)', () => {
      expect(calculateNumber('DIVIDE', -6.5, 2.5)).to.equal(-2);
    });
    it('divides two positive decimals rounded to one', () => {
      expect(calculateNumber('DIVIDE', 0.8, 0.7)).to.equal(1);
    });
    it('divides two positive decimals rounded to zero', () => {
      expect(calculateNumber('DIVIDE', 0.4, 0.3)).to.equal('Error');
    });
    it('divides two negative decimals rounded to one', () => {
      expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
    });
    it('divides two negative decimals rounded to zero', () => {
      expect(calculateNumber('DIVIDE', -0.4, -0.3)).to.equal('Error');
    });
    it('divides a positive decimal by a negative decimal rounded to one', () => {
      expect(calculateNumber('DIVIDE', 0.8, -0.7)).to.equal(-1);
    });
    it('divides a positive decimal by a negative decimal rounded to zero', () => {
      expect(calculateNumber('DIVIDE', 0.4, -0.3)).to.equal('Error');
    });
    it('divides a negative decimal by a positive decimal rounded to one', () => {
      expect(calculateNumber('DIVIDE', -0.8, 0.7)).to.equal(-1);
    });
    it('divides a negative decimal by a positive decimal rounded to zero', () => {
      expect(calculateNumber('DIVIDE', -0.4, 0.3)).to.equal('Error');
    });
    it('divides two positive halfs', () => {
      expect(calculateNumber('DIVIDE', 0.5, 0.5)).to.equal(1);
    });
    it('divides two negative halfs', () => {
      expect(calculateNumber('DIVIDE', -0.5, -0.5)).to.equal('Error');
    });
    it('divides a positive half by a negative half', () => {
      expect(calculateNumber('DIVIDE', 0.5, -0.5)).to.equal('Error');
    });
    it('divides two zeros', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
    it('divides a positive integer by zero', () => {
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
    it('divides a negative integer by zero', () => {
      expect(calculateNumber('DIVIDE', -1, 0)).to.equal('Error');
    });
    it('divides zero by a positive integer', () => {
      expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
    });
    it('divides zero by a negative integer', () => {
      expect(calculateNumber('DIVIDE', 0, -1)).to.equal(-0);
    });
    it('divides a positive decimal by zero', () => {
      expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });
    it('divides a negative decimal by zero', () => {
      expect(calculateNumber('DIVIDE', -1.5, 0)).to.equal('Error');
    });
    it('two positive integers (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
    });
    it('one integer with one decimal rounded up and one integer (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 4.7, 2)).to.equal(2.5);
    });
    it('one integer with one decimal rounded down and one integer (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 5.3, 2)).to.equal(2.5);
    });
    it('one integer with 5 after the decimal and one integer (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 4.5, 2)).to.equal(2.5);
    });
    it('one integer and one integer with one decimal rounded up (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 5, 1.7)).to.equal(2.5);
    });
    it('one integer and one integer with one decimal rounded down (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 5, 2.3)).to.equal(2.5);
    });
    it('one integer and one integer with 5 after the decimal (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 5, 1.5)).to.equal(2.5);
    });
    it('two decimals rounded up (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 4.7, 1.7)).to.equal(2.5);
    });
    it('two decimals rounded down (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 5.3, 2.3)).to.equal(2.5);
    });
    it('two decimals with 5 after the decimal point (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', 4.5, 1.5)).to.equal(2.5);
    });
    it('two negative integers (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -5, -2)).to.equal(2.5);
    });
    it('one negative integer with one decimal rounded up (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -4.7, -2)).to.equal(2.5);
    });
    it('one negative integer with one decimal rounded down (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -5.3, -2)).to.equal(2.5);
    });
    it('one negative integer with 5 after the decimal (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -5.5, -2)).to.equal(2.5);
    });
    it('one negative integer and one integer with one decimal rounded up (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -5, -1.7)).to.equal(2.5);
    });
    it('one negative integer and one integer with one decimal rounded down (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -5, -2.3)).to.equal(2.5);
    });
    it('one negative integer and one integer with 5 after the decimal (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -5, -2.5)).to.equal(2.5);
    });
    it('two negative decimals rounded up (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -4.7, -1.7)).to.equal(2.5);
    });
    it('two negative decimals rounded down (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -5.3, -2.3)).to.equal(2.5);
    });
    it('two negative decimals with 5 after the decimal point (non-divisable)', () => {
      expect(calculateNumber('DIVIDE', -5.5, -2.5)).to.equal(2.5);
    });
  });
});
