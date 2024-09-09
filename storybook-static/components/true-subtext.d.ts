import type { Components, JSX } from "../types/components";

interface TrueSubtext extends Components.TrueSubtext, HTMLElement {}
export const TrueSubtext: {
  prototype: TrueSubtext;
  new (): TrueSubtext;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
