import { ActionType } from '../../../interface';
import { ButtonTextSize } from './button.interface';
/**
 * @virtualProp {"light" | "dark"} theme - The theme determines which platform styles to use.
 *
 * @slot - Content is placed in the default slot.
 */
export declare class Button {
  /**
   * The intended action of the button (primary, secondary, destructive)
   */
  type: ActionType;
  /**
   * the size of the text to use in the button
   */
  textSize: ButtonTextSize;
  /**
   * Whether or not to render the button as a submit button
   */
  submit: boolean;
  /**
   * `true` if the button is disabled and cannot be interacted with
   */
  disabled: boolean;
  /**
   * How the button text should be aligned
   */
  textAlign: 'center' | 'left';
  /**
   * `true` if the overlay should be rendered over the button
   */
  hasOverlay: boolean;
  element: Element;
  hostClick(event: any): void;
  render(): any;
}
