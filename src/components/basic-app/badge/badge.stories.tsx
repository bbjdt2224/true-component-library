import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type args = {
    value: number
    text: string
};

const meta: Meta<args> = {
    title: 'App Basics/Badge',
    component: 'true-badge',
    args: {
        value: 6,
        text: ''
    },
    argTypes: {
        value: {
            type: 'number',
            description: 'Number value of the badge'
        },
        text: {
            type: 'string',
            description: 'Text value of the badge. Default value if no number is givin',
            table: {
                defaultValue: { summary: '' }
            }
        }
    }
}

export default meta;

type Story = StoryObj<args>;

export const Default: Story = {}

export const LargeNumber: Story = {
    args: {
        value: 202
    }
}

export const Text: Story = {
    render: args => `<true-badge text=${args.text}></true-badge>`,
    args: {
        text: 'Yes'
    },
    argTypes: {
        value: {
            control: false
        }
    }
}