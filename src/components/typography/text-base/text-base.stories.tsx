import { Meta, StoryObj } from '@storybook/web-components';
import { TextSize, TextColor, TextWeight } from './text-base.interface';
import { html } from 'lit';


type args = {
  size: TextSize;
  color: TextColor;
  weight: TextWeight;
  maxLines: string;
};

const meta: Meta<args> = {
  title: 'Typography/Text Base',
  component: 'true-text-base',
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
    render: args => html`<true-text-base size=${args.size} color=${args.color} weight=${args.weight} maxLines=${args.maxLines}>Default</true-text-base>`,
    args: {
      size: 'm',
      color: 'primary',
      weight: 'regular',
      maxLines: ''
    },
    argTypes: {
      size: {
        type: 'string',
        description: 'The size of the text',
        options: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
        control: {
          type: 'select',
        },
        table: {
            defaultValue: { summary: 'm' },
            type: { summary: 'xxs | xs | s | m | l | xl | xxl | xxxl'}
        }
      },
      color: {
        type: 'string',
        description:
          'The color of the text',
        options: ['primary', 'secondary', 'tertiary', 'custom-brand-accent', 'true-primary-blue', 'true-primary-green', 'true-primary-red', 'neutral-100'],
        control: {
          type: 'select',
        },
        table: {
            defaultValue: { summary: 'primary' },
            type: { summary: 'primary | secondary | tertiary | custom-brand-accent | true-primary-blue | true-primary-green | true-primary-red | neutral-100'}
        }
      },
      weight: {
        type: 'string',
        description: 'The weight of the text',
        options: ['extra-bold', 'bold', 'medium', 'regular'],
        control: {
          type: 'select',
        },
        table: {
            defaultValue: { summary: 'regular'},
            type: { summary: 'extra-bold | bold | medium | regular' }
        }
      },
      maxLines: {
        name: 'max-lines',
        type: 'string',
        description: 'Maximum lines of text before truncation (webkit only)',
      },
    }
};

export const Colors: Story = {
  render: () => html`
    <true-text-base color="primary">Primary</true-text-base>
    <true-text-base color="secondary">Secondary</true-text-base>
    <true-text-base color="tertiary">Tertiary</true-text-base>
    <true-text-base color="custom-brand-accent">Custom Brand</true-text-base>
    <true-text-base color="true-primary-blue">Blue</true-text-base>
    <true-text-base color="true-primary-green">Green</true-text-base>
    <true-text-base color="true-primary-red">Red</true-text-base>
    <true-text-base color="neutral-100">Neutral 100</true-text-base>
  `,
  decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const Sizes: Story = {
  render: () => html`
      <true-text-base size="xxxl">Size XXXL</true-text-base>
      <true-text-base size="xxl">Size XXL</true-text-base>
      <true-text-base size="xl">Size XL</true-text-base>
      <true-text-base size="l">Size L</true-text-base>
      <true-text-base size="m">Size M</true-text-base>
      <true-text-base size="s">Size S</true-text-base>
      <true-text-base size="xs">Size XS</true-text-base>
      <true-text-base size="xxs">Size XXS</true-text-base>
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};

export const Weights: Story = {
  render: () => html`
      <true-text-base weight="extra-bold">Extra Bold</true-text-base>
      <true-text-base weight="bold">Bold</true-text-base>
      <true-text-base weight="medium">Medium</true-text-base>
      <true-text-base weight="regular">Regular</true-text-base>
    `,
    decorators: [story => html`<div class='v-flex'">${story()}</div>`],
};