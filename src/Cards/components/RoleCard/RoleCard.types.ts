import { Role } from '~/GameSetup/types';

export interface RoleCardProps {
  role: Role;
  onClick?: () => void;
}
