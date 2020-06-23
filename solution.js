// @ts-check

import Point from './Point.js';
import Segment from './Segment.js';

// BEGIN (write your solution here)
export default (segment) => {
  const beginPoint = segment.beginPoint;
  const endPoint = segment.endPoint;

  return new Segment(new Point(endPoint.x, endPoint.y), new Point(beginPoint.x, beginPoint.y));
};
// END
