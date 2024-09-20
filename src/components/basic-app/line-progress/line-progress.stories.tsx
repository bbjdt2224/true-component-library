import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BackgroundColor, LabelColor } from '../../../interface';
import { TextColor } from '../../../components';

type args = {
  progressColor: LabelColor;
  backgroundColor: BackgroundColor;
  textColor: TextColor;
  complete: number;
  total: number;
  showFraction: boolean;
};

const meta: Meta<args> = {
  title: 'App Basics/Line Progress',
  component: 'true-line-progress',
  parameters: {
    controls: {
      exclude: ['showFraction'],
    },
  },
  args: {
    progressColor: 'custom-brand-accent',
    backgroundColor: 'tertiary',
    textColor: 'custom-brand-accent',
    complete: 4,
    total: 10,
    showFraction: true,
  },
  argTypes: {
    progressColor: {
      type: 'string',
      description: 'Color of the progress indicator',
      options: ['primary', 'secondary', 'tertiary', 'destructive', 'true-primary-blue', 'true-primary-green', 'true-primary-red', 'neutral-100', 'custom-brand-accent'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'custom-brand-accent' },
        type: { summary: 'primary | secondary | tertiary | destructive | true-primary-blue | true-primary-green | true-primary-red | neutral-100 | custom-brand-accent' },
      },
    },
    backgroundColor: {
      type: 'string',
      description: 'Color of the progress indicator background',
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'tertiary' },
        type: { summary: 'primary | secondary | tertiary' },
      },
    },
    textColor: {
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
    complete: {
      type: 'number',
      description: 'Number of completed items',
      control: {
        type: 'number',
      },
      table: {
        defalutValue: { summary: '0' },
      },
    },
    total: {
      type: 'number',
      description: 'Total number of items',
      control: {
        type: 'number',
      },
      table: {
        defalutValue: { summary: '1' },
      },
    },
    showFraction: {
      type: 'boolean',
      description: 'Show the fractoin of completed items to total items',
      table: {
        defalutValue: { summary: 'true' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args => html`<div style="width: 300px">
    <true-line-progress
      progress-color=${args.progressColor}
      background-color=${args.backgroundColor}
      text-color=${args.textColor}
      complete=${args.complete}
      total=${args.total}
    ></true-line-progress>
  </div>`,
};

export const NoFraction: Story = {
    render: args => html`<div style="width: 300px">
    <true-line-progress
      progress-color=${args.progressColor}
      background-color=${args.backgroundColor}
      text-color=${args.textColor}
      complete=${args.complete}
      total=${args.total}
      show-fraction=${args.showFraction}
    ></true-line-progress>
  </div>`,
  args: {
    showFraction: false,
  },
};
