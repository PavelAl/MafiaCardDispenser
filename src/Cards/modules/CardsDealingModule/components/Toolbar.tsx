import { Button, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface ToolbarProps {
  currentIndex: number;
  isFirstCard: boolean;
  isLastCard: boolean;
  onGoNext: () => void;
  onGoPrev: () => void;
  onFinish: () => void;
}

export const CardsDealingToolbar: FC<ToolbarProps> = props => {
  const { currentIndex, isFirstCard, isLastCard, onGoNext, onGoPrev, onFinish } = props;

  return (
    <HStack justifyContent={'space-between'}>
      {isFirstCard ? (
        <div style={{ width: 64 }} />
      ) : (
        <Button colorScheme={'blue'} onClick={onGoPrev}>
          Prev
        </Button>
      )}

      <Text fontSize="1xl" fontWeight={600} align={'center'}>
        Player {currentIndex + 1}
      </Text>

      {isLastCard ? (
        <Button colorScheme={'blue'} onClick={onFinish}>
          Finish
        </Button>
      ) : (
        <Button colorScheme={'blue'} onClick={onGoNext}>
          Next
        </Button>
      )}
    </HStack>
  );
};
