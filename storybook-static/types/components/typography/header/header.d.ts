import { TextColor, TextWeight } from '../text-base/text-base.interface';
import { HeaderSize } from './header.interface';
export declare class Text {
  private sizeMap;
  /**
   * The size of the header
   */
  size: HeaderSize;
  /**
   * Passthrough prop for weight of the header
   */
  weight: TextWeight;
  /**
   * Passthrough prop for the color of the header
   */
  color: TextColor;
  /**
   * The maximum lines to display before truncating the header.
   * Default behavior shows all lines of text with no truncation.
   */
  maxLines: string;
  render(): any;
}
