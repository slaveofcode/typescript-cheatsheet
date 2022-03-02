// class

class Animal {
  private name: string;
  private leg: number;

  constructor(name: string, leg: number) {
    this.name = name;
    this.leg = leg;
  }

  show() {
    console.info(`${this.name} has ${this.leg} legs`)
  }
}

const objAnimal = new Animal('Chicken', 2)


class Animal2 {
  constructor(private name: string, protected leg: number) { }

  show() {
    console.info(`${this.name} has ${this.leg} legs`)
  }
}

class MyClass {
  constructor(private readonly SingletonObj: any) { }

  modify() {
    // this.SingletonObj = 12334;
    this.SingletonObj.abc
  }

  static justGetIt(): string {
    return 'here you go';
  }
}

MyClass.justGetIt()

// Extends
class MyClassAnimal extends Animal2 {
  constructor() {
    super('Elephant', 4)

    this.show()
    this.leg
  }
}


// interface 1
interface XFunc {
  isAccessible: boolean;
  readonly onlySee: string;

  abc(): string,
  bca(num1: number, num2: number): void
}

class MyXClass implements XFunc {
  isAccessible: boolean = false;
  readonly onlySee: string = 'ssss';

  abc(): string {
    return 'abc';
  }

  bca(num1: number, num2: number): void {
    console.info(num1 + num2);
  }
}

// interface 2
interface MathFunc {
  (num1: number, num2: number): number
}

const AddOp: MathFunc = (num1: number, num2: number) => {
  return num1 + num2;
}

const SubOp: MathFunc = (num1: number, num2: number) => {
  return num1 - num2;
}

const MultOp: MathFunc = (num1: number, num2: number) => {
  return num1 * num2;
}

const DivOp: MathFunc = (num1: number, num2: number) => {
  return num1 / num2;
}

// extend interface

interface IArgs {
  name: string,
  age: number,
}

interface IArgs2 extends IArgs {
  address: string;
}


// Intersection
interface A {
  A1: string;
  A2: boolean;
}

interface B {
  B1: number;
}

type AB = A & B;

const withIntersectionParam = (param: AB) => {
  param.A1 = 'abc'
  param.B1 = 456;
  console.log(param)
}
