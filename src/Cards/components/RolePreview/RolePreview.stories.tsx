import { Meta } from '@storybook/react';

import { Role, rolesDescriptions } from '~/GameSetup';

import { RolePreview } from './RolePreview';

export default {
  title: 'RolePreview',
  component: ({ role }) => (
    <div style={{ width: 270 }}>
      <RolePreview {...rolesDescriptions[role]} />
    </div>
  ),
  args: {
    role: 'putana'
  },
  argTypes: {
    role: {
      control: 'radio',
      options: ['citizen', 'mafia', 'sheriff', 'boss', 'maniac', 'putana', 'doctor']
    }
  }
} as Meta<{ role: Role }>;

export const Default = {};
