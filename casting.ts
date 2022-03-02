
const a: any = 123;
const b: number = <number>a;
const c: number = a as number;

const aa: string = '123';
const bb: number = aa as unknown as number;
