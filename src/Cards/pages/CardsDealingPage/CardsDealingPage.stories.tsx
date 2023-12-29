import { Meta, StoryObj } from '@storybook/react';

import { CardsDealingPage, CardsDealingPageProps } from './CardsDealingPage';

export default {
  title: 'CardsDealingPage',
  component: CardsDealingPage,
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
} as Meta<CardsDealingPageProps>;

interface Args {}

export const Default: StoryObj<Args> = {};
