import type { Components, JSX } from "../types/components";

interface TrueTextButton extends Components.TrueTextButton, HTMLElement {}
export const TrueTextButton: {
  prototype: TrueTextButton;
  new (): TrueTextButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
