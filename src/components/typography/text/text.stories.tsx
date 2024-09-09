import { Meta, StoryObj } from '@storybook/web-components';
import { repeat } from 'lit/directives/repeat.js';
import { TextColor, TextWeight } from '../text-base/text-base.interface';
import { html } from 'lit';

type args = {
  color: TextColor;
  weight: TextWeight;
  maxLines: string;
};

const meta: Meta<args> = {
  title: 'Typography/Text',
  component: 'true-text',
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args => html`<true-text color=${args.color} weight=${args.weight} maxLines=${args.maxLines}>Relaxing in basins at the end of inlets terminates the endless tests from the box</true-text>`,
  args: {
    color: 'primary',
    weight: 'regular',
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
        defaultValue: { summary: 'primary' },
        type: { summary: 'primary | secondary | tertiary | custom-brand-accent | true-primary-blue | true-primary-green | true-primary-red | neutral-100' },
      },
    },
    weight: {
      type: 'string',
      description: 'The weight of the text',
      options: ['medium', 'regular'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'regular' },
        type: { summary: 'medium | regular' },
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
        <true-text color="primary">Primary</true-text>
        <true-text color="secondary">Secondary</true-text>
        <true-text color="tertiary">Tertiary</true-text>
        <true-text color="custom-brand-accent">Custom Brand</true-text>
        <true-text color="true-primary-blue">Blue</true-text>
        <true-text color="true-primary-green">Green</true-text>
        <true-text color="true-primary-red">Red</true-text>
        <true-text color="neutral-100">Neutral 100</true-text>
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const Weights: Story = {
    render: () => html`
        <true-text weight="medium">Medium</true-text>
        <true-text weight="regular">Regular</true-text>
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const MaxLines: Story = {
    render: () => html`<true-text max-lines='1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</true-text>`,
    decorators: [story => html`<div style="width: 300px">${story()}</div>`],
}
