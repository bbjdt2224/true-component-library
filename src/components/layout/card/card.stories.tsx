import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type args = {
  header: string;
  noHeader: boolean;
  noPadding: boolean | undefined;
};

const meta: Meta<args> = {
  title: 'Layout/Card',
  component: 'true-card',
  parameters: {
    controls: {
      exclude: ['noHeader', 'noPadding']
    }
  },
  args: {
    header: 'Card Header',
    noHeader: false,
    noPadding: false,
  },
  argTypes: {
    header: {
      type: 'string',
      description: 'Card header text',
    },
    noHeader: {
      type: 'boolean',
      description: 'Do not render header text',
    },
    noPadding: {
      type: 'boolean',
      description: 'Card has no padding',
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Basic: Story = {
  render: args =>
    html`<true-card header="${args.header}">
      <div>Card Content</div>
      <div>Card Content</div>
    </true-card>`,
  args: {
    header: 'Card Header',
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

export const NoHeader: Story = {
  render: args =>
    html`<true-card no-header=${args.noHeader}>
      <true-button slot="header-end">Close</true-button>
      <div>Card Content</div>
    </true-card>`,
  args: {
    noHeader: true,
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

export const NoPadding: Story = {
  render: args =>
    html`<true-card header=${args.header} no-padding="true">
      <div>Card Content</div>
    </true-card>`,
  args: {
    header: 'Card Header',
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

export const HeaderEnd: Story = {
  render: args =>
    html`<true-card header=${args.header}>
    <true-icon-button icon="x" slot="header-end">Close</true-icon-button>
      <div>Content inside of card</div>
    </true-card>`,
  args: {
    header: 'Card Header',
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

export const Footer: Story = {
  render: args =>
    html`<true-card header=${args.header}>
      <div>Card Content</div>
      <div slot="footer" style="text-align: center">Footer</div>
    </true-card>`,
  args: {
    header: 'Card Header',
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};
