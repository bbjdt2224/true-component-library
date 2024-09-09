import { Component, h, Prop } from '@stencil/core';
import { TextColor, TextSize, TextWeight } from '../text-base/text-base.interface';
import { HeaderSize } from './header.interface';

@Component({
  tag: 'true-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Text {
  private sizeMap: { [size in HeaderSize]: TextSize } = {
    h1: 'xxxl',
    h2: 'xxl',
    h3: 'xl',
    h4: 'l',
  };

  /**
   * The size of the header
   */
  @Prop({ reflect: true }) size: HeaderSize = 'h1';

  /**
   * Passthrough prop for weight of the header
   */
  @Prop({ reflect: true }) weight: TextWeight = 'medium';

  /**
   * Passthrough prop for the color of the header
   */
  @Prop({ reflect: true }) color: TextColor;

  /**
   * The maximum lines to display before truncating the header.
   * Default behavior shows all lines of text with no truncation.
   */
  @Prop({ reflect: true }) maxLines: string;

  render() {
    return (
      <true-text-base size={this.sizeMap[this.size]} weight={this.weight} maxLines={this.maxLines} color={this.color}>
        <slot></slot>
      </true-text-base>
    );
  }
}
