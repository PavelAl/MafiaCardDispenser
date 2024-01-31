import { Stack } from '@chakra-ui/react';
import { useState } from 'react';

import { CardsDealingPage } from '~/Cards/pages';
import { GameSetupPage, PlayersGetReadyPage } from '~/GameSetup/pages';
import { GameSettings } from '~/GameSetup/types';

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
  const setToPlayesGetReady = () => setMode('players-get-ready');
  const setToDealing = () => setMode('dealing-cards');

  return (
    <Stack gap={5}>
      {mode === 'setup' && <MainPageNavigation />}

      {mode === 'setup' && (
        <GameSetupPage
          settings={settings}
          onChange={setGameSettings}
          onStart={setToPlayesGetReady}
        />
      )}

      {mode === 'players-get-ready' && <PlayersGetReadyPage onStart={setToDealing} />}

      {mode === 'dealing-cards' && (
        <CardsDealingPage gameSettings={settings} onFinish={setToSetup} />
      )}
    </Stack>
  );
}
