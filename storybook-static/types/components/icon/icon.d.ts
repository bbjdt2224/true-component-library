import { LabelColor } from '../../interface';
import { IconSizes } from './icon.interface';
export declare class Icon {
  private io?;
  el: HTMLElement;
  private svgContent?;
  private isVisible;
  /**
   * Specifies the label to use for accessibility. Defaults to the icon name.
   */
  defaultLabel?: string;
  /**
   * Specifies which icon to use from the built-in set of icons.
   */
  name?: string;
  /**
   * The size of the icon: xxs through xl
   */
  size?: IconSizes;
  color: LabelColor;
  /**
   * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
   * Default, `false`.
   */
  lazy: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  private waitUntilVisible;
  loadIcon(): void;
  render(): any;
}
