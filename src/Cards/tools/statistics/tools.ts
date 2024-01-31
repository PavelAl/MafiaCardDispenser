import { GameDeckGenerator } from '../GameDeckGenerator';

import { Card } from '~/Cards/types';
import { Role, GameSettings } from '~/GameSetup';

export type Statistic = Record<Role, number>;

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
