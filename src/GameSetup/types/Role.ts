export const soloRoles: Role[] = [
  'sheriff',
  'boss',
  'maniac',
  'putana',
  'doctor',
  'widow',
  'psycho',
  'advocate',
  'luckyGuy',
  'journalist',
  'detective',
  'amur',
  'hypnotizer',
  'godfather',
  'rat',
  'santa',
  'snitch',
  'thief'
];

export type Role =
  | 'citizen'
  | 'mafia'
  | 'advocate'
  | 'amur'
  | 'boss'
  | 'detective'
  | 'doctor'
  | 'godfather'
  | 'hypnotizer'
  | 'journalist'
  | 'luckyGuy'
  | 'maniac'
  | 'psycho'
  | 'putana'
  | 'rat'
  | 'santa'
  | 'sheriff'
  | 'snitch'
  | 'thief'
  | 'widow';

export type RoleDescription = {
  role: Role;
  name: string;
  team: string;
  action: string;
  specials?: string[];
};
