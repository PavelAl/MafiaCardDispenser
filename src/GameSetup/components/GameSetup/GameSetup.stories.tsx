import { Meta, StoryObj } from '@storybook/react';

import { GameSetup } from './GameSetup';
import { GameSetupProps } from './GameSetup.types';

type Args = GameSetupProps;

export default {
  title: 'GameSetup/GameSetup',
  component: GameSetup,
  args: {
    settings: {
      players: 10,
      mafia: 2,
      sheriff: true,
      boss: true,
      maniac: true,
      putana: true,
      doctor: true
    }
  }
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};
