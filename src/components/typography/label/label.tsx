import { Component, h, Prop } from '@stencil/core';
import { TextColor } from '../text-base/text-base.interface';

@Component({
  tag: 'true-label',
  styleUrl: 'label.scss',
  shadow: true,
})
export class Label {

  /**
   * Passthrough prop for the color of the label
   */
  @Prop({ reflect: true }) color: TextColor;

  /**
   * The maximum lines to display before truncating the label.
   * Default behavior shows all lines of label with no truncation.
   */
  @Prop({ reflect: true }) maxLines: string;

  render() {
    return (
      <true-text-base size="xs" weight='medium' maxLines={this.maxLines} color={this.color}>
        <slot></slot>
      </true-text-base>
    );
  }
}
