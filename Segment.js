// @ts-check

const getBeginPoint = function() {
  return this.beginPoint;
}

const getEndPoint = function() {
  return this.endPoint;
}

// BEGIN (write your solution here)
export default class Segment {
  constructor(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
  }
  getBeginPoint = getBeginPoint;
  getEndPoint = getEndPoint;
}
// END
