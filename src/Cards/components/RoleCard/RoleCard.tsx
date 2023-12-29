import { Card } from '@chakra-ui/react';
import { FC } from 'react';

import { RoleImage } from './components';
import { RoleCardProps } from './RoleCard.types';

export const RoleCard: FC<RoleCardProps> = props => {
  const { role } = props;

  return (
    <Card maxW="sm">
      <RoleImage role={role} />
    </Card>
  );
};
