import { countOccurrences } from '~/testing/utils';

import { GameDeckGenerator } from './GameDeckGenerator';

test('Only mafia', () => {
  const generator = new GameDeckGenerator({
    players: 10,
    mafia: 3
  });
  const deckTitles = generator.createGameDeck().map(({ name }) => name);

  expect(deckTitles.length).toEqual(10);
  expect(countOccurrences(deckTitles, 'Citizen')).toEqual(7);
  expect(countOccurrences(deckTitles, 'Mafia')).toEqual(3);
});

test('Mafia and sherif', () => {
  const generator = new GameDeckGenerator({
    players: 10,
    mafia: 3,
    sheriff: true
  });
  const deckTitles = generator.createGameDeck().map(({ name }) => name);

  expect(deckTitles.length).toEqual(10);
  expect(countOccurrences(deckTitles, 'Citizen')).toEqual(6);
  expect(countOccurrences(deckTitles, 'Mafia')).toEqual(3);
  expect(countOccurrences(deckTitles, 'Sheriff')).toEqual(1);
});

test('shuffle', () => {
  const generator = new GameDeckGenerator({
    players: 16,
    mafia: 3,
    sheriff: true,
    boss: true,
    doctor: true,
    maniac: true,
    putana: true
  });

  const deck1 = generator.createGameDeck();
  const deck2 = generator.createGameDeckLotShuffle();
  const deck3 = generator.createGameDeckLotShuffle();
  const deck4 = generator.createGameDeckLotShuffle();
  const deck5 = generator.createGameDeckLotShuffle();

  const combinedArray = deck1.map((item, index) => ({
    value1: item.role,
    value2: deck2[index].role,
    value3: deck3[index].role,
    value4: deck4[index].role,
    value5: deck5[index].role
  }));

  // eslint-disable-next-line no-console
  console.table(combinedArray);
});

test('All roles', () => {
  const generator = new GameDeckGenerator({
    players: 16,
    mafia: 3,
    sheriff: true,
    boss: true,
    doctor: true,
    maniac: true,
    putana: true
  });
  const deckTitles = generator.createGameDeck().map(({ name }) => name);

  expect(deckTitles.length).toEqual(16);
  expect(countOccurrences(deckTitles, 'Citizen')).toEqual(16 - 8);
  expect(countOccurrences(deckTitles, 'Mafia')).toEqual(3);
  expect(countOccurrences(deckTitles, 'Sheriff')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Boss')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Maniac')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Putana')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Doctor')).toEqual(1);
});
