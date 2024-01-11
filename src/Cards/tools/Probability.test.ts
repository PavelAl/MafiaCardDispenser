import { Card } from '../types';

import { GameSettings, Role } from '~/GameSetup/types';

import { GameDeckGenerator } from './GameDeckGenerator';

type Statistic = Record<Role, number>;

test('shuffle', () => {
  const numberOfGames = 8;
  const gameSettings: GameSettings = {
    players: 12,
    mafia: 2,
    sheriff: true,
    boss: true,
    doctor: true,
    maniac: false,
    putana: true
  };

  const citizenChances: { [key: string]: number } = {};

  const tryies = 10000;

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

function generateStatistic(gameSettings: GameSettings, numberOfGames: number, tryies: number) {
  for (let i = 0; i < tryies; i++) {
    const citizens = simulateNumberOfGames(gameSettings, numberOfGames);

    for (const citizen of citizens) {
      citizenChances[citizen] = (citizenChances[citizen] ?? 0) + 1;
    }
  }
}

function simulateNumberOfGames(gameSettings: GameSettings, numberOfGames: number) {
  const generator = new GameDeckGenerator(gameSettings);

  const decks: Card[][] = simulateGames(generator, numberOfGames);

  const result: Statistic[] = [];

  for (let i = 0; i < gameSettings.players; i++) {
    let playerResult: Statistic = {
      citizen: 0,
      mafia: 0,
      sheriff: 0,
      boss: 0,
      doctor: 0,
      maniac: 0,
      putana: 0
    };

    for (const deck of decks) {
      const role = deck[i].role;

      playerResult = {
        ...playerResult,
        [role]: (playerResult[role] ?? 0) + 1
      };
    }

    result.push(playerResult);
  }

  return result;
}
function simulateGames(generator: GameDeckGenerator, numberOfGames: number) {
  const decks: Card[][] = [];

  for (let i = 0; i < numberOfGames; i++) {
    decks.push(generator.createGameDeck());
  }

  return decks;
}
