import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type args = {
  deletable: boolean;
  focused: boolean;
  hasShadow: boolean;
};

const meta: Meta<args> = {
  title: 'App Basics/Chip',
  component: 'true-chip',
  parameters: {
    controls: {
      exclude: ['deletable', 'focused', 'hasShadow'],
    },
  },
  args: {
    deletable: false,
    focused: false,
    hasShadow: false,
  },
  argTypes: {
    deletable: {
      type: 'boolean',
      description: 'Can the chip be deleted',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    focused: {
      type: 'boolean',
      description: 'If the chip is being focused',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    hasShadow: {
      type: 'boolean',
      description: 'Show element shadow',
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: () => html`<true-chip>Chip Value</true-chip>`,
};

export const Deletable: Story = {
  render: () => html`<true-chip deletable>Chip Value</true-chip>`,
};

export const Focused: Story = {
  render: () => html`<true-chip focused>Chip Value</true-chip>`,
};

export const HasShadow: Story = {
  render: () => html`<true-chip has-shadow>Chip Value</true-chip>`,
};

