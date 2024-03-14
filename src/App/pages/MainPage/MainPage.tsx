import { Button, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import { CardsDealingModule } from '~/Cards/modules';
import { PlayersGetReadyModule } from '~/Game/module';
import { GameSettings, GameSetup } from '~/GameSetup';

import { MainPageNavigation } from './MainPageNavigation';

export type AppMode = 'setup' | 'players-get-ready' | 'dealing-cards';

const initGameSettings: GameSettings = {
  players: 8,
  mafia: 2
};

export function MainPage() {
  const [mode, setMode] = useState<AppMode>('setup');
  const [settings, setGameSettings] = useState<GameSettings>(initGameSettings);

  const setToSetup = () => setMode('setup');
  const setToPlayersGetReady = () => setMode('players-get-ready');
  const setToDealing = () => setMode('dealing-cards');

  return (
    <Stack gap={5}>
      {mode === 'setup' && <MainPageNavigation />}

      {mode === 'setup' && (
        <Stack spacing={8} alignItems={'center'}>
          <GameSetup settings={settings} canEditPlayers={true} onChange={setGameSettings} />

          <Button colorScheme="blue" onClick={setToPlayersGetReady}>
            Готово
          </Button>
        </Stack>
      )}

      {mode === 'players-get-ready' && <PlayersGetReadyModule onStart={setToDealing} />}

      {mode === 'dealing-cards' && (
        <CardsDealingModule gameSettings={settings} onFinish={setToSetup} />
      )}
    </Stack>
  );
}
