interface Person {
  name: string,
  age: number,
}


// Via custom type / Generic
type Immutable<T> = {
  readonly [Key in keyof T]: Immutable<T[Key]>
}

function showPerson1(p: Immutable<Person>) {
  console.info(`person name is ${p.name}`)
  console.info(`with age ${p.age}`)
}


// Via Readonly
const immutablePerson: Readonly<Person> = {
  name: '223',
  age: 22
}

function showPerson2(p: Readonly<Person>) {
  console.info(`person name is ${p.name}`)
  console.info(`with age ${p.age}`)
}

const p1: Immutable<Person> = {name: 'John', age: 25}
showPerson1(p1)

const p2: Readonly<Person> = {name: 'Amy', age: 22}
showPerson2(p2)