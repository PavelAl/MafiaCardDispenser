import { Card } from '~/Cards/types';
import { GameSettings } from '~/GameSetup';

import { checkThatMafiaSitsToClose } from './qualityCheck';

function makeTestDeck(length: number, mafiaIndexes: number[], bossIndex: number) {
  const result: Card[] = [];

  for (let i = 0; i < length; i++) {
    if (i === bossIndex) {
      result.push({ name: 'Boss', role: 'boss' });
    } else if (mafiaIndexes.includes(i)) {
      result.push({ name: 'Mafia', role: 'mafia' });
    } else {
      result.push({ name: 'Citizen', role: 'citizen' });
    }
  }

  return result;
}

test('checkThatMafiaSitsToClose 4 mafia', () => {
  const gameSettings: GameSettings = {
    players: 12,
    mafia: 3,
    sheriff: true,
    boss: true,
    doctor: true,
    maniac: true,
    putana: true
  };

  const toClose1: Card[] = makeTestDeck(gameSettings.players, [0, 1, 2], 3);

  const toClose2: Card[] = makeTestDeck(gameSettings.players, [0, 1, 10], 11);
  const toClose3: Card[] = makeTestDeck(gameSettings.players, [0, 2, 10], 11);

  const toClose4: Card[] = makeTestDeck(gameSettings.players, [0, 2, 3], 4);

  const fine: Card[] = makeTestDeck(gameSettings.players, [0, 1, 4], 5);

  expect(checkThatMafiaSitsToClose(toClose1, gameSettings)).toBe(true);
  expect(checkThatMafiaSitsToClose(toClose2, gameSettings)).toBe(true);
  expect(checkThatMafiaSitsToClose(toClose3, gameSettings)).toBe(true);
  expect(checkThatMafiaSitsToClose(toClose4, gameSettings)).toBe(true);
  expect(checkThatMafiaSitsToClose(fine, gameSettings)).toBe(false);
});

test('checkThatMafiaSitsToClose 3 mafia', () => {
  const gameSettings: GameSettings = {
    players: 12,
    mafia: 2,
    sheriff: true,
    boss: true,
    doctor: true,
    maniac: true,
    putana: true
  };

  const toClose1: Card[] = makeTestDeck(gameSettings.players, [0, 1], 2);

  const toClose2: Card[] = makeTestDeck(gameSettings.players, [0, 1], 11);
  const toClose3: Card[] = makeTestDeck(gameSettings.players, [0, 10], 11);

  const fine: Card[] = makeTestDeck(gameSettings.players, [0, 1], 5);

  expect(checkThatMafiaSitsToClose(toClose1, gameSettings)).toBe(true);
  expect(checkThatMafiaSitsToClose(toClose2, gameSettings)).toBe(true);
  expect(checkThatMafiaSitsToClose(toClose3, gameSettings)).toBe(true);

  expect(checkThatMafiaSitsToClose(fine, gameSettings)).toBe(false);
});
