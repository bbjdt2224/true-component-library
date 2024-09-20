import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'true-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge {
  @Prop() value: number;

  @Prop() text = '';

  toShortNumber(input: number): string {
    if (input > 99) {
      return '99+';
    }
    return input.toString();
  }

  render() {
    return (
      <Host>
        <true-subtext color="neutral-100">{this.value ? this.toShortNumber(this.value) : this.text}</true-subtext>
      </Host>
    );
  }
}
