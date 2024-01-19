export function randomShuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export function shuffleArray<T>(array: T[]): T[] {
  const { section1, section2, section3, section4 } = splitInFourSections<T>(array);

  // Randomly switch cards between sections
  const shuffledSection1to3 = shuffleBetweenSections(section1, section3);
  const shuffledSection2to4 = shuffleBetweenSections(section2, section4);

  // Concatenate the shuffled sections to get the final shuffled array
  return randomShuffleArray([...shuffledSection2to4, ...shuffledSection1to3]);
}

function splitInFourSections<T>(array: T[]) {
  const length = array.length;
  const mid = Math.floor(length / 2);
  const quarter = Math.floor(mid / 2);

  // Split the array into 4 sections
  const section1 = array.slice(0, quarter);
  const section2 = array.slice(quarter, mid);
  const section3 = array.slice(mid, mid + quarter);
  const section4 = array.slice(mid + quarter);

  return { section1, section2, section3, section4 };
}

function shuffleBetweenSections<T>(section1: T[], section2: T[]): T[] {
  return randomShuffleArray([...section1, ...section2]);
}
