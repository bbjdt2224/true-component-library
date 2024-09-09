import { Meta, StoryObj } from '@storybook/web-components';
import { ActionType } from '../../../interface';
import { TextButtonSizes } from './text-button.interface';
import { html } from 'lit';
import { TextWeight } from '../../typography/text-base/text-base.interface';

type args = {
  disabled: boolean;
  type: ActionType;
  size: TextButtonSizes;
  weight: TextWeight;
  location: string;
  newTab: boolean;
  focusable: boolean;
};

const meta: Meta<args> = {
  title: 'Buttons/Text Button',
  component: 'true-text-button',
  args: {
    disabled: false,
    type: 'primary',
    size: 's',
    weight: 'medium',
    location: '',
    newTab: false,
    focusable: true,
  },
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'If the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
        disable: true,
      },
    },
    type: {
      type: 'string',
      description: 'Intended action of the button',
      options: ['primary', 'secondary', 'tertiary', 'brand'],
      control: {
        type: 'select',
      },
      disable: true,
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'primary | secondary | tertiary | brand' },
      },
    },
    size: {
      type: 'string',
      description: 'Size of the button',
      options: ['s', 'm', 'l', 'xl'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 's' },
        type: { summary: 's | m | l | xl' },
      },
    },
    weight: {
      type: 'string',
      description: 'Size of the button',
      options: ['extra-bold', 'bold', 'medium', 'regular'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'extra-bold | bold | medium | regular' },
      },
    },
    location: {
      type: 'string',
      description: 'A link href, if provided the button will render as a link using a tag',
    },
    newTab: {
      type: 'boolean',
      description: 'Set to true if link should open in a new tab',
    },
    focusable: {
      type: 'boolean',
      description: 'If element is allowed to be focusable',
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args =>
    html`<true-text-button type=${args.type} size=${args.size} weight=${args.weight} location=${args.location} new-tab=${args.newTab} focusable=${args.focusable}
      >Default</true-text-button
    >`,
};

export const IconEnd: Story = {
  render: args =>
    html`<true-text-button type=${args.type} size=${args.size} weight=${args.weight} location=${args.location} new-tab=${args.newTab} focusable=${args.focusable}
      >Icon End<true-icon slot="end" name="right"></true-icon
    ></true-text-button>`,
};

export const IconStart: Story = {
  render: args =>
    html`<true-text-button type=${args.type} size=${args.size} weight=${args.weight} location=${args.location} new-tab=${args.newTab} focusable=${args.focusable}
      >Icon Start<true-icon slot="start" name="chevron"></true-icon
    ></true-text-button>`,
};

export const TwoIcons: Story = {
  render: args =>
    html`<true-text-button type=${args.type} size=${args.size} weight=${args.weight} location=${args.location} new-tab=${args.newTab} focusable=${args.focusable}
      >Two Icons<true-icon slot="start" name="chevron"></true-icon><true-icon slot="end" name="right"></true-icon
    ></true-text-button>`,
};

export const Disabled: Story = {
  render: args => html`<true-text-button disabled>Disabled</true-text-button>`,
};
