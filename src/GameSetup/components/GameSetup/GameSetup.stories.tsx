import { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';

import { GameSettings } from '~/GameSetup/types';

import { GameSetup } from './GameSetup';

const initGameSettings: GameSettings = {
  players: 0,
  mafia: 0
};

const GameSetupStory: FC = () => {
  const [settings, setGameSettings] = useState<GameSettings>(initGameSettings);

  return <GameSetup settings={settings} onChange={setGameSettings} />;
};

export default {
  title: 'GameSetup',
  component: GameSetupStory
} as Meta;

interface Args {}

export const Default: StoryObj<Args> = {};
