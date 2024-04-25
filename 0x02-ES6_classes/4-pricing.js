import Currency from './3-currency';

export default class Pricing {
  constructor(amount, Currency) {
    this.amount = amount;
    this.Currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get Currency() {
    return this._Currency;
  }

  set Currency(myObj) {
    if (!(myObj instanceof Currency)) {
      throw new TypeError('Currency must be a Currency object');
    }
    this._Currency = myObj;
  }

  displayFullPrice() {
    return `${this._amount} ${this._Currency._name} (${this._Currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
