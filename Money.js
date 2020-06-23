// @ts-check
// BEGIN (write your solution here)
const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.format = function format() {
  // bad design (pass undefined the function), but it is js
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currency = this.getCurrency();
  if (currency === newCurrency) {
    return new Money(this.getValue(), currency);
  }
  const newValue = this.getValue() * rates[currency][newCurrency];
  return new Money(newValue, newCurrency);
};

Money.prototype.add = function add(money) {
  const convertedMoney = money.exchangeTo(this.getCurrency());
  const additionalValue = convertedMoney.getValue();
  return new Money(this.getValue() + additionalValue, this.getCurrency());
};
// END
