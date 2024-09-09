import { ActionType } from '../../../interface';
/**
 * @slot - Content is placed in the default slot.
 */
export declare class LargeButton {
  /**
   * The icon to display on the right side of the button
   */
  icon: string;
  /**
   * The importance of action the button is intended for (primary, secondary)
   */
  type: ActionType;
  /**
   * Whether or not to render the button as a submit button
   */
  submit: boolean;
  /**
   * `true` if the button is disabled and cannot be interacted with.
   */
  disabled: boolean;
  /**
   * `true` if the button is in a busy state.
   */
  busy: boolean;
  /**
   * Whether to align the text left or center. Center is default
   */
  textAlign: 'center' | 'left';
  element: Element;
  hostClick(event: any): void;
  render(): any;
}
