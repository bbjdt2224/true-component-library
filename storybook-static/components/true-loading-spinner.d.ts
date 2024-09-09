import type { Components, JSX } from "../types/components";

interface TrueLoadingSpinner extends Components.TrueLoadingSpinner, HTMLElement {}
export const TrueLoadingSpinner: {
  prototype: TrueLoadingSpinner;
  new (): TrueLoadingSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
