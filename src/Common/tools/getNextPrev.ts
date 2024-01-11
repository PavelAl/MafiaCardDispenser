export function getNext<T>(array: T[], current?: T): T {
  const nextIndex = array.findIndex(str => str === current) + 1;
  const newStrIndex = nextIndex > array.length - 1 ? 0 : nextIndex;

  return array[newStrIndex];
}

export function getPrevious<T>(array: T[], current?: T): T {
  const prevIndex = array.findIndex(str => str === current) - 1;
  const newStrIndex = prevIndex < 0 ? array.length - 1 : prevIndex;

  return array[newStrIndex];
}
