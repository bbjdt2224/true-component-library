import { TextColor, TextWeight } from '../text-base/text-base.interface';
export declare class Subtext {
  /**
   * Passthrough prop for weight of the text
   */
  weight: Extract<TextWeight, 'regular' | 'medium' | 'bold'>;
  /**
   * Passthrough prop for the color of the text
   */
  color: TextColor;
  /**
   * The maximum lines to display before truncating the text.
   * Default behavior shows all lines of text with no truncation.
   */
  maxLines: string;
  render(): any;
}
