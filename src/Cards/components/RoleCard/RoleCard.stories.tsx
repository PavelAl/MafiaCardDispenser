import { Meta, StoryObj } from '@storybook/react';

import { RoleCard } from './RoleCard';
import { RoleCardProps } from './RoleCard.types';

type Args = RoleCardProps;

export default {
  title: 'Cards/RoleCard',
  component: RoleCard,
  args: {
    role: 'citizen'
  },
  argTypes: {
    role: {
      control: 'radio',
      options: [
        'citizen',
        'mafia',
        'sheriff',
        'boss',
        'maniac',
        'putana',
        'doctor',
        'widow',
        'psycho',
        'advocate',
        'luckyGuy',
        'journalist',
        'hypnotizer',
        'detective',
        'amur'
      ]
    }
  }
} as Meta<Args>;

export const Default: StoryObj<Args> = {};
