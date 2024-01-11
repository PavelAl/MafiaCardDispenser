import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { Role } from '~/GameSetup';

import { TeamGallery } from './components';
import { RolesGalleryProps } from './RolesGallery.types';

const cityTeam: Role[] = ['citizen', 'sheriff', 'putana', 'doctor'];
const mafiaTeam: Role[] = ['mafia', 'boss'];
const noTeam: Role[] = ['maniac'];

export const RolesGallery: FC<RolesGalleryProps> = props => {
  const { onRoleSelected } = props;

  return (
    <Stack gap={6} alignItems={'flex-start'}>
      <TeamGallery title="Мирные" roles={cityTeam} onRoleSelected={onRoleSelected} />

      <TeamGallery title="Мафия" roles={mafiaTeam} onRoleSelected={onRoleSelected} />

      <TeamGallery title="Одиночка" roles={noTeam} onRoleSelected={onRoleSelected} />
    </Stack>
  );
};
