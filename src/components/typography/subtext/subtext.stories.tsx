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
  title: 'Typography/Subtext',
  component: 'true-subtext',
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args => html`<true-subtext color=${args.color} weight=${args.weight} maxLines=${args.maxLines}>Carved symbols in a mountain hollow on the bank of an inlet irritated an eccentric person.</true-subtext>`,
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
      options: ['medium', 'regular', 'bold'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'regular' },
        type: { summary: 'medium | regular | bold' },
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
        <true-subtext color="primary">Primary</true-subtext>
        <true-subtext color="secondary">Secondary</true-subtext>
        <true-subtext color="tertiary">Tertiary</true-subtext>
        <true-subtext color="custom-brand-accent">Custom Brand</true-subtext>
        <true-subtext color="true-primary-blue">Blue</true-subtext>
        <true-subtext color="true-primary-green">Green</true-subtext>
        <true-subtext color="true-primary-red">Red</true-subtext>
        <true-subtext color="neutral-100">Neutral 100</true-subtext>
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const Weights: Story = {
    render: () => html`
        <true-subtext weight="bold">Bold</true-subtext>
        <true-subtext weight="medium">Medium</true-subtext>
        <true-subtext weight="regular">Regular</true-subtext>
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const MaxLines: Story = {
    render: () => html`<true-subtext max-lines='1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</true-subtext>`,
    decorators: [story => html`<div style="width: 300px">${story()}</div>`],
}
