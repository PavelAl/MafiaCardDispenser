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
  'thief',
  'bony',
  'klide',
  'mirror'
];

export type Role =
  | 'citizen'
  | 'mafia'
  | 'advocate'
  | 'amur'
  | 'bony'
  | 'boss'
  | 'detective'
  | 'doctor'
  | 'godfather'
  | 'hypnotizer'
  | 'journalist'
  | 'klide'
  | 'luckyGuy'
  | 'maniac'
  | 'mirror'
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
