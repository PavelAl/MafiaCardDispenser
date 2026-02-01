import { Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export const SectionTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Text fontSize="18" fontWeight={500} textAlign={'center'}>
      {children}
    </Text>
  );
};
