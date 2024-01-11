export type Role = 'citizen' | 'mafia' | 'sheriff' | 'boss' | 'maniac' | 'putana' | 'doctor';

export const rolesList: Role[] = [
  'citizen',
  'mafia',
  'sheriff',
  'boss',
  'maniac',
  'putana',
  'doctor'
];

export type RoleDescription = {
  role: Role;
  name: string;
  team: string;
  action: string;
  specials?: string[];
};
