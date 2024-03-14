import { Meta, StoryObj } from '@storybook/react';

import { Role } from '~/GameSetup';

import { CardsGalleryPage } from './CardsGalleryPage';

export default {
  title: 'Cards/CardsGalleryPage',
  component: CardsGalleryPage,
  args: {},
  argTypes: {
    selectedRole: {
      control: 'radio',
      options: ['citizen', 'mafia', 'sheriff', 'boss', 'maniac', 'putana', 'doctor']
    }
  }
} as Meta<{ selectedRole: Role }>;

interface Args {}

export const Default: StoryObj<Args> = {};
