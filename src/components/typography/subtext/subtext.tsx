import { Component, h, Prop } from '@stencil/core';
import { TextColor, TextWeight } from '../text-base/text-base.interface';

@Component({
  tag: 'true-subtext',
  styleUrl: 'subtext.scss',
  shadow: true,
})
export class Subtext {
  /**
   * Passthrough prop for weight of the text
   */
  @Prop({ reflect: true }) weight: Extract<TextWeight, 'regular' | 'medium' | 'bold'> = 'regular';

  /**
   * Passthrough prop for the color of the text
   */
  @Prop({ reflect: true }) color: TextColor;

  /**
   * The maximum lines to display before truncating the text.
   * Default behavior shows all lines of text with no truncation.
   */
  @Prop({ reflect: true }) maxLines: string;

  render() {
    return (
      <true-text-base size="s" weight={this.weight} maxLines={this.maxLines} color={this.color}>
        <slot></slot>
      </true-text-base>
    );
  }
}
