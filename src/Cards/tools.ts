import { shuffleArray } from '~/utils/shufleArray';

import { cardsPool } from './consts';
import { Card, CardsPool, GameSettings } from './types';

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

    return shuffleArray(this.deck);
  }

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
