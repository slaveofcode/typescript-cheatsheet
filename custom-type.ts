
const literalTypes = () => {
  let places: 'sea' | 'mountain';
  let numbers: 5 | 4 | 3 | 2 | 1;

  places = 'sea';
  places = 'mountain';

  // numbers = 10;
  numbers = 3
  numbers = 1
}

const restType = () => {
  const myCollections: string[] = ['1', '2', '3']

  const myNewCollections = [
    ...myCollections,
    '4',
    '5'
  ]
}

// variadic tuple
const typeTuple = () => {
  const myTup: [string, boolean] = ['John', true]
  
  const anotherTup: [string, number, (a: number, b: number) => boolean] = [
    'john',
    18,
    function (first: number, second: number): boolean {
      return (first + second) % 10 === 0
    }
  ]

  type RestAndBool = [...any[], boolean]
  const restAndBool: RestAndBool = [
    true,
    1,
    2,
    'as',
    true,
  ]

  type StringAndRest = [string, ...any[]]
  const stringAndRest: StringAndRest = [
    '1',
    '2',
    true,
  ]
}

const typeArrayFunction = () => {
  // @ts-ignore
  const arrFns: [() => string] = [
    (): string => {
      return 'valid'
    },
    (a: number, b: number): string => {
      const h = a + b
      return a + b as unknown as string
    }
  ]

  const arrFns2: Array<() => string> = [
    (): string => {
      return 'valid'
    },
  ]

  const objFn: { (): string }[] = [
    (): string => 'still ok',
    (): string => {
      return 'also ok'
    },
  ]
}

const fnJSONType = () => {
  const myJson: { [key: string]: any } = {
    abc: 'foo',
    def: 'bar',
    num: 123
  }
}