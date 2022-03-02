const createNewCollectionStr = (colls: string[]): string[] => {
  const newColls: string[] = []
  for (const item of colls) {
    newColls.push(item)
  }

  return newColls;
}

const createNewCollectionNum = (colls: number[]): number[] => {
  const newColls: number[] = []
  for (const item of colls) {
    newColls.push(item)
  }

  return newColls;
}

const createNewCollectionBool = (colls: boolean[]): boolean[] => {
  const newColls: boolean[] = []
  for (const item of colls) {
    newColls.push(item)
  }

  return newColls;
}

const createNewCollection = <T>(colls: T[]): T[] => {
  const newColls: T[] = []
  for (const item of colls) {
    newColls.push(item)
  }

  return newColls;
}

const newCollStr = createNewCollection<string>(['a', 'b', 'c'])
const newCollNum = createNewCollection<number>([1, 2, 3])
const newCollBool = createNewCollection<boolean>([true, false, false])
const newCollAny = createNewCollection<any>([true, false, false])