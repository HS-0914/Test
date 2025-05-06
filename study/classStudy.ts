export {};
// class Point {}

// const pt = new Point();
// pt.x = 1;
// pt.y = 1;

// class Point {
//   x: number;
//   y: number;
// }
// const pt = new Point();
// pt.x = 0;
// pt.y = 0;
// console.log(pt.x);
// console.log(pt.y);

// class Base {
//   x: number;
//   constructor() {
//     this.init();
//   }
//   init() {
//     this.x = 10;
//   }
// }

// class Greeter {
//   readonly name: string = "world";

//   constructor(otherName?: string) {
//     if (otherName !== undefined) {
//       this.name = otherName;
//     }
//   }
// }
// const g = new Greeter("sekai");
// console.log(g.name);

// class Point {
//   x: number;
//   y: number;

//   constructor(x: number = 0, y: number = 0) {
//     this.x = x;
//     this.y = y;
//   }
// }

// const p1 = new Point();
// console.log(p1.x, p1.y); // 0 0

// const p2 = new Point(5, 10);
// console.log(p2.x, p2.y); // 5 10

// class 포인터 {
//   x: number = 0;
//   y: number = 0;

//   // Constructor overloads
//   constructor(x: number, y: number);
//   constructor(fasdafasd: string);
//   constructor(x: string | number, y: number = 0) {
//     // Code logic here
//     console.log("x :", x, " y :", y);
//     console.log(typeof x);
//   }
// }

// const a = new 포인터(2, 4);
// const b = new 포인터("24");

// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name2: string) {
//     // this.name = name2; // ❌ 오류! super() 호출 전에 this 사용 불가
//     super(name2); // ✅ 먼저 부모 생성자 호출
//     console.log(this.name); // 이제는 OK
//   }
// }

// const a = new Dog("a");

class User {
  _name: string = "";

  get name(): string {
    console.log("name을 가져옵니다");
    return this._name;
  }

  set name(newName: string) {
    console.log("name을 설정합니다:", newName);
    this._name = newName;
  }
}

const user = new User();
user.name = "Alice"; // set 호출됨
console.log(user.name); // get 호출됨
