const typeString = () => {
  const name: string = 'John Doe';
  const animal = 'Rabbit';

  console.info(name);
  console.info(animal);
  console.info(`${name} has ${animal}`);
}

const typeNumber = () => {
  const counter: number = 0;
  const myCounter = 123;
  const phi = 3.14;
}

const typeBoolean = () => {
  const isRunnable: boolean = true;
  
  const isOk = false;
  const isZero = 10 / 10 === 0
}

const typeAny = () => {
  let anything: any;

  anything = 1;
  anything = {};
  anything = 'foo bar';
  anything = new Date();
}

const typeArray = () => {
  const myArr: string[] = [
    'john',
    'plays',
    'drum'
  ]

  const arrStr: Array<string> = [
    'mike',
    'like',
    'eat'
  ]
}

const typeFalsy = () => {
  let mustBeFalsy: undefined | null | '' | 0 | 0n | false; // NaN

  mustBeFalsy = 0
  mustBeFalsy = null
  mustBeFalsy = undefined
  mustBeFalsy = 0n;
}

const typeVoid = () => {
  const noReturnFn = (): void => {}
  console.info('return val:', noReturnFn())
}


const typeBuiltIn = () => {
  const birthday: Date = new Date('2000-01-01')
  
  // @ts-ignore
  const bigNum: BigInteger = 100000000000000000000000n;
  
  const alsoBigNum = BigInt(1000)

  const oneMillion = 1_000_000;

  const mySymbol = Symbol('my')
  
  const theirSymbol: unique symbol = Symbol.for('their')
  const objectKeySymbol = {
    mySymbol: 'my symbol!',
    [theirSymbol]: 'their symbol!',
  }

  const hisSymbol = Symbol('my')

  console.info(objectKeySymbol.mySymbol)
  console.info(objectKeySymbol[theirSymbol])
  // console.info('compare:', mySymbol === hisSymbol)
}
