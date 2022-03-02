
const returnPromise = (name: string): Promise<string> => {
  return Promise.resolve('hello ' + name);
  // const getUserName = 'Amri';

  // return new Promise((resolve, reject) => {
  //   resolve(getUserName);
  // });
}

const alsoReturnPromise = async (name: string): Promise<string> => {
  return `hello ${name}`;
}

const functionParams = (num1: number, num2: number, multi?: boolean): number => 
  multi
    ? num1 * num2
    : num1 + num2;

const functionParams2 = (params: { index: number, name: string }): void => {
  console.info(params.name, params.index)
}

// Type alias
type FuncArgs1 = [arg1: number, arg2: string]
const myFunc = (...args: FuncArgs1) => {
  console.info(args[0], args[1])
}

type FuncArgs2 = { name: string, age: number }
const myFuncJSONArg = (args: FuncArgs2) => {
  console.info(args.name, args.age)
}

type FuncArgs3 = { name: string, age: number }
const myFuncJSONArg2 = ({ name, age }: FuncArgs2) => {
  console.info(name, age)
}


// interface
interface IArgs {
  name: string,
  age: number,
}

interface IArgs2 extends IArgs {
  address: string;
}

const myFuncJSONArg3 = ({ name, age, address }: IArgs2) => {
  console.info(name, age, address)
}

const fn1 = (par1: string, par2: string) => {
  return par1 + par2
}

fn1('1', '2')
fn1('1', '2')