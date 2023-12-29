import { Role } from '~/GameSetup/types';

export type Card = {
  name: string;
  role: Role;
};

export type CardsPool = Record<Role, Card>;
