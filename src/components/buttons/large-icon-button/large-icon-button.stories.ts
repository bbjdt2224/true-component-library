import { Meta, StoryObj } from '@storybook/web-components';
import { ActionType } from '../../../interface';
import { html } from 'lit';

type args = {
  icon: string;
  type: ActionType;
  disabled: boolean;
};

const meta: Meta<args> = {
  title: 'Buttons/Large Icon Button',
  component: 'true-large-icon-button',
  args: {
    icon: 'check',
    type: 'secondary',
    disabled: false,
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
    disabled: {
      type: 'boolean',
      description: 'If the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args => html`<true-large-icon-button icon=${args.icon} type=${args.type} disabled=${args.disabled}>Default</true-large-icon-button>`,
};
