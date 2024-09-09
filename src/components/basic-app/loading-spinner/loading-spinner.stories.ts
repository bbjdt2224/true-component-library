import { Meta, StoryObj } from '@storybook/web-components';
import { LoadingSpinnerSizes } from './loading-spinner.interface';
import { BackgroundColor, LabelColor } from '../../../interface';

type args = {
  size: LoadingSpinnerSizes;
  loaderColor: LabelColor;
  pathColor: BackgroundColor;
};

const meta: Meta<args> = {
  title: 'App Basics/Loading Spinner',
  component: 'true-loading-spinner',
  args: {
    size: 'm',
    loaderColor: 'custom-brand-accent',
    pathColor: 'tertiary',
  },
  argTypes: {
    size: {
      type: 'string',
      description: 'Size of the loader',
      options: ['s', 'm', 'l', 'xl'],
      control: {
        type: 'select',
      },
      disable: true,
      table: {
        defaultValue: { summary: 'm' },
        type: { summary: 's | m | l | xl' },
      },
    },
    loaderColor: {
      type: 'string',
      description: 'Color of the loader',
      options: ['primary', 'secondary', 'tertiary', 'destructive', 'brand-primary-blue', 'brand-primary-green', 'brand-primary-red', 'neutral-100', 'custom-brand-accent'],
      control: {
        type: 'select',
      },
      disable: true,
      table: {
        defaultValue: { summary: 'custom-brand-accent' },
        type: { summary: 'primary | secondary | tertiary | destructive | brand-primary-blue | brand-primary-green | brand-primary-red | neutral-100 | custom-brand-accent' },
      },
    },
    pathColor: {
      type: 'string',
      description: 'Color of the path the loader follows',
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'select',
      },
      disable: true,
      table: {
        defaultValue: { summary: 'tertiary' },
        type: { summary: 'primary | secondary | tertiary' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {};
