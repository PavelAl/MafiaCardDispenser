/* eslint-disable no-console */
import { GameDeckGenerator } from '../GameDeckGenerator';

import { GameSettings } from '~/GameSetup/types';

import { checkThatMafiaSitsToClose } from './qualityCheck';
import { simulateNumberOfGames } from './tools';

test('all mafia sit together', () => {
  const gameSettings: GameSettings = {
    players: 12,
    mafia: 3,
    sheriff: true,
    boss: true,
    doctor: true,
    maniac: true,
    putana: true
  };

  const generator = new GameDeckGenerator(gameSettings);

  let accurances = 0;

  const tryes = 10000;

  for (let i = 0; i < tryes; i++) {
    const gameDeck = generator.createGameDeck();

    const allMafiaSitTogether = checkThatMafiaSitsToClose(gameDeck, gameSettings);

    accurances = allMafiaSitTogether ? accurances + 1 : accurances;
  }

  console.log('Chance for mafia sits together', ((accurances / tryes) * 100).toFixed(2));
});

test('shuffle', () => {
  const numberOfGames = 8;
  const gameSettings: GameSettings = {
    players: 12,
    mafia: 2,
    sheriff: true,
    boss: true,
    doctor: true,
    maniac: true,
    putana: true
  };

  const citizenChances: { [key: string]: number } = {};

  const tryies = 1000;
  console.log(simulateNumberOfGames(gameSettings, numberOfGames).map(r => r.citizen));

  for (let i = 0; i < tryies; i++) {
    const citizens = simulateNumberOfGames(gameSettings, numberOfGames).map(r => r.citizen);

    for (const citizen of citizens) {
      citizenChances[citizen] = (citizenChances[citizen] ?? 0) + 1;
    }
  }

  let sum = 0;

  for (const key of Object.keys(citizenChances)) {
    sum += (citizenChances[key] / (gameSettings.players * tryies)) * 100;
    citizenChances[key] = Number(
      ((citizenChances[key] / (gameSettings.players * tryies)) * 100).toFixed(3)
    );
  }

  console.table(citizenChances);
  console.log(sum);
});
