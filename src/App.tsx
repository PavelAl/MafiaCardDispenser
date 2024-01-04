import { Box, ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';

import { CardsDealingPage } from './Cards/pages';
import { GameSetupPage } from './GameSetup/pages';
import { PlayersGetReadyPage } from './GameSetup/pages/PlayersGetReadyPage';
import { GameSettings } from './GameSetup/types';

type AppMode = 'setup' | 'players-get-ready' | 'dealing-cards';

const initGameSettings: GameSettings = {
  players: 8,
  mafia: 2
};

export function App() {
  const [mode, setMode] = useState<AppMode>('setup');
  const [settings, setGameSettings] = useState<GameSettings>(initGameSettings);

  const setToSetup = () => setMode('setup');
  const setToPlayesGetReady = () => setMode('players-get-ready');
  const setToDealing = () => setMode('dealing-cards');

  return (
    <ChakraProvider>
      <Box padding={'20px 0'} maxWidth={430} margin={'auto'}>
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
      </Box>
    </ChakraProvider>
  );
}
