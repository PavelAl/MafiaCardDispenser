import { cardsPool } from '../data';
import { Card, CardsPool } from '../types';

import { shuffleArray } from '~/Common/tools';
import { GameSettings, Role, soloRoles } from '~/GameSetup/types';

import { checkThatCitizensSitsToClose, checkThatMafiaSitsToClose } from './statistics/qualityCheck';

export class GameDeckGenerator {
  private deck: Card[] = [];

  constructor(private gameSettings: GameSettings) {}

  createGameDeck(): Card[] {
    this.deck = [];

    this.addMafia();

    for (const role of soloRoles) {
      this.addRole(role);
    }

    this.fillRestWithCitizens();

    return this.shuffleDeck();
  }

  private shuffleDeck = (tryToShuffle = 0): Card[] => {
    let result = shuffleArray(this.deck);

    if (tryToShuffle === 2) {
      return result;
    }

    for (let i = 0; i < 100; i++) {
      result = shuffleArray(result);
    }

    const shouldReshuffle =
      checkThatMafiaSitsToClose(result, this.gameSettings) ||
      checkThatCitizensSitsToClose(result, this.gameSettings);

    if (shouldReshuffle) {
      this.deck = result;

      return this.shuffleDeck(tryToShuffle + 1);
    }

    return result;
  };

  private addMafia() {
    for (let i = 0; i < this.gameSettings.mafia; i++) {
      this.addRoleToDeck('mafia');
    }
  }

  private addRole(role: Role) {
    if (role !== 'citizen' && this.gameSettings[role]) {
      this.addRoleToDeck(role);
    }
  }

  private fillRestWithCitizens() {
    const requiredCitizens = this.gameSettings.players - this.deck.length;

    for (let i = 0; i < requiredCitizens; i++) {
      this.addRoleToDeck('citizen');
    }
  }

  private addRoleToDeck(role: keyof CardsPool) {
    this.deck.push({ ...cardsPool[role] });
  }
}
