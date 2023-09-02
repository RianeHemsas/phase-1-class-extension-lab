// Your code here
class Polygon{
    constructor(sides){
        this.sides=sides;
    }
    get countSides() {
        return this.sides.length;
      } 
      get perimeter() {
        return this.sides.reduce((sum, side) => sum + side);
      }
}
class Triangle extends Polygon{
get isValid(){
    
        if (this.sides.length !== 3) {
          return false; 
        }
        const [side1, side2, side3] = this.sides;
        return side1 + side2 > side3 && side2 +side3 > side1 && side3+ side1 > side2;
      }
}
class Square extends Polygon{
    get isValid() {
        if (this.sides.length !== 4) {
          return false; 
        }
    
        const [side1, side2, side3, side4] = this.sides;
        return side1 === side2 && side2 === side3 && side3 === side4;
      }
      get area() {
        if (!this.isValid) {
          return 0; 
        }
    
        const side = this.sides[0];
        return side * side;
      }
}

