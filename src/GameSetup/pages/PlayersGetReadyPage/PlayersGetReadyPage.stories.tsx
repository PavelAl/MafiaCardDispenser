import { Meta, StoryObj } from '@storybook/react';

import { PlayersGetReadyPage, PlayersGetReadyPageProps } from './PlayersGetReadyPage';

export default {
  title: 'PlayersGetReadyPage',
  component: PlayersGetReadyPage,
  argTypes: {
    onStart: { action: 'start' }
  }
} as Meta<PlayersGetReadyPageProps>;

export const Default: StoryObj<PlayersGetReadyPageProps> = {};
