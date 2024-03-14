import { Card, CardsPool } from '../types';

const citizenCard: Card = { nameRu: 'Мирный', name: 'Citizen', role: 'citizen' };
const mafiaCard: Card = { nameRu: 'Мафия', name: 'Mafia', role: 'mafia' };
const sheriffCard: Card = { nameRu: 'Шериф', name: 'Sheriff', role: 'sheriff' };
const bossCard: Card = { nameRu: 'Босс', name: 'Boss', role: 'boss' };
const maniacCard: Card = { nameRu: 'Маньяк', name: 'Maniac', role: 'maniac' };
const putanaCard: Card = { nameRu: 'Путана', name: 'Putana', role: 'putana' };
const doctorCard: Card = { nameRu: 'Доктор', name: 'Doctor', role: 'doctor' };
const widowCard: Card = { nameRu: 'Вдова', name: 'Widow', role: 'widow' };
const psychoCard: Card = { nameRu: 'Псих', name: 'Psycho', role: 'psycho' };
const advocateCard: Card = { nameRu: 'Адвокат', name: 'Advocate', role: 'advocate' };
const luckyGuyCard: Card = { nameRu: 'Везунчик', name: 'LuckyGuy', role: 'luckyGuy' };
const journalistCard: Card = { nameRu: 'Журналист', name: 'Journalist', role: 'journalist' };
const hypnotizerCard: Card = { nameRu: 'Гипнотизер', name: 'Hypnotizer', role: 'hypnotizer' };
const detectiveCard: Card = { nameRu: 'Детектив', name: 'Detective', role: 'detective' };
const amurCard: Card = { nameRu: 'Амур', name: 'Amur', role: 'amur' };

export const cardsPool: CardsPool = {
  citizen: citizenCard,
  mafia: mafiaCard,
  sheriff: sheriffCard,
  boss: bossCard,
  maniac: maniacCard,
  putana: putanaCard,
  doctor: doctorCard,
  widow: widowCard,
  psycho: psychoCard,
  advocate: advocateCard,
  luckyGuy: luckyGuyCard,
  journalist: journalistCard,
  hypnotizer: hypnotizerCard,
  detective: detectiveCard,
  amur: amurCard
};
