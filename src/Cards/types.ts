export type Role = 'citizen' | 'mafia' | 'sheriff' | 'boss' | 'maniac' | 'putana' | 'doctor';

export type Card = {
  name: string;
};

export type GameSettings = {
  players: number;
  mafia: number;
  sheriff?: boolean;
  boss?: boolean;
  maniac?: boolean;
  putana?: boolean;
  doctor?: boolean;
};

export type CardsPool = Record<Role, Card>;
