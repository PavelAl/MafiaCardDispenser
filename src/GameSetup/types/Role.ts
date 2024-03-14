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
  'hypnotizer'
];

export type Role =
  | 'citizen'
  | 'mafia'
  | 'sheriff'
  | 'boss'
  | 'maniac'
  | 'putana'
  | 'doctor'
  | 'widow'
  | 'psycho'
  | 'advocate'
  | 'luckyGuy'
  | 'journalist'
  | 'detective'
  | 'amur'
  | 'hypnotizer';

export type RoleDescription = {
  role: Role;
  name: string;
  team: string;
  action: string;
  specials?: string[];
};
