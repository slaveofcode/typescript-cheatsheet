
const spreading = () => {
  const animals: string[] = [
    'Horse',
    'Rabbit',
    'Giraffe'
  ]

  console.info(...animals)
}

const unionTypes = () => {
  let year: string | number;

  year = 2022
  year = '2022'
}

// logical assignment

const assignIfTruthy = () => {
  let a;
  let b = 1;

  // set a = 'foo' if truthy
  // a && (a = 'foo');
  a &&= 'foo'

  // set b = 5 if truthy
  b &&= 5

  console.info('a', a)
  console.info('b', b)
}

const assignIfFalsy = () => {
  let a;
  let b = 1;

  // set a = 'foo' if falsy
  a ||= 'foo'

  // will not set
  b ||= 5

  console.info('a', a)
  console.info('b', b)
}

const assignIfNullUndef = () => {
  let a;
  let b = 0;

  // set a = 'foo' if null or undefined
  a ??= 'foo'

  // will not set
  b ??= 5

  console.info('a', a)
  console.info('b', b)
}

assignIfNullUndef()