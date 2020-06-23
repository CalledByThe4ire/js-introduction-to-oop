// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
export default class Cart {
  constructor() {
    this.cart = [];
  }

  addItem(good, count) {
    this.cart.push({ good, count });
  }

  getItems() {
    return this.cart;
  }

  getCount() {
    return this.cart.reduce((acc, { count }) => acc + count, 0);
  }

  getCost() {
    return this.cart.reduce(
      (acc, { good: { price }, count }) => acc + price * count,
      0,
    );
  }
}
// END
