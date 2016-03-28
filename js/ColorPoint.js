import Point from './Point.js';


class ColorPoint extends Point {

  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
   // return this.color + ' ' + super.toString(); // 调用父类的toString()

    return '('+this.x+','+this.y+','+this.color+')';
  }

}
export default ColorPoint;