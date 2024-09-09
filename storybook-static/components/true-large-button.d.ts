import type { Components, JSX } from "../types/components";

interface TrueLargeButton extends Components.TrueLargeButton, HTMLElement {}
export const TrueLargeButton: {
  prototype: TrueLargeButton;
  new (): TrueLargeButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
