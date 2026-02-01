import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { Preview } from '@storybook/react-vite';
import React from 'react';

const preview: Preview = {
  parameters: {
    backgrounds: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },

  decorators: [
    Story => (
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    )
  ],

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
};

export default preview;
