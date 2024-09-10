import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BackgroundColor } from '../../../interface';

type args = {
  background: BackgroundColor;
};

const meta: Meta<args> = {
  title: 'Layout/Block',
  component: 'true-block',
  args: {
    background: 'secondary',
  },
  argTypes: {
    background: {
      type: 'string',
      description: 'Background color of the container',
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'secondary' },
        type: { summary: 'primary | secondary | tertiary' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args =>
    html`<true-block background="${args.background}">
        <div style="margin: 32px">Block Content</div>
    </true-block>`,
    parameters: {
        backgrounds: {default: 'dark'}
      }
};
