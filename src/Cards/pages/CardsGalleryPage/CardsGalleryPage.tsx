import { FC } from 'react';

import { RolePreview } from '~/Cards/components/RolePreview';
import { RolesGallery } from '~/Cards/components/RolesGallery';
import { Role, rolesDescriptions } from '~/GameSetup';

export interface CardsGalleryPageProps {
  selectedRole?: Role;
  onRoleSelected?: (role: Role) => void;
}

export const CardsGalleryPage: FC<CardsGalleryPageProps> = props => {
  const { selectedRole, onRoleSelected } = props;

  return selectedRole ? (
    <RolePreview {...rolesDescriptions[selectedRole]} />
  ) : (
    <RolesGallery onRoleSelected={onRoleSelected} />
  );
};
