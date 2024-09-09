import { Meta, StoryObj } from '@storybook/web-components';
import { repeat } from 'lit/directives/repeat.js';
import { TextColor, TextWeight } from '../text-base/text-base.interface';
import { HeaderSize } from './header.interface'
import { html } from 'lit';

type args = {
  size: HeaderSize
  color: TextColor;
  weight: TextWeight;
  maxLines: string;
};

const meta: Meta<args> = {
  title: 'Typography/Header',
  component: 'true-header',
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args => html`<true-header size=${args.size} color=${args.color} weight=${args.weight} maxLines=${args.maxLines}>Default Header</true-header>`,
  args: {
    size: 'h1',
    color: 'primary',
    weight: 'medium',
    maxLines: '',
  },
  argTypes: {
    size: {
      type: 'string',
      description: 'The size of the text',
      options: ['h1', 'h2', 'h3', 'h4'],
      control: {
        type: 'select',
      },
      table: {
          defaultValue: { summary: 'h1' },
          type: { summary: 'h1 | h2 | h3 | h4'}
      }
    },
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
      options: ['extra-bold', 'bold', 'medium', 'regular'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'extra-bold | bold | medium | regular' },
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
        <true-header color="primary">Primary</true-header>
        <true-header color="secondary">Secondary</true-header>
        <true-header color="tertiary">Tertiary</true-header>
        <true-header color="custom-brand-accent">Custom Brand</true-header>
        <true-header color="true-primary-blue">Blue</true-header>
        <true-header color="true-primary-green">Green</true-header>
        <true-header color="true-primary-red">Red</true-header>
        <true-header color="neutral-100">Neutral 100</true-header>
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const Sizes: Story = {
  render: () => html`
      <true-header size="h1">H1</true-header>
      <true-header size="h2">H2</true-header>
      <true-header size="h3">H3</true-header>
      <true-header size="h4">H4</true-header>
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const Weights: Story = {
  render: () => html`
      <true-header weight="extra-bold">Extra Bold</true-header>
      <true-header weight="bold">Bold</true-header>
      <true-header weight="medium">Medium</true-header>
      <true-header weight="regular">Regular</true-heade
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const MaxLines: Story = {
    render: () => html`<true-header max-lines='1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</true-header>`,
    decorators: [story => html`<div style="width: 300px">${story()}</div>`],
}
