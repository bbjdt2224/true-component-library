import { TextColor } from '../text-base/text-base.interface';
export declare class Label {
  /**
   * Passthrough prop for the color of the label
   */
  color: TextColor;
  /**
   * The maximum lines to display before truncating the label.
   * Default behavior shows all lines of label with no truncation.
   */
  maxLines: string;
  render(): any;
}
