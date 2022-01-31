class Rectangle {
    constructor(e1,e2) {
        this.area = e1*e2;
    }
}
class Square extends Rectangle {
    constructor(edge) {
        super(edge,edge);
        this.perimeter = 4*edge;
    }
}
console.log(new Square(5).area);
console.log(new Square(5).perimeter);