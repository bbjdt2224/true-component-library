import { Meta, StoryObj } from '@storybook/web-components';
import { LabelColor } from '../../interface';
import { IconSizes } from './icon.interface';
import { html } from 'lit';

type args = {
  ariaLabel: string;
  name: string;
  size: IconSizes;
  color: LabelColor;
  lazy: boolean;
};

function importAll(r: any): string[] {
  return r.keys().map(r) as string[];
}
const AllIcons = importAll((require as any).context('./icons', true, /\.(svg)$/)).map(iconPath => {
  iconPath = iconPath.substring(iconPath.lastIndexOf('/') + 1, iconPath.lastIndexOf('.'));
  return iconPath;
});

const meta: Meta<args> = {
  title: 'Icons/Icons',
  component: 'true-icon-preview',
};

export default meta;

type Story = StoryObj<args>;

export const Icons: Story = {
    render: () => html`<true-icon-preview icons=${AllIcons}></true-icon-preview>`
}
