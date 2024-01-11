import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { SectionTitle } from './SectionTitlet';

export const Specials: FC<{ specials: string[] }> = ({ specials }) => {
  return (
    <Stack gap={1}>
      <SectionTitle>Особенности</SectionTitle>

      {specials.length > 0 && (
        <>
          {specials?.map(special => (
            <Text key={special} fontSize="14" fontWeight={400} alignSelf={'flex-start'}>
              - {special}
            </Text>
          ))}
        </>
      )}
    </Stack>
  );
};
