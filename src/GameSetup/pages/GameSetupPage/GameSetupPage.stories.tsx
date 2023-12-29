import { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';

import { GameSettings } from '~/GameSetup/types';

import { GameSetupPage, GameSetupPageProps } from './GameSetupPage';

const initGameSettings: GameSettings = {
  players: 0,
  mafia: 0
};

const GameSetupPageStory: FC<GameSetupPageProps> = props => {
  const [settings, setGameSettings] = useState<GameSettings>(initGameSettings);

  return <GameSetupPage {...props} settings={settings} onChange={setGameSettings} />;
};

export default {
  title: 'GameSetupPage',
  component: GameSetupPageStory,
  argTypes: {
    onStart: { action: 'start' }
  }
} as Meta<GameSetupPageProps>;

export const Default: StoryObj<GameSetupPageProps> = {};
