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
    <Stack gap={8} alignItems="center">
      <GameSetup settings={settings} onChange={onChange} />

      <Button colorScheme={'blue'} isDisabled={settings.players === 0} onClick={onStart}>
        Start
      </Button>
    </Stack>
  );
};
