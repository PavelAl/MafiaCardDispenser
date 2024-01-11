import { Role } from '~/GameSetup';

export interface RolesGalleryProps {
  onRoleSelected?: (role: Role) => void;
}
