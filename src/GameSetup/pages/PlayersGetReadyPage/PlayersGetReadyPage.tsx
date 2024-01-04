import { Button, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

export interface PlayersGetReadyPageProps {
  onStart?: () => void;
}

export const PlayersGetReadyPage: FC<PlayersGetReadyPageProps> = props => {
  const { onStart } = props;

  return (
    <Stack gap={10} alignItems="center" justifyContent={'space-between'} padding={4} height={500}>
      <Text fontSize="6xl" fontWeight={600} align={'center'}>
        The city falls asleep
      </Text>

      <Button colorScheme={'blue'} onClick={onStart}>
        Start dealing cards
      </Button>
    </Stack>
  );
};
