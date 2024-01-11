export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];

  for (let i = 0; i < shuffledArray.length - 1; i++) {
    const random = Math.floor(Math.random() * (shuffledArray.length - 1) + 1);
    // console.log(random);
    const j = random;
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // for (let i = 0; i > shuffledArray.length - 1; i++) {
  //   const j = Math.floor(Math.random() * (i - 1));
  //   [shuffledArray[j], shuffledArray[i]] = [shuffledArray[i], shuffledArray[j]];
  // }

  return shuffledArray;

  // return shuffledArray.sort(() => Math.random() - 0.5);
}
