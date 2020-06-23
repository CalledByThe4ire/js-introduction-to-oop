/* eslint-disable no-use-before-define */
// @ts-check
// BEGIN (write your solution here)
function getValue() {
  return this.value;
}

function getCurrency() {
  return this.currency;
}

function exchangeTo(currency) {
  const currentCurrency = this.getCurrency();

  if (currency === currentCurrency) {
    return new Money(this.getValue());
  }

  switch (currency) {
    case 'usd':
      return new Money(this.getValue() * 1.2);
    case 'eur':
      return new Money(this.getValue() * 0.7);
    default:
      throw new Error(`unknown currency: ${currency}`);
  }
}

function add(money) {
  return new Money(
    this.getValue() + money.exchangeTo(this.getCurrency()).getValue(),
    this.getCurrency(),
  );
}

function format() {
  return `${
    this.getCurrency() === 'usd' ? '$' : '€'
  }${this.getValue().toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default class Money {
  constructor(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }
}

Money.prototype.getValue = getValue;
Money.prototype.getCurrency = getCurrency;
Money.prototype.exchangeTo = exchangeTo;
Money.prototype.add = add;
Money.prototype.format = format;
// END
