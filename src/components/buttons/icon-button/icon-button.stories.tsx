import { Meta, StoryObj } from '@storybook/web-components';
import { ActionType } from '../../../interface';
import { IconButtonSize } from './icon-button.interface';

type args = {
  icon: string;
  type: ActionType;
  size: IconButtonSize;
  disabled: boolean;
  toggled: boolean;
  tabindex: number;
  shadow: boolean;
  badge: number;
  hasOverlay: boolean;
  flip: 'h' | 'v' | undefined;
};

const meta: Meta<args> = {
  title: 'Buttons/Icon Button',
  component: 'true-icon-button',
  args: {
    icon: 'check',
    disabled: false,
    hasOverlay: false,
    flip: undefined,
    tabindex: 0,
    toggled: false
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
    size: {
      type: 'string',
      description: 'Size of the icon in the button',
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: {
        type: 'select',
      },
      disable: true,
      table: {
        defaultValue: { summary: 'm' },
        type: { summary: 'xs | s | m | l | xl' },
      },
    },
    tabindex: {
      type: 'number',
      description: 'The order of when the button will be tabbed over',
      table: {
        defaultValue: { summary: '0' },
        disable: true
      },
    },
    disabled: {
      type: 'boolean',
      description: 'If the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    toggled: {
      type: 'boolean',
      description: 'If the button is toggled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    shadow: {
      type: 'boolean',
      description: 'Show box shadow (primary type only)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    badge: {
      type: 'number',
      description: 'The number to show in the top corner',
    },
    hasOverlay: {
      type: 'boolean',
      description: 'If component should render a overlay over the button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    flip: {
      type: 'string',
      description: 'Flips the icon in a direction',
      options: ['', 'h', 'v'],
      control: {
        type: 'select',
      },
      disable: true,
      table: {
        type: { summary: 'h | v' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {
  args: {
    type: 'secondary',
    size: 'm',
    badge: 0,
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    },
    shadow: {
      table: {
        disable: true
      }
    }
  }
};

export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'm',
    shadow: false,
    badge: 0,
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    },
  }
};

export const Badge: Story = {
  args: {
    type: 'secondary',
    size: 'm',
    shadow: false,
    badge: 26,
  },
};