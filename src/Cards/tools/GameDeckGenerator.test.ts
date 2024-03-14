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
    players: 20,
    mafia: 3,
    sheriff: true,
    boss: true,
    doctor: true,
    maniac: true,
    putana: true,
    widow: true,
    psycho: true,
    advocate: true,
    luckyGuy: true,
    journalist: true,
    hypnotizer: true,
    detective: true,
    amur: true
  });
  const deckTitles = generator.createGameDeck().map(({ name }) => name);

  expect(deckTitles.length).toEqual(20);
  expect(countOccurrences(deckTitles, 'Citizen')).toEqual(20 - 16);
  expect(countOccurrences(deckTitles, 'Mafia')).toEqual(3);
  expect(countOccurrences(deckTitles, 'Sheriff')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Boss')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Maniac')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Putana')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Doctor')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Widow')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Psycho')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Advocate')).toEqual(1);
  expect(countOccurrences(deckTitles, 'LuckyGuy')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Journalist')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Hypnotizer')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Detective')).toEqual(1);
  expect(countOccurrences(deckTitles, 'Amur')).toEqual(1);
});
