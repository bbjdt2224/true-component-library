import type { Components, JSX } from "../types/components";

interface TrueButton extends Components.TrueButton, HTMLElement {}
export const TrueButton: {
  prototype: TrueButton;
  new (): TrueButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
