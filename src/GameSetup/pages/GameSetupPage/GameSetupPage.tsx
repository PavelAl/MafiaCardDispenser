import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { GameSetup } from '~/GameSetup/components';
import { GameSettings } from '~/GameSetup/types';

export interface GameSetupPageProps {
  settings: GameSettings;
  onChange: (settings: GameSettings) => void;
  onStart?: () => void;
}

export const GameSetupPage: FC<GameSetupPageProps> = props => {
  const { settings, onChange, onStart } = props;

  return (
    <Stack gap={10} alignItems="center">
      <GameSetup settings={settings} onChange={onChange} />

      <Button colorScheme={'blue'} onClick={onStart}>
        Start
      </Button>
    </Stack>
  );
};