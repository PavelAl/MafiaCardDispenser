import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { RoleCard } from '../RoleCard';

import { SectionTitle, Action, Specials } from './components';
import { RolePreviewProps } from './RolePreview.types';

export const RolePreview: FC<RolePreviewProps> = props => {
  const { role, name, team, action, specials = [] } = props;

  return (
    <Stack gap={3} alignItems={'center'}>
      <RoleCard role={role} />

      <Text fontSize="20" fontWeight={600} align={'center'}>
        {name}
      </Text>

      <SectionTitle>Команда: {team}</SectionTitle>

      <Action action={action} />

      <Specials specials={specials} />
    </Stack>
  );
};
