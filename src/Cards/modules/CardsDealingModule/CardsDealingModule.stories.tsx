import { Meta, StoryObj } from '@storybook/react';

import { CardsDealingModule, CardsDealingModuleProps } from './CardsDealingModule';

export default {
  title: 'Cards/CardsDealingModule',
  component: CardsDealingModule,
  args: {
    gameSettings: {
      players: 16,
      mafia: 3,
      sheriff: true,
      boss: true,
      doctor: true,
      maniac: true,
      putana: true
    }
  }
} as Meta<CardsDealingModuleProps>;

interface Args {}

export const Default: StoryObj<Args> = {};
