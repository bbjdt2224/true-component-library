import { Meta, StoryObj } from '@storybook/web-components';
import { ActionType } from '../../../interface';
import { ButtonTextSize } from './button.interface';
import { html } from 'lit';

type args = {
  type: ActionType;
  textSize: ButtonTextSize;
  submit: boolean;
  disabled: boolean;
  textAlign: 'center' | 'left';
  hasOverlay?: boolean;
};

const meta: Meta<args> = {
  title: 'Buttons/Button',
  component: 'true-button',
  args: {
    textSize: 's',
    submit: false,
    disabled: false,
    textAlign: 'center',
    hasOverlay: false,
  },
  argTypes: {
    type: {
      type: 'string',
      description: 'Intended action of the button',
      options: ['primary', 'secondary', 'danger'],
      control: {
        type: 'select',
      },
      disable: true,
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'primary | secondary | danger' },
      },
      if: { arg: 'type', exists: false },
    },
    textSize: {
      type: 'string',
      description: 'Size of the text in the button',
      options: ['s', 'm'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 's' },
        type: { summary: 's | m' },
      },
    },
    submit: {
      type: 'boolean',
      description: 'Treat the button as a submit button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      type: 'boolean',
      description: 'If the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
      if: { arg: 'disabled', exists: false },
    },
    textAlign: {
      type: 'string',
      description: 'Alignment of the text within the button',
      options: ['center', 'left'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'center' },
        type: { summary: 'center | left' },
      },
    },
    hasOverlay: {
      type: 'boolean',
      description: 'If overlay should be rendered over button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<args>;


export const Primary: Story = {
  render: args =>
    html`<true-button type="primary" text-size=${args.textSize} submit=${args.submit} text-align=${args.textAlign} has-overlay=${args.hasOverlay}>Primary</true-button>`,
  args: {
    type: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  render: args =>
    html`<true-button type="secondary" text-size=${args.textSize} submit=${args.submit} text-align=${args.textAlign} has-overlay=${args.hasOverlay}>Secondary</true-button>`,
  args: {
    type: 'secondary',
    disabled: false,
  },
};

export const Danger: Story = {
  render: args =>
    html`<true-button type="danger" text-size=${args.textSize} submit=${args.submit} text-align=${args.textAlign} has-overlay=${args.hasOverlay}>Danger</true-button>`,
  args: {
    type: 'danger',
    disabled: false,
  },
};

export const Disabled: Story = {
  render: args =>
    html`<true-button type="primary" disabled text-size=${args.textSize} submit=${args.submit} text-align=${args.textAlign} has-overlay=${args.hasOverlay}>Disabled</true-button>`,
  args: {
    type: 'primary',
    disabled: false,
  },
};
