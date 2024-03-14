import { Role } from '~/GameSetup/types';

export type Card = {
  nameRu: string;
  name: string;
  role: Role;
};

export type CardsPool = Record<Role, Card>;
