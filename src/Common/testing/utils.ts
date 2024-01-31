export function countOccurrences(arr: string[], targetString: string): number {
  return arr.reduce((result, str) => (str === targetString ? result + 1 : result), 0);
}
