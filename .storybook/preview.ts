import { Preview } from '@storybook/html';
import { defineCustomElements } from '../dist/esm/loader';
import '../src/styles/main.scss';
import { themes } from '@storybook/theming';

defineCustomElements();
// setCustomElementsManifest(customElements);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
};

export default preview;
