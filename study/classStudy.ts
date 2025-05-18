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

// class User {
//   _name: string = "";

//   get name(): string {
//     console.log("name을 가져옵니다");
//     return this._name;
//   }

//   set name(newName: string) {
//     console.log("name을 설정합니다:", newName);
//     this._name = newName;
//   }
// }

// const user = new User();
// user.name = "Alice"; // set 호출됨
// console.log(user.name); // get 호출됨

/*
// Static
class MyClass {
  static x = 0;
  // private static x = 0; => 'x' 속성은 private이며 'MyClass' 클래스 내에서만 액세스할 수 있습니다.
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x); // 출력: 0
MyClass.printX(); // 출력: 0

class User {
  static count = 0; // 모든 인스턴스가 공유하는 전역 상태

  name: string;

  constructor(name: string) {
    this.name = name;
    User.count += 1; // 인스턴스 생성 시 count 증가
  }

  static getUserCount() {
    return User.count;
  }
}

const user1 = new User("Alice");
const user2 = new User("Bob");

console.log(User.getUserCount()); // 출력: 2

class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}

class Parent {
  static version = 1;
}

class Child extends Parent {
  static version = 2;
}

console.log(Parent.version); // 1
console.log(Child.version); // 2 ❗ 의도한 건지 실수한 건지 헷갈릴 수 있음

class Parent2 {
  static greeting = "Hello";
  static greet() {
    console.log(this.greeting); // 여기 this
  }
}

class Child2 extends Parent2 {
  static greeting = "Hi";
}
Parent2.greet(); // 출력: Hello (this = Parent)
Child2.greet(); // 출력: Hi ❗ (this = Child)

class S {
  static name = "S!";
}

// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}
// Preferred (alternative 1)
function doSomething() {}
// Preferred (alternative 2)
const MyHelperObject = {
  doSomething() {},
};
*/

class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }

  static {
    try {
      const lastInstances = loadLastInstances();
      Foo.#count += lastInstances.length;
    } catch {}
  }
}

class User {
  #age = 0;

  get age() {
    return this.#age; // number 타입
  }

  set age(value) {
    this.#age = value; // value: number 로 자동 추론됨
  }
}
