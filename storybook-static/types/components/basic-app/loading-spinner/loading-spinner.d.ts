import { BackgroundColor, LabelColor } from '../../../interface';
import { LoadingSpinnerSizes } from './loading-spinner.interface';
export declare class LoadingSpinner {
  readonly sizeMap: {
    [key in LoadingSpinnerSizes]: number;
  };
  readonly strokeSizeMap: {
    [key in LoadingSpinnerSizes]: number;
  };
  size: LoadingSpinnerSizes;
  /**
   * Color of the loader line
   */
  loaderColor: LabelColor;
  /**
   * Color of the track the loader follows
   */
  pathColor: BackgroundColor;
  get radius(): number;
  get circumference(): number;
  get sizeNumber(): number;
  get strokeWidth(): number;
  render(): any;
}
