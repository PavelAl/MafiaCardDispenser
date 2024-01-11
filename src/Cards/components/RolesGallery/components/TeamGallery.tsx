import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { RoleCard } from '../../RoleCard';
import { RolesGalleryProps } from '../RolesGallery.types';

import { Role } from '~/GameSetup';

type TeamGalleryProps = RolesGalleryProps & {
  title: string;
  roles: Role[];
};

export const TeamGallery: FC<TeamGalleryProps> = props => {
  const { title, roles, onRoleSelected } = props;

  return (
    <Stack gap={3} alignItems={'flex-start'}>
      <Text fontSize="24" fontWeight={600} align={'center'}>
        {title}
      </Text>

      <HStack gap={2} flexWrap={'wrap'}>
        {roles.map(role => (
          <Box key={role} maxW={[100, 150, 200]}>
            <RoleCard role={role} onClick={() => onRoleSelected?.(role)} />
          </Box>
        ))}
      </HStack>
    </Stack>
  );
};
