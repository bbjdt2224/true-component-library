import { ActionType } from '../../../interface';
import { TextWeight } from '../../typography/text-base/text-base.interface';
import { TextButtonSizes } from './text-button.interface';
/**
 * @virtualProp {"light" | "dark"} theme - The theme determines which platform styles to use.
 *
 * @slot - Content is placed in the default slot.
 */
export declare class TextButton {
  /**
   * `true` if the button is disabled and cannot be interacted with.
   */
  disabled: boolean;
  /**
   * The color display of the button.
   */
  type: ActionType;
  /**
   * The size of the text button, defaults small.
   */
  size: TextButtonSizes;
  /**
   * The weight of the text in the button.
   */
  weight: TextWeight;
  /**
   * A link href. If provided the button will render as a link using an a tag
   */
  location: string;
  /**
   * If a location is provided, add this attribute to have the link open in a new tab
   */
  newTab: boolean;
  /**
   * If true allow element to be focusable
   */
  focusable: boolean;
  host: Element;
  componentDidLoad(): void;
  renderText(): any;
  render(): any;
}
