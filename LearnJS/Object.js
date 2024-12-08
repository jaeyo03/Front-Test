// 실습문제3
function Person(name,age){
  this.name=name;
  this.age=age;
}

Person.prototype.printInfo = function () {
  console.log(`이름 : ${this.name}`);
  console.log(`나이 : ${this.age}`);
}

function Student(name,age,grade,score){
  Person.call(this, name,age);
  this.grade = grade;
  this.score = score;
}

Student.prototype = Object.create(Person.prototype); // 프로토타입 상속 방법!!! 중요!

Student.prototype.printAddInfo = function () {
  console.log(`학년 : ${this.grade}학년`);
  console.log(`점수 : ${this.score}점`);
}

function Employee2(name,age,dept,salary) {
  Person.call(this, name, age);
  this.dept = dept;
  this.salary = salary;
}

Employee2.prototype = Object.create(Person.prototype);

Employee2.prototype.printInfo = function () {
  console.log(`이름 : ${this.name}`);
  console.log(`나이 : ${this.age}`);
  console.log(`부서 : ${this.dept}`);
  console.log(`월급 : ${this.salary}`);
}

Employee2.prototype.printSalary = function () {
  console.log(`월급 : ${this.salary}`);
}

const person = new Person('최길동',25);
person.printInfo();
console.log()
const stu = new Student('김길동',17,3,80)
stu.printInfo();
console.log()
stu.printAddInfo();
console.log()
const emp = new Employee2('홍길동',35,'영업부',4000000)
emp.printInfo();
console.log()
emp.printSalary();
console.log("-----------------------------------------");

// 실습문제4
class Shape{
  constructor(width,height){
    this.width = width;
    this.height = height;
  }
  print (){
    console.log(`width : ${this.width}`);
    console.log(`height : ${this.height}`);
  }
}

class Triangle extends Shape{
  constructor(width,height) {
    super(width,height);
  }

  // get,set을 하면 속성 처럼 된다.
  get area() {
    const size = this.width * this.height / 2;
    console.log(`area : ${size}`);
  }
}

class Rectangle extends Shape{
  constructor(width,height) {
    super(width,height);
  }
  get area() {
    const size = this.width * this.height;
    console.log(`area : ${size}`);
  }
  get perimeter() {
    const total = (this.width + this.height) * 2;
    console.log(`perimeter : ${total}`);
  }
}

const shape = new Shape(10,20);
shape.print();
console.log();
const triangle = new Triangle(10,20);
triangle.area;
console.log();
triangle.print();
console.log();
const rectangle = new Rectangle(10,20);
rectangle.perimeter;
console.log();
rectangle.area;