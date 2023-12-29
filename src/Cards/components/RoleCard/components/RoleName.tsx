import { Text } from '@chakra-ui/react';
import React from 'react';

import { Role } from '~/GameSetup/types';

interface RoleNameProps {
  role: Role;
}

export const RoleName: React.FC<RoleNameProps> = props => {
  const { role } = props;

  return (
    <Text fontSize="5xl" casing={'capitalize'} fontWeight={600} align={'center'}>
      {role}
    </Text>
  );
};
