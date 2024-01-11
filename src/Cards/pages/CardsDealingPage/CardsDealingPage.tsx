import { Stack } from '@chakra-ui/react';
import { FC, useMemo } from 'react';

import { GameDeckGenerator } from '~/Cards/tools';
import { GameSettings } from '~/GameSetup/types';

import { CardsDealingToolbar, CardsPresenter } from './components';
import { useDealingFlow } from './hooks';

export interface CardsDealingPageProps {
  gameSettings: GameSettings;
  onFinish?: () => void;
}

export const CardsDealingPage: FC<CardsDealingPageProps> = props => {
  const { gameSettings, onFinish } = props;

  const roles = useMemo(() => {
    const result = new GameDeckGenerator(gameSettings).createGameDeck().map(({ role }) => role);

    return result;
  }, [gameSettings]);

  const maxIndex = roles.length;

  const { currentIndex, isFirstCard, isLastCard, increment, decrement, handleFinish } =
    useDealingFlow(maxIndex, onFinish);

  return (
    <Stack gap={10} height={620} justifyContent={'space-between'}>
      <CardsPresenter currentIndex={currentIndex} roles={roles} />

      <CardsDealingToolbar
        currentIndex={currentIndex}
        isFirstCard={isFirstCard}
        isLastCard={isLastCard}
        onGoNext={increment}
        onGoPrev={decrement}
        onFinish={handleFinish}
      />
    </Stack>
  );
};
