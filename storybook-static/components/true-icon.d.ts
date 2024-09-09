import type { Components, JSX } from "../types/components";

interface TrueIcon extends Components.TrueIcon, HTMLElement {}
export const TrueIcon: {
  prototype: TrueIcon;
  new (): TrueIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
