// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
export default class Cart {
  constructor() {
    this.items = [];
  }

  addItem(good, count) {
    this.items.push({ good, count });
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return _.sumBy(this.items, (item) => item.count);
  }

  getCost() {
    return _.sumBy(this.items, (item) => item.good.price * item.count);
  }
}
// END
