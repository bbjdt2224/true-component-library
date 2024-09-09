import { Meta, StoryObj } from '@storybook/web-components';
import { ActionType } from '../../../interface';
import { html } from 'lit';

type args = {
  icon: string;
  type: ActionType;
  submit: boolean;
  disabled: boolean;
  busy: boolean;
  textAlign: 'center' | 'left';
};

const meta: Meta<args> = {
  title: 'Buttons/Large Button',
  component: 'true-large-button',
  args: {
    icon: 'check',
    type: 'primary',
    disabled: false,
    busy: false,
    textAlign: 'center',
  },
  argTypes: {
    icon: {
      type: 'string',
      description: 'Name of the icon within the button',
    },
    type: {
      type: 'string',
      description: 'Intended action of the button',
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
      disable: true,
      table: {
        defaultValue: { summary: 'secondary' },
        type: { summary: 'primary | secondary' },
      },
    },
    submit: {
      type: 'boolean',
      description: 'If the button is rendered as a submit button',
      table: {
        defaultValue: { summary: 'false' },
        disable: true,
      },
    },
    disabled: {
      type: 'boolean',
      description: 'If the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    busy: {
      type: 'boolean',
      description: 'If the button is in busy state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    textAlign: {
      type: 'string',
      description: 'Weather the text should align to the left or center',
      options: ['center', 'left'],
      control: {
        type: 'select',
      },
      disable: true,
      table: {
        defaultValue: { summary: 'center' },
        type: { summary: 'center | left' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args => html`<true-large-button icon=${args.icon} type=${args.type} disabled=${args.disabled} busy=${args.busy} text-align=${args.textAlign}>Default</true-large-button>`,
};
