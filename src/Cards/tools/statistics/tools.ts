import { Card } from '@chakra-ui/react';

import { GameDeckGenerator } from '../GameDeckGenerator';

import { Role, GameSettings } from '~/GameSetup';

export type Statistic = Record<Role, number>;

export function generateStatistic(
  gameSettings: GameSettings,
  numberOfGames: number,
  tryies: number
) {
  for (let i = 0; i < tryies; i++) {
    const citizens = simulateNumberOfGames(gameSettings, numberOfGames);

    for (const citizen of citizens) {
      citizenChances[citizen] = (citizenChances[citizen] ?? 0) + 1;
    }
  }
}

export function simulateNumberOfGames(gameSettings: GameSettings, numberOfGames: number) {
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

export function simulateGames(generator: GameDeckGenerator, numberOfGames: number) {
  const decks: Card[][] = [];

  for (let i = 0; i < numberOfGames; i++) {
    decks.push(generator.createGameDeck());
  }

  return decks;
}
