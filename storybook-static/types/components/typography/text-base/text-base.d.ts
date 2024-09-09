import { TextColor, TextSize, TextWeight } from "./text-base.interface";
export declare class TextBase {
  /**
   * Size of the text
   */
  size: TextSize;
  /**
   * Primary color of the text
   * Uses predefined css variables
   */
  color: TextColor;
  /**
   * Weight of the text
   */
  weight: TextWeight;
  /**
   * Maximum lines to display before truncating the text
   * If no value is given all lines will show
   */
  maxLines: string;
  loaded: boolean;
  componentDidLoad(): void;
  render(): any;
}
