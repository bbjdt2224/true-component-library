import { Component, h, Host, Prop } from '@stencil/core';
import { ActionType } from '../../../interface';
import { removeButtonFocus } from '../button-common';
import { IconButtonSize } from './icon-button.interface';

@Component({
  tag: 'true-icon-button',
  styleUrl: 'icon-button.scss',
  shadow: true,
})
export class IconButton {
  /**
   * The icon to display inside the button
   */
  @Prop({ mutable: true }) icon: string;
  /**
   * The color display of the button.
   */
  @Prop({ reflect: true }) type: ActionType = 'secondary';
  /**
   * `true` if the button is disabled and cannot be interacted with.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * `true` if button is in toggled state
   */
  @Prop({ reflect: true }) toggled = false;

  /**
   * The keyboard focus order
   */
  @Prop() tabindex = 0;

  /**
   * Size of the icon
   */
  @Prop({ reflect: true }) size: IconButtonSize = 'm';

  /**
   * `true` if a box shadow should be shown (only suports primary type)
   */
  @Prop({ reflect: true }) shadow = false;
  /**
   * Number shown in a badge in the corner of the button
   */
  @Prop({ mutable: true }) badge: number;
  /**
   * `true` if the overlay should be rendered.
   */
  @Prop({ reflect: true }) hasOverlay: boolean;

  /**
   * Flips the icon horizontally (h) of vertically (v) in css
   */
  @Prop({ reflect: true }) flip: 'h' | 'v';

  renderBadge() {
    if (this.badge) {
      return (
        <div class="badge">
          <true-subtext color="neutral-100">
            {this.badge}
          </true-subtext>
        </div>
      );
    }
  }

  render() {
    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={{
          'ion-activatable': true,
        }}
      >
        {this.hasOverlay ? <div class="overlay"></div> : null}
        <button tabindex={this.tabindex} disabled={this.disabled} onClick={e => removeButtonFocus(e)}>
          <div class="background"></div>
          <true-icon name={this.icon}></true-icon>
        </button>
        {this.renderBadge()}
      </Host>
    );
  }
}
