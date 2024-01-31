import { countOccurrences } from '~/Common/testing';

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
