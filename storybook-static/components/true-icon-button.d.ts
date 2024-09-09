import type { Components, JSX } from "../types/components";

interface TrueIconButton extends Components.TrueIconButton, HTMLElement {}
export const TrueIconButton: {
  prototype: TrueIconButton;
  new (): TrueIconButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
