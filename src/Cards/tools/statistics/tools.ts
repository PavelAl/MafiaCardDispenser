import { GameDeckGenerator } from '../GameDeckGenerator';

import { Card } from '~/Cards/types';
import { Role, GameSettings } from '~/GameSetup';

export type Statistic = Record<Role, number>;

export function simulateNumberOfGames(gameSettings: GameSettings, numberOfGames: number) {
  const generator = new GameDeckGenerator(gameSettings);

  const decks: Card[][] = simulateGames(generator, numberOfGames);

  const result: Statistic[] = [];

  for (let i = 0; i < gameSettings.players; i++) {
    const playerResult: Statistic = {
      citizen: 0,
      mafia: 0,
      sheriff: 0,
      boss: 0,
      doctor: 0,
      maniac: 0,
      putana: 0,
      widow: 0,
      psycho: 0,
      advocate: 0,
      luckyGuy: 0,
      journalist: 0,
      hypnotizer: 0,
      detective: 0,
      amur: 0,
      godfather: 0,
      rat: 0,
      santa: 0,
      snitch: 0,
      thief: 0,
      bony: 0,
      klide: 0,
      mirror: 0
    };

    for (const deck of decks) {
      const role = deck[i].role;

      playerResult[role] = (playerResult[role] ?? 0) + 1;
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
