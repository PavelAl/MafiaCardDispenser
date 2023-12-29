import { Button, HStack, Stack, Text } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

import { RoleCard } from '~/Cards/components';
import { GameDeckGenerator } from '~/Cards/tools';
import { GameSettings } from '~/GameSetup/types';

export interface CardsDealingPageProps {
  gameSettings: GameSettings;
  onFinish?: () => void;
}

export const CardsDealingPage: FC<CardsDealingPageProps> = props => {
  const { gameSettings, onFinish } = props;

  const deck = useMemo(
    () => new GameDeckGenerator(gameSettings).createGameDeck().map(({ role }) => role),
    [gameSettings]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const increment = () => setCurrentIndex(currentIndex + 1);
  const decrement = () => setCurrentIndex(currentIndex - 1);

  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === deck.length - 1;

  const hanldeFinish = () => {
    setCurrentIndex(0);
    onFinish?.();
  };

  return (
    <Stack gap={10}>
      <RoleCard role={deck[currentIndex]} />

      <HStack justifyContent={'space-between'}>
        {isFirstCard ? (
          <div style={{ width: 64 }} />
        ) : (
          <Button colorScheme={'blue'} onClick={decrement}>
            Prev
          </Button>
        )}

        <Text fontSize="1xl" fontWeight={600} align={'center'}>
          Player {currentIndex + 1}
        </Text>

        {isLastCard ? (
          <Button colorScheme={'blue'} onClick={hanldeFinish}>
            Finish
          </Button>
        ) : (
          <Button colorScheme={'blue'} onClick={increment}>
            Next
          </Button>
        )}
      </HStack>
    </Stack>
  );
};
