import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type args = {
  columns: string;
  align: string;
  justify: string;
  columnGap: string;
  maxWidth: 'max' | 'content' | 'none' | 'form' | 'detail';
};

const meta: Meta<args> = {
  title: 'Layout/Container',
  component: 'true-container',
  args: {
    columns: '',
    align: 'stretch',
    justify: 'initial',
    columnGap: '',
    maxWidth: 'content',
  },
  argTypes: {
    columns: {
      type: 'string',
      description: 'Grid template columns',
    },
    align: {
      type: 'string',
      description: 'Grid item alignment',
      table: {
        defaultValue: { summary: 'stretch'},
      }
    },
    justify: {
      type: 'string',
      description: 'Grid content justification',
      table: {
        defaultValue: { summary: 'initial'},
      }
    },
    columnGap: {
      type: 'string',
      description: 'Gap between columns',
    },
    maxWidth: {
      type: 'string',
      description: 'Max width of the container',
      options: ['max', 'content', 'none', 'form', 'detail'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'content' },
        type: { summary: 'max | content | none | form | detail' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  render: args =>
    html`<true-container columns="${args.columns}" align=${args.align} justify=${args.justify} column-gap=${args.columnGap} max-width=${args.maxWidth}>
      <div>First Column</div>
      <div>Second Column</div>
      <div>First Column</div>
      <div>Second Column</div>
    </true-container>`,
  args: {
    columns: '25% 75%',
  },
  
};
