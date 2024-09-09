import { Meta, StoryObj } from '@storybook/web-components';
import { repeat } from 'lit/directives/repeat.js';
import { TextColor, TextWeight } from '../text-base/text-base.interface';
import { html } from 'lit';

type args = {
  color: TextColor;
  maxLines: string;
};

const meta: Meta<args> = {
  title: 'Typography/Label',
  component: 'true-label',
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args => html`<true-label color=${args.color} maxLines=${args.maxLines}>Cross valley and plain to steal coins from Saudi mint.</true-label>`,
  args: {
    color: 'tertiary',
    maxLines: '',
  },
  argTypes: {
    color: {
      type: 'string',
      description: 'The color of the text',
      options: ['primary', 'secondary', 'tertiary', 'custom-brand-accent', 'true-primary-blue', 'true-primary-green', 'true-primary-red', 'neutral-100'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'tertiary' },
        type: { summary: 'primary | secondary | tertiary | custom-brand-accent | true-primary-blue | true-primary-green | true-primary-red | neutral-100' },
      },
    },
    maxLines: {
      name: 'max-lines',
      type: 'string',
      description: 'Maximum lines of text before truncation (webkit only)',
    },
  },
};

export const Colors: Story = {
    render: () => html`
        <true-label color="primary">Primary</true-label>
        <true-label color="secondary">Secondary</true-label>
        <true-label color="tertiary">Tertiary</true-label>
        <true-label color="custom-brand-accent">Custom Brand</true-label>
        <true-label color="true-primary-blue">Blue</true-label>
        <true-label color="true-primary-green">Green</true-label>
        <true-label color="true-primary-red">Red</true-label>
        <true-label color="neutral-100">Neutral 100</true-label>
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const MaxLines: Story = {
    render: () => html`<true-label max-lines='1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</true-label>`,
    decorators: [story => html`<div style="width: 300px">${story()}</div>`],
}
