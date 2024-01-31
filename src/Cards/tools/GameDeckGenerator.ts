import { cardsPool } from '../consts';
import { Card, CardsPool } from '../types';

import { shuffleArray } from '~/Common/tools';
import { GameSettings } from '~/GameSetup/types';

import { checkThatMafiaSitsToClose } from './statistics/qualityCheck';

export class GameDeckGenerator {
  private deck: Card[] = [];

  constructor(private gameSettings: GameSettings) {}

  createGameDeck(): Card[] {
    this.deck = [];

    this.addMafia();
    this.addSherif();
    this.addBoss();
    this.addManiac();
    this.addPutana();
    this.addDoctor();
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

    const allMafiaSitTogether = checkThatMafiaSitsToClose(result, this.gameSettings);

    if (allMafiaSitTogether) {
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

  private addSherif() {
    if (this.gameSettings.sheriff) {
      this.addRoleToDeck('sheriff');
    }
  }

  private addBoss() {
    if (this.gameSettings.boss) {
      this.addRoleToDeck('boss');
    }
  }

  private addManiac() {
    if (this.gameSettings.maniac) {
      this.addRoleToDeck('maniac');
    }
  }

  private addPutana() {
    if (this.gameSettings.putana) {
      this.addRoleToDeck('putana');
    }
  }

  private addDoctor() {
    if (this.gameSettings.doctor) {
      this.addRoleToDeck('doctor');
    }
  }

  private fillRestWithCitizens() {
    const requredCitizens = this.gameSettings.players - this.deck.length;

    for (let i = 0; i < requredCitizens; i++) {
      this.addRoleToDeck('citizen');
    }
  }

  private addRoleToDeck(role: keyof CardsPool) {
    this.deck.push({ ...cardsPool[role] });
  }
}
