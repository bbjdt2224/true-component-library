import type { Components, JSX } from "../types/components";

interface TrueLabel extends Components.TrueLabel, HTMLElement {}
export const TrueLabel: {
  prototype: TrueLabel;
  new (): TrueLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
