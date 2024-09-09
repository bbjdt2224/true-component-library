import { ActionType } from '../../../interface';
export declare class LargeIconButton {
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
  render(): any;
}
