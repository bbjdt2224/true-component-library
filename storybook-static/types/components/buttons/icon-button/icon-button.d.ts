import { ActionType } from '../../../interface';
import { IconButtonSize } from './icon-button.interface';
export declare class IconButton {
  /**
   * The icon to display inside the button
   */
  icon: string;
  /**
   * The color display of the button.
   */
  type: ActionType;
  /**
   * `true` if the button is disabled and cannot be interacted with.
   */
  disabled: boolean;
  /**
   * `true` if button is in toggled state
   */
  toggled: boolean;
  /**
   * The keyboard focus order
   */
  tabindex: number;
  /**
   * Size of the icon
   */
  size: IconButtonSize;
  /**
   * `true` if a box shadow should be shown (only suports primary type)
   */
  shadow: boolean;
  /**
   * Number shown in a badge in the corner of the button
   */
  badge: number;
  /**
   * `true` if the overlay should be rendered.
   */
  hasOverlay: boolean;
  /**
   * Flips the icon horizontally (h) of vertically (v) in css
   */
  flip: 'h' | 'v';
  renderBadge(): any;
  render(): any;
}
