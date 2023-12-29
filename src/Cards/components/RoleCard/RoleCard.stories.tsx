import { Meta, StoryObj } from '@storybook/react';

import { RoleCard } from './RoleCard';
import { RoleCardProps } from './RoleCard.types';

type Args = RoleCardProps;

export default {
  title: 'RoleCard',
  component: RoleCard,
  args: {
    role: 'citizen'
  },
  argTypes: {
    role: {
      control: 'radio',
      options: ['citizen', 'mafia', 'sheriff', 'boss', 'maniac', 'putana', 'doctor']
    }
  }
} as Meta<Args>;

export const Default: StoryObj<Args> = {};
