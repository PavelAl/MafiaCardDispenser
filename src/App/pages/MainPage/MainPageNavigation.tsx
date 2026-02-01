import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const MainPageNavigation: FC = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Link style={{ textDecoration: 'underline' }} to={'/cards'}>
        Cards list
      </Link>

      <Text fontSize="3xl" fontWeight={600} textAlign={'center'}>
        Game settings
      </Text>

      <Box width={'60px'} />
    </HStack>
  );
};
