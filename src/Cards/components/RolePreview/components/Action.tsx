import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { SectionTitle } from './SectionTitlet';

export const Action: FC<{ action: string }> = ({ action }) => {
  return (
    <Stack gap={1}>
      <SectionTitle>Действие ночью</SectionTitle>

      <Text fontSize="14" fontWeight={400} align={'center'}>
        {action}
      </Text>
    </Stack>
  );
};
