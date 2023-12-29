import { Box, ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';

import { CardsDealingPage } from './Cards/pages';
import { GameSetupPage } from './GameSetup/pages';
import { GameSettings } from './GameSetup/types';

const initGameSettings: GameSettings = {
  players: 0,
  mafia: 0
};
type AppMode = 'setup' | 'dealing-cards';

export function App() {
  const [mode, setMode] = useState<AppMode>('setup');
  const [settings, setGameSettings] = useState<GameSettings>(initGameSettings);

  const setToSetup = () => setMode('setup');
  const setToDealing = () => setMode('dealing-cards');

  return (
    <ChakraProvider>
      <Box padding={'20px 0'} maxWidth={430} margin={'auto'}>
        {mode === 'setup' && (
          <GameSetupPage settings={settings} onChange={setGameSettings} onStart={setToDealing} />
        )}

        {mode === 'dealing-cards' && (
          <CardsDealingPage gameSettings={settings} onFinish={setToSetup} />
        )}
      </Box>
    </ChakraProvider>
  );
}
