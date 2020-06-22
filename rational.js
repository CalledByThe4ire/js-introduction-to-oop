// @ts-check

// BEGIN (write your solution here)
const make = (numer, denom) => ({
  numer,
  denom,
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${numer}/${denom}`;
  },
  add(rat) {
    return make(
      this.numer * rat.denom + this.denom * rat.numer,
      this.denom * rat.denom,
    );
  },
});

export default make;
// END
